const detailspage = require("../../pages/accountDetails.page"); 
const homepage = require("../../pages/web/homepage.page");

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

describe("Account Opening Validation : ", () => {
    it("Validate whether valid details of user", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        // await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        // await driver.pause(7000);
        await driver.pause(5000);
        const mobileNumber = await $('#mobileNumber')
        await mobileNumber.click();
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo6);
        await driver.pause(5000);
        const emailIdField = await $('//*[@id="emailId"]');
        await emailIdField.click();
       // await homepage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(3000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await driver.pause(30000);
        const verifyBtn = await $('//*[@id="verifyOtpBtn"]');
        await verifyBtn.click();
        await driver.pause(10000);
        
    });

    it(" validate whether Lock icon symbol and below text should be seen You have done limited KYC Video KYC should be in progress", async () => {
        await driver.pause(5000);
        await expect(await detailspage.accountDetailsStep2LockLogo()).to.be.eql(true);
        await expect(await detailspage.step2Text()).to.be.eql(labelConstants.detailsPage.step2Text);
        await expect(await detailspage.step2Text2()).to.be.eql(labelConstants.detailsPage.step2Text2);


    });
    it(" validate whether Congratulations! Your saving Account has been opened successfully with Customer ID and Account Number", async () => {
        
        await driver.pause(5000);
        await expect(await detailspage.congoText()).to.be.eql(labelConstants.detailsPage.congoText);
        await expect(await detailspage.customerIdText()).to.be.eql(true);
        await expect(await detailspage.accountNumberText()).to.be.eql(true);

    });

    it(" validate whether The new text Complete 3 easy steps to fully activate your account should show below the congratulations banner ", async () => {
        
        await driver.pause(5000);
        await expect(await detailspage.complete3EasyStepsText()).to.be.eql(labelConstants.detailsPage.complete3EasyStepsText);
       

    });
    Skip.it(" validate whether user clicks appstore user should navigate to appstore for iphone & user clicks google play user should navigate to play store", async () => {
        
        const appStore = await $('//*[@src="/appstore~37d220.svg"]');
        await appStore.click();
        await driver.pause(15000);
        await expect(await detailspage.appleIconDisplayed()).to.be.eql(true);
        await expect(await detailspage.idfcLogoDisplayed()).to.be.eql(true);
        await expect(await detailspage.idfcLinkDisplayed()).to.be.eql(true);


    });
    it(" validate whether The new text Earn upto 6.75% per annum should be displayed in step 3", async () => {
        
        
        await expect(await detailspage.earnUptoText()).to.be.eql(labelConstants.detailsPage.earnUptoText);
       

    });

    it(" validate whether The new text Earn 30-70% more interest than most banks should be displayed in step 3 ", async () => {
        
        
        await expect(await detailspage.moreInterestText()).to.be.eql(labelConstants.detailsPage.moreInterestText);
       

    });



 
});
