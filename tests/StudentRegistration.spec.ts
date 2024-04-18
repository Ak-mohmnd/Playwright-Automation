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


test('Student Registration Form', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    await page.waitForTimeout(2000);
    await page.textContent(PageHeading);
    await page.click(BTN_Form);
    await page.waitForTimeout(2000);
    await page.click(BTN_PracticForm);
    await page.textContent(LBL_PracticeForm);
    await page.waitForTimeout(1000);
    await page.fill(TXT_FirstName, FirstName);
    await page.fill(TXT_LastName, LastName);
    await page.fill(TXT_Email, UserEmail)
    if (isMale) 
        {
            await page.click('//input[@value="Male"]', {force : true});
        } 
    else 
        {
            await page.click('//input[@value="Female"]', {force : true}); 
        }
    await page.fill('//input[@id="userNumber"]', mobile);
    await page.fill('//input[@id="dateOfBirthInput"]', '05 Apr 2000');
    await page.type('//div//input[@id="subjectsInput"]', 'C', { delay: 50 });
    await page.click('text=Chemistry');
    await page.click('xpath=//label[@for="hobbies-checkbox-2"]');
    await page.setInputFiles('//div//input[@id="uploadPicture"]', 'Media/001.jpg');
    await page.fill('//textarea[@id="currentAddress"]', currentAddress);

// Select state and city --- With faker.js
    // const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
    // const randomState = states[Math.floor(Math.random() * states.length)];
    // await page.click('//div[@class="col-md-4 col-sm-12"]//div[text()="Select State"]');
    // await page.waitForSelector(`text=${randomState}`);
    // await page.click(`text=${randomState}`);

    // const cities = ['Delhi', 'Merrut', 'Lucknow', 'Agra', 'Gurgaon', 'Noida', 'Karnal', 'Panipat', 'Jaipur', 'Jaiselmer'];
    // const randomCity = cities[Math.floor(Math.random() * cities.length)];
    // await page.click('//div[@class="col-md-4 col-sm-12"]//div[text()="Select City"]');
    // //await page.waitForSelector(`text=${randomCity}`);
    // await page.click(`text=${randomCity}`);
    // await page.waitForTimeout(2000);

// Select only NCR state & any random NCR City --- Bacause of failure sometime with library so that's why I just comment it out.
    const state = 'NCR'; // Static for demo purposes
    const cityArray = ['Delhi', 'Gurgaon', 'Noida'];
    const city = cityArray[Math.floor(Math.random() * cityArray.length)];
    await page.click('//div[@id="state"]');
    await page.click(`//div[contains(@class, 'menu')]/descendant::div[contains(text(), '${state}')]`);
    await page.click('//div[@id="city"]');
    await page.click(`//div[contains(@class, 'menu')]/descendant::div[contains(text(), '${city}')]`);

    await page.click('//button[text()="Submit"]');
    const SuccessText = await page.textContent('//div[@class="modal-content"]//div[text()="Thanks for submitting the form"]');
    await page.waitForTimeout(2000);

});
