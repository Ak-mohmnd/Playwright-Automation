import { Page } from '@playwright/test';
import fs from 'fs';

export async function captureScreenshot(page: Page, filename: string) {
    const screenshotDir = "screenshots";
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir);
    }
    await page.screenshot({ path: `${screenshotDir}/${filename}` });
}