import { addDays, getDay, subDays } from "date-fns";
import type { MyEvent } from "@/constants";
import { indianHolidays } from "@/constants";

export const findUpcomingLongWeekends = () => {
  const now = new Date();
  const sixMonthsLater = new Date();
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

  const longWeekends = [];

  for (const holiday of indianHolidays) {
    if (holiday.start < now) continue;
    if (holiday.start > sixMonthsLater) continue;

    const dayOfWeek = getDay(holiday.start);

    if (dayOfWeek === 5) {
      longWeekends.push({
        title: `Long Weekend: ${holiday.title}`,
        start: holiday.start,
        end: addDays(holiday.start, 2),
        isLongWeekend: true,
      });
    } else if (dayOfWeek === 1) {
      longWeekends.push({
        title: `Long Weekend: ${holiday.title}`,
        start: subDays(holiday.start, 2),
        end: holiday.start,
        isLongWeekend: true,
      });
    } else if (dayOfWeek === 4) {
      longWeekends.push({
        title: `Potential 4-day Weekend: ${holiday.title}`,
        start: holiday.start,
        end: addDays(holiday.start, 3),
        isPotential: true,
      });
    } else if (dayOfWeek === 2) {
      longWeekends.push({
        title: `Potential 4-day Weekend: ${holiday.title}`,
        start: subDays(holiday.start, 3),
        end: holiday.start,
        isPotential: true,
      });
    }
  }

  return longWeekends as MyEvent[];
};
