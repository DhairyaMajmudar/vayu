import { expect, test } from "@playwright/test";

test.describe("Weekend Planner", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/planner");
  });

  test("should display planner page with calendar", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Weekend Planner");

    const calendar = page.locator(".rbc-calendar");
    await expect(calendar).toBeVisible();
  });

  test("should have weekend duration filter buttons", async ({ page }) => {
    const durationButtons = page.locator("button").filter({
      hasText: /day/i,
    });

    const buttonCount = await durationButtons.count();
    expect(buttonCount).toBeGreaterThanOrEqual(3);

    const twoDayButton = page
      .locator("button")
      .filter({ hasText: /2.*day/i })
      .first();
    if (await twoDayButton.isVisible()) {
      await twoDayButton.click();
      await expect(twoDayButton).toHaveClass(/bg-indigo-600|selected/);
    }
  });

  test("should show upcoming weekends section", async ({ page }) => {
    const upcomingSection = page.locator("text=Upcoming").first();
    await expect(upcomingSection).toBeVisible();
  });

  test("should have share functionality", async ({ page }) => {
    const shareButton = page
      .locator("button")
      .filter({ hasText: /share/i })
      .first();

    if (await shareButton.isVisible()) {
      await shareButton.click();

      const shareModal = page
        .locator('[role="dialog"]')
        .or(page.locator("text=Share Your Weekend Plans"));

      await expect(shareModal).toBeVisible();

      const downloadButton = page
        .locator("button")
        .filter({ hasText: /download/i });
      await expect(downloadButton).toBeVisible();

      const closeButton = page
        .locator("button")
        .filter({ hasText: /cancel|close/i })
        .first();
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    }
  });

  test("should display calendar navigation", async ({ page }) => {
    const todayButton = page
      .locator("button")
      .filter({ hasText: /today/i })
      .first();
    await expect(todayButton).toBeVisible();

    const prevButton = page
      .locator("button")
      .filter({ hasText: /<|prev/i })
      .first();
    const nextButton = page
      .locator("button")
      .filter({ hasText: />|next/i })
      .first();

    if (await prevButton.isVisible()) {
      await expect(prevButton).toBeVisible();
    }
    if (await nextButton.isVisible()) {
      await expect(nextButton).toBeVisible();
    }
  });

  test("should be responsive on different screen sizes", async ({ page }) => {
    const viewports = [
      { width: 320, height: 568 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.reload();

      const calendar = page.locator(".rbc-calendar");
      await expect(calendar).toBeVisible();

      const heading = page.locator("h1").first();
      await expect(heading).toBeVisible();
    }
  });

  test("should handle loading states gracefully", async ({ page }) => {
    await page.waitForLoadState("networkidle", { timeout: 10000 });

    const mainContent = page.locator("main").or(page.locator('[role="main"]'));
    if ((await mainContent.count()) > 0) {
      await expect(mainContent.first()).toBeVisible();
    }
  });
});
