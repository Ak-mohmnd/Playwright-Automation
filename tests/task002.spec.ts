import { test, expect } from '@playwright/test';
import TablePage from '../pages/steps/task002';

test.describe("Table Tests", () => {
    test("Extract Company Names", async ({ page }) => {
        const tablePage = new TablePage(page);
        await tablePage.open();
        const companies = await tablePage.getCompanyNames();
        console.log("Companies:", companies);
        expect(companies.length).toBeGreaterThan(0);
    });

    test("Verify Specific Company Exists", async ({ page }) => {
        const tablePage = new TablePage(page);
        await tablePage.open();
        const companies = await tablePage.getCompanyNames();
        console.log("Extracted Companies:", companies);
        expect(companies).toContain("Jason"); 
    });
    
});
