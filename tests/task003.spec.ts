import { test, expect } from '@playwright/test';
import AlertPage from '../pages/steps/task003';

test.describe("JavaScript Alerts & Pop-ups", () => {
    test("Handle JS Alert", async ({ page }) => {
        const alertPage = new AlertPage(page);
        await alertPage.open();
        await alertPage.handleAlert();
    });

    test("Handle JS Confirm Accept", async ({ page }) => {
        const alertPage = new AlertPage(page);
        await alertPage.open();
        await alertPage.handleConfirm(true);
    });

    test("Handle JS Confirm Dismiss", async ({ page }) => {
        const alertPage = new AlertPage(page);
        await alertPage.open();
        await alertPage.handleConfirm(false);
    });

    test("Handle JS Prompt", async ({ page }) => {
        const alertPage = new AlertPage(page);
        await alertPage.open();
        await alertPage.handlePrompt("Playwright Test");
    });
});
