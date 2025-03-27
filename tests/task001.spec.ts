import { test, expect, chromium, Page } from '@playwright/test';
import fs from 'fs';
import LoginPage from '../pages/steps/task001';

test.describe("Login Tests", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test("Valid Login", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("tomsmith", "SuperSecretPassword!");
        expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    });

    test("Invalid Login", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("invalidUser", "invalidPass");
        expect(await loginPage.getErrorMessage()).toContain("Your username is invalid!");
        await captureScreenshot(page, "invalid_login.png");
    });

    async function captureScreenshot(page: Page, filename: string) {
        const screenshotDir = "screenshots";
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir);
        }
        await page.screenshot({ path: `${screenshotDir}/${filename}` });
    }
});