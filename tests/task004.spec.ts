import { test, expect } from '@playwright/test';
import FileUploadPage from '../pages/steps/task004';
import path from 'path';

test.describe("File Upload Automation", () => {
    test("Upload a file and verify", async ({ page }) => {
        const fileUploadPage = new FileUploadPage(page);
        await fileUploadPage.open();
        
        const filePath = path.join(__dirname, '../Media/001.jpg');
        await fileUploadPage.uploadFile(filePath);
        
        const uploadedFileName = (await fileUploadPage.getUploadedFileName()).trim();
        console.log(`Extracted File Name: "${uploadedFileName}"`);
        expect(uploadedFileName).toBe("001.jpg");
    });
});
