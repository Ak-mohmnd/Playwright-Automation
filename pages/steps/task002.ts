import { Page } from '@playwright/test';

export default class TablePage 
{
    constructor(private page: Page) {}

    private url = "https://the-internet.herokuapp.com/tables";
    private tableRows = "//table[@id='table1']//tbody/tr";

    async open() {
        await this.page.goto(this.url);
        await this.page.waitForSelector(this.tableRows);
    }
    

    async getCompanyNames(): Promise<string[]> {
        return await this.page.$$eval(this.tableRows, rows =>
            rows.map(row => row.querySelector('td:nth-child(2)')?.textContent?.trim() || "")
        );
    }
    

    async isCompanyPresent(companyName: string): Promise<boolean> {
        const companies = await this.getCompanyNames();
        return companies.includes(companyName);
    }
}
