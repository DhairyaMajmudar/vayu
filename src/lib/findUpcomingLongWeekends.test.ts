import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import { addDays, subDays } from "date-fns";
import { findUpcomingLongWeekends } from "./findUpcomingLongWeekends";

const mockIndianHolidays = [
  { title: "Friday Holiday", start: new Date(2024, 2, 15) },
  { title: "Monday Holiday", start: new Date(2024, 3, 1) },
  { title: "Thursday Holiday", start: new Date(2024, 4, 2) },
  { title: "Tuesday Holiday", start: new Date(2024, 5, 4) },
  { title: "Wednesday Holiday", start: new Date(2024, 6, 3) },
  { title: "Saturday Holiday", start: new Date(2024, 7, 3) },
  { title: "Sunday Holiday", start: new Date(2024, 8, 1) },
  { title: "Past Holiday", start: new Date(2023, 0, 1) },
  { title: "Far Future Holiday", start: new Date(2025, 0, 1) },
];

mock.module("@/constants", () => ({
  indianHolidays: mockIndianHolidays,
}));

describe("findUpcomingLongWeekends", () => {
  let originalDate: typeof Date;

  beforeEach(() => {
    originalDate = Date;
    const mockDate = new Date(2024, 2, 1);
    global.Date = class extends Date {
      constructor(...args: any[]) {
        if (args.length === 0) {
          super(mockDate.getTime());
        } else {
          // @ts-ignore
          super(...args);
        }
      }
      static now() {
        return mockDate.getTime();
      }
    } as any;
  });

  afterEach(() => {
    global.Date = originalDate;
  });

  test("should return long weekend for Friday holiday", () => {
    const result = findUpcomingLongWeekends();
    const fridayWeekend = result.find((event) =>
      event.title.includes("Friday Holiday")
    );

    expect(fridayWeekend).toBeDefined();
    expect(fridayWeekend?.title).toBe("Long Weekend: Friday Holiday");
    expect(fridayWeekend?.start).toEqual(new Date(2024, 2, 15));
    expect(fridayWeekend?.end).toEqual(addDays(new Date(2024, 2, 15), 2));
    expect(fridayWeekend?.isLongWeekend).toBe(true);
  });

  test("should return long weekend for Monday holiday", () => {
    const result = findUpcomingLongWeekends();
    const mondayWeekend = result.find((event) =>
      event.title.includes("Monday Holiday")
    );

    expect(mondayWeekend).toBeDefined();
    expect(mondayWeekend?.title).toBe("Long Weekend: Monday Holiday");
    expect(mondayWeekend?.start).toEqual(subDays(new Date(2024, 3, 1), 2));
    expect(mondayWeekend?.end).toEqual(new Date(2024, 3, 1));
    expect(mondayWeekend?.isLongWeekend).toBe(true);
  });

  test("should return potential 4-day weekend for Thursday holiday", () => {
    const result = findUpcomingLongWeekends();
    const thursdayWeekend = result.find((event) =>
      event.title.includes("Thursday Holiday")
    );

    expect(thursdayWeekend).toBeDefined();
    expect(thursdayWeekend?.title).toBe(
      "Potential 4-day Weekend: Thursday Holiday"
    );
    expect(thursdayWeekend?.start).toEqual(new Date(2024, 4, 2));
    expect(thursdayWeekend?.end).toEqual(addDays(new Date(2024, 4, 2), 3));
    expect(thursdayWeekend?.isPotential).toBe(true);
  });

  test("should return potential 4-day weekend for Tuesday holiday", () => {
    const result = findUpcomingLongWeekends();
    const tuesdayWeekend = result.find((event) =>
      event.title.includes("Tuesday Holiday")
    );

    expect(tuesdayWeekend).toBeDefined();
    expect(tuesdayWeekend?.title).toBe(
      "Potential 4-day Weekend: Tuesday Holiday"
    );
    expect(tuesdayWeekend?.start).toEqual(subDays(new Date(2024, 5, 4), 3));
    expect(tuesdayWeekend?.end).toEqual(new Date(2024, 5, 4));
    expect(tuesdayWeekend?.isPotential).toBe(true);
  });

  test("should ignore Wednesday holiday", () => {
    const result = findUpcomingLongWeekends();
    const wednesdayHoliday = result.find((event) =>
      event.title.includes("Wednesday Holiday")
    );

    expect(wednesdayHoliday).toBeUndefined();
  });

  test("should ignore Saturday holiday", () => {
    const result = findUpcomingLongWeekends();
    const saturdayHoliday = result.find((event) =>
      event.title.includes("Saturday Holiday")
    );

    expect(saturdayHoliday).toBeUndefined();
  });

  test("should ignore Sunday holiday", () => {
    const result = findUpcomingLongWeekends();
    const sundayHoliday = result.find((event) =>
      event.title.includes("Sunday Holiday")
    );

    expect(sundayHoliday).toBeUndefined();
  });

  test("should ignore past holidays", () => {
    const result = findUpcomingLongWeekends();
    const pastHoliday = result.find((event) =>
      event.title.includes("Past Holiday")
    );

    expect(pastHoliday).toBeUndefined();
  });

  test("should ignore holidays beyond 6 months", () => {
    const result = findUpcomingLongWeekends();
    const farFutureHoliday = result.find((event) =>
      event.title.includes("Far Future Holiday")
    );

    expect(farFutureHoliday).toBeUndefined();
  });

  test("should return correct number of long weekends", () => {
    const result = findUpcomingLongWeekends();
    expect(result).toHaveLength(4);
  });

  test("should handle empty holidays array", () => {
    mock.module("@/constants", () => ({
      indianHolidays: [],
    }));

    const result = findUpcomingLongWeekends();
    expect(result).toHaveLength(0);
  });

  test("should handle holidays at 6 month boundary", () => {
    const sixMonthHolidays = [
      { title: "Boundary Holiday", start: new Date(2024, 8, 2) },
    ];

    mock.module("@/constants", () => ({
      indianHolidays: sixMonthHolidays,
    }));

    const result = findUpcomingLongWeekends();
    expect(result).toHaveLength(0);
  });

  describe("date calculations", () => {
    test("Friday holiday should create weekend from Friday to Sunday", () => {
      const result = findUpcomingLongWeekends();
      const fridayWeekend = result.find((event) =>
        event.title.includes("Friday Holiday")
      );

      expect(fridayWeekend?.start.getDay()).toBe(5);
      expect(fridayWeekend?.end.getDay()).toBe(0);
    });

    test("Monday holiday should create weekend from Saturday to Monday", () => {
      const result = findUpcomingLongWeekends();
      const mondayWeekend = result.find((event) =>
        event.title.includes("Monday Holiday")
      );

      expect(mondayWeekend?.start.getDay()).toBe(6);
      expect(mondayWeekend?.end.getDay()).toBe(1);
    });

    test("Thursday holiday should create potential weekend from Thursday to Sunday", () => {
      const result = findUpcomingLongWeekends();
      const thursdayWeekend = result.find((event) =>
        event.title.includes("Thursday Holiday")
      );

      expect(thursdayWeekend?.start.getDay()).toBe(4);
      expect(thursdayWeekend?.end.getDay()).toBe(0);
    });

    test("Tuesday holiday should create potential weekend from Saturday to Tuesday", () => {
      const result = findUpcomingLongWeekends();
      const tuesdayWeekend = result.find((event) =>
        event.title.includes("Tuesday Holiday")
      );

      expect(tuesdayWeekend?.start.getDay()).toBe(6);
      expect(tuesdayWeekend?.end.getDay()).toBe(2);
    });
  });

  test("should return array that can be cast to MyEvent type", () => {
    const result = findUpcomingLongWeekends();
    expect(Array.isArray(result)).toBe(true);
  });
});
