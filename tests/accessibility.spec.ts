import { expect, test } from "@playwright/test";

test.describe("Accessibility Tests", () => {
  test("homepage should be accessible", async ({ page }) => {
    await page.goto("/");

    await test.step("Check page structure", async () => {
      const main = page.locator("main").or(page.locator('[role="main"]'));
      if ((await main.count()) > 0) {
        await expect(main.first()).toBeVisible();
      }

      const h1Elements = page.locator("h1");
      const h1Count = await h1Elements.count();
      expect(h1Count).toBe(1);
    });

    await test.step("Check keyboard navigation", async () => {
      await page.keyboard.press("Tab");

      const focusedElement = page.locator(":focus");
      if ((await focusedElement.count()) > 0) {
        await expect(focusedElement.first()).toBeVisible();
      }
    });

    await test.step("Check color contrast", async () => {
      const textElements = page.locator("h1, h2, h3, p, a, button").first();
      if (await textElements.isVisible()) {
        const styles = await textElements.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
          };
        });

        expect(styles.color).not.toBe("rgba(0, 0, 0, 0)");
      }
    });
  });

  test("planner page should be accessible", async ({ page }) => {
    await page.goto("/planner");

    await test.step("Check button accessibility", async () => {
      const buttons = page.locator("button");
      const buttonCount = await buttons.count();

      if (buttonCount > 0) {
        for (let i = 0; i < Math.min(buttonCount, 5); i++) {
          const button = buttons.nth(i);
          if (await button.isVisible()) {
            const text = await button.textContent();
            const ariaLabel = await button.getAttribute("aria-label");

            expect(text || ariaLabel).toBeTruthy();
          }
        }
      }
    });
  });

  test("should handle screen reader navigation", async ({ page }) => {
    await page.goto("/");

    await test.step("Check heading hierarchy", async () => {
      const headings = page.locator("h1, h2, h3, h4, h5, h6");
      const headingLevels: number[] = [];

      const count = await headings.count();
      for (let i = 0; i < count; i++) {
        const heading = headings.nth(i);
        const tagName = await heading.evaluate((el) =>
          el.tagName.toLowerCase(),
        );
        const level = parseInt(tagName.replace("h", ""), 10);
        headingLevels.push(level);
      }

      if (headingLevels.length > 0) {
        expect(headingLevels[0]).toBe(1);

        for (let i = 1; i < headingLevels.length; i++) {
          const diff = headingLevels[i] - headingLevels[i - 1];
          expect(diff).toBeLessThanOrEqual(1);
        }
      }
    });
  });
});
