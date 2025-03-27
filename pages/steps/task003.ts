import { Page } from '@playwright/test';

export default class AlertPage 
{
    constructor(private page: Page) {}

    private url = "https://the-internet.herokuapp.com/javascript_alerts";
    private jsAlertButton = "button[onclick='jsAlert()']";
    private jsConfirmButton = "button[onclick='jsConfirm()']";
    private jsPromptButton = "button[onclick='jsPrompt()']";

    async open() {
        await this.page.goto(this.url);
    }

    async handleAlert() {
        this.page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });
        await this.page.click(this.jsAlertButton);
    }

    async handleConfirm(accept: boolean) {
        this.page.once('dialog', async dialog => {
            console.log(`Confirm message: ${dialog.message()}`);
            accept ? await dialog.accept() : await dialog.dismiss();
        });
        await this.page.click(this.jsConfirmButton);
    }

    async handlePrompt(inputText: string) {
        this.page.once('dialog', async dialog => {
            console.log(`Prompt message: ${dialog.message()}`);
            await dialog.accept(inputText);
        });
        await this.page.click(this.jsPromptButton);
    }
}