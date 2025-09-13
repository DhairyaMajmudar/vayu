import { describe, expect, test } from "bun:test";
import type { CSSProperties } from "react";
import { eventStyleGetter } from "./eventStyleGetter";

describe("eventStyleGetter", () => {
  const baseStyle: CSSProperties = {
    borderRadius: "6px",
    opacity: 0.9,
    color: "white",
    border: "0px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    display: "block",
    textAlign: "left",
    padding: "3px 8px",
  };

  test("should return holiday styles for isHoliday event", () => {
    const event = { isHoliday: true };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#dc2626",
      borderLeft: "3px solid #b91c1c",
    });
  });

  test("should return long weekend styles for isLongWeekend event", () => {
    const event = { isLongWeekend: true };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#7c3aed",
      borderLeft: "3px solid #6d28d9",
    });
  });

  test("should return potential styles for isPotential event", () => {
    const event = { isPotential: true };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#9333ea",
      borderLeft: "3px solid #7e22ce",
      opacity: 0.75,
    });
  });

  test("should return personal category styles", () => {
    const event = { category: "personal" };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#2563eb",
      borderLeft: "3px solid #1d4ed8",
    });
  });

  test("should return work category styles", () => {
    const event = { category: "work" };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#16a34a",
      borderLeft: "3px solid #15803d",
    });
  });

  test("should return travel category styles", () => {
    const event = { category: "travel" };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#d97706",
      borderLeft: "3px solid #b45309",
    });
  });

  test("should return family category styles", () => {
    const event = { category: "family" };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#e11d48",
      borderLeft: "3px solid #be123c",
    });
  });

  test("should return default styles for unknown category", () => {
    const event = { category: "unknown" };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#4f46e5",
      borderLeft: "3px solid #4338ca",
    });
  });

  test("should return default styles for empty event object", () => {
    const event = {};
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#4f46e5",
      borderLeft: "3px solid #4338ca",
    });
  });

  test("should prioritize isHoliday over other properties", () => {
    const event = {
      isHoliday: true,
      isLongWeekend: true,
      category: "personal",
    };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#dc2626",
      borderLeft: "3px solid #b91c1c",
    });
  });

  test("should prioritize isLongWeekend over category", () => {
    const event = {
      isLongWeekend: true,
      category: "work",
    };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#7c3aed",
      borderLeft: "3px solid #6d28d9",
    });
  });

  test("should prioritize isPotential over category", () => {
    const event = {
      isPotential: true,
      category: "family",
    };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#9333ea",
      borderLeft: "3px solid #7e22ce",
      opacity: 0.75,
    });
  });

  test("should handle falsy boolean properties", () => {
    const event = {
      isHoliday: false,
      isLongWeekend: false,
      isPotential: false,
      category: "personal",
    };
    const result = eventStyleGetter(event);

    expect(result.style).toEqual({
      ...baseStyle,
      backgroundColor: "#2563eb",
      borderLeft: "3px solid #1d4ed8",
    });
  });
});
