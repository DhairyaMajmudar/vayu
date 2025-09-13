import { describe, expect, test } from "bun:test";
import type { EventCategory } from "@/constants";
import { getCategoryColor } from "./getCategoryColor";

describe("getCategoryColor", () => {
  describe("all valid categories", () => {
    const validCategories = [
      { category: "personal", expected: "bg-purple-100 text-purple-800" },
      { category: "work", expected: "bg-blue-100 text-blue-800" },
      { category: "travel", expected: "bg-green-100 text-green-800" },
      { category: "family", expected: "bg-pink-100 text-pink-800" },
      { category: "other", expected: "bg-gray-100 text-gray-800" },
    ];

    test.each(validCategories)(
      "should return correct colors for $category",
      ({ category, expected }) => {
        const result = getCategoryColor(category as EventCategory);
        expect(result).toBe(expected);
      },
    );
  });

  describe("all invalid categories", () => {
    const invalidCategories = [
      { category: null, expected: "bg-gray-100 text-gray-800" },
      { category: undefined, expected: "bg-gray-100 text-gray-800" },
    ];

    test.each(invalidCategories)(
      "should return default colors for invalid category",
      ({ category, expected }) => {
        // @ts-expect-error - Testing runtime behavior
        const result = getCategoryColor(category);
        expect(result).toBe(expected);
      },
    );
  });
});
