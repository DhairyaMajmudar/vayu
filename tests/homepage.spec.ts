import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should have correct title and meta description", async ({ page }) => {
    await expect(page).toHaveTitle(/Vayu - Your Weekend Planner/);

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /Vayu makes weekend planning as fast as wind/,
    );
  });

  test("should display hero section with main heading", async ({ page }) => {
    const heroHeading = page.locator("h1").first();
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText(/weekend/i);
  });

  test("should have working navigation to planner", async ({ page }) => {
    const plannerLink = page.locator('a[href="/planner"]').first();
    await expect(plannerLink).toBeVisible();

    await plannerLink.click();
    await page.waitForURL("/planner");
    await expect(page).toHaveURL("/planner");
  });

  test("should be responsive on mobile devices", async ({ page, isMobile }) => {
    if (isMobile) {
      const mobileMenu = page.locator('[data-testid="mobile-menu"]');
      const menuButton = page.locator('[data-testid="menu-button"]');

      if (await menuButton.isVisible()) {
        await menuButton.click();
        await expect(mobileMenu).toBeVisible();
      }
    }
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    const h1Elements = page.locator("h1");
    const h1Count = await h1Elements.count();

    expect(h1Count).toBe(1);

    const headings = page.locator("h1, h2, h3, h4, h5, h6");
    const headingTexts = await headings.allTextContents();

    expect(headingTexts.length).toBeGreaterThan(0);
  });

  test("should load without console errors", async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const significantErrors = consoleErrors.filter(
      (error) => !error.includes("favicon") && !error.includes("404"),
    );

    expect(significantErrors).toHaveLength(0);
  });
});
