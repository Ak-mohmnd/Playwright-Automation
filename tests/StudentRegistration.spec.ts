import { test, expect, chromium } from '@playwright/test';
import { faker } from '@faker-js/faker';


// Selectors for the Student Registration Form
    const PageHeading = '//div//h5[text()="Elements"]';
    const BTN_Form = '//div//h5[text()="Forms"]';
    const BTN_PracticForm = '//div//span[text()="Practice Form"]';
    const LBL_PracticeForm = '//h1[text()="Practice Form"]';
    const TXT_FirstName = '//input[@id="firstName"]';
    const TXT_LastName = '//input[@id="lastName"]';
    const TXT_Email = '//input[@id="userEmail"]';

// Use Faker to generate random data
    const FirstName = faker.name.firstName();
    const LastName = faker.name.lastName();
    const UserEmail = faker.internet.email();
    const mobile = faker.phone.number('##########');
    const currentAddress = faker.address.streetAddress();
    const isMale = faker.datatype.boolean();


    test.describe('Student Registration Form', () => {
        test.beforeEach(async ({ page }) => {
            // Navigate to the site
            await page.goto('https://demoqa.com/');
            // Ensure the page is loaded by checking for the presence of a specific element
            await expect(page.locator(PageHeading)).toBeVisible();
            await page.click(BTN_Form);
            await expect(page.locator(BTN_PracticForm)).toBeVisible();
            await page.click(BTN_PracticForm);
            await expect(page.locator(LBL_PracticeForm)).toBeVisible();
        });
    
        for (let i = 0; i < 2; i++) {
            test(`Submit the form - Attempt ${i + 1}`, async ({ page }) => {
                // Filling the form
                await page.fill(TXT_FirstName, FirstName);
                await page.fill(TXT_LastName, LastName);
                await page.fill(TXT_Email, UserEmail);
                if (isMale) {
                    await page.click('//input[@value="Male"]', { force: true });
                } else {
                    await page.click('//input[@value="Female"]', { force: true });
                }
                await page.fill('//input[@id="userNumber"]', mobile);
                await page.fill('//input[@id="dateOfBirthInput"]', '05 Apr 2000');
                await page.type('//div//input[@id="subjectsInput"]', 'C', { delay: 50 });
                await page.click('text=Chemistry');
                await page.click('xpath=//label[@for="hobbies-checkbox-2"]');
                await page.setInputFiles('//div//input[@id="uploadPicture"]', 'Media/001.jpg');
                await page.fill('//textarea[@id="currentAddress"]', currentAddress);
    
                // Selecting the state and city
                const state = 'NCR'; // Static for demo purposes
                const cityArray = ['Delhi', 'Gurgaon', 'Noida'];
                const city = cityArray[Math.floor(Math.random() * cityArray.length)];
                await page.click('//div[@id="state"]');
                await page.click(`//div[contains(@class, 'menu')]/descendant::div[contains(text(), '${state}')]`);
                await page.click('//div[@id="city"]');
                await page.click(`//div[contains(@class, 'menu')]/descendant::div[contains(text(), '${city}')]`);
    
                // Submitting the form
                await page.click('//button[text()="Submit"]');
                // Checking for success message
                await expect(page.locator('//div[@class="modal-content"]//div[text()="Thanks for submitting the form"]')).toBeVisible();
            });
        }
    });
    