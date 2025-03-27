import { test, expect, Page } from '@playwright/test';


export default class LoginPage 
{
    constructor(private page: Page) {}
    private url = "https://the-internet.herokuapp.com/login";
    private usernameInput = "//input[@id='username']";
    private passwordInput = "//input[@id='password']";
    private loginButton = "//button[contains(@class, 'radius')]";
    private logoutButton = "//a[contains(@class, 'button secondary radius')]";
    private errorMessage = "//div[@id='flash']";

    async open() {
        await this.page.goto(this.url);
    }
    
    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoginSuccessful() {
        return this.page.isVisible(this.logoutButton);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage) || "";
    }
}