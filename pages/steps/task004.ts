import { Page } from '@playwright/test';

export default class FileUploadPage 
{
    constructor(private page: Page) {}

    private url = "https://the-internet.herokuapp.com/upload";
    private fileInput = "input[type='file']";
    private uploadButton = "input[type='submit']";
    private uploadedFileName = "#uploaded-files";

    async open() {
        await this.page.goto(this.url);
    }

    async uploadFile(filePath: string) {
        const fileChooser = await this.page.waitForSelector(this.fileInput);
        await fileChooser.setInputFiles(filePath);
        await this.page.click(this.uploadButton);
    }

    async getUploadedFileName(): Promise<string> {
        return await this.page.textContent(this.uploadedFileName) || "";
    }
}