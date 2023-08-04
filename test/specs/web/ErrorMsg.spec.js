const errorpage = require("../../pages/web/errorMsg.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

describe("Error Messages Validation : ", () => {
    it.only("Maximize Window Validation", async () => {
       
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        // await driver.pause(10000);
        await errorpage.waitUntilHomepageLoad();
        await driver.pause(2000);
        await expect(await errorpage.isIdfcLogoDisplayed()).to.be.eql(true);

    });

    it("TC_11  To verify single page error message for Customers whose Self declare(Communication add)address belongs to negative pincode list.", async () => {
       
        await errorpage.mobileNumberField();
        await errorpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await errorpage.emailIdField();
        await driver.pause(6000)
        await errorpage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(5000);
        // await expect(await errorpage.popUpCancel()).to.be.eql(true);
        // const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        // await cancel.click();
        await driver.pause(6000)
        await errorpage.panNumberField();
        await errorpage.setValueToPan(validTestData.panNumber.pan);
        await driver.pause(3000);
        await errorpage.aadhaarField();
        await errorpage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await errorpage.getOtpBtn();
        await driver.pause(50000);
        await errorpage.verifyOtpBtn();
        await driver.pause(50000);
        await expect(await errorpage.errorTitleText()).to.be.eql(labelConstants.errorHiThereText);
        await expect(await errorpage.errorMessageText()).to.be.eql(labelConstants.errorMessage);
        await expect(await errorpage.apologiesErrorText()).to.be.eql(labelConstants.apologiesText1);
        await expect(await errorpage.apologiesErrorText2()).to.be.eql(labelConstants.apologiesText2);
        await expect(await errorpage.okayBtn()).to.be.eql(true);
        await expect(await errorpage.nearestBtn()).to.be.eql(true);
        await expect(await errorpage.logoIsDisplayed()).to.be.eql(true);

    });

    it.only("TC_15 To verify multiple full page for Customer Mobile and Aadhaar not linked and unable to validate PAN", async () => {
        await driver.refresh();
        await errorpage.mobileNumberField();
        await errorpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await errorpage.emailIdField();
        await driver.pause(6000)
        await errorpage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(5000);
        // await expect(await errorpage.popUpCancel()).to.be.eql(true);
        // const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        // await cancel.click();
        await driver.pause(6000)
        await errorpage.panNumberField();
        await errorpage.setValueToPan(validTestData.panNumber.pan);
        await driver.pause(3000);
        await errorpage.aadhaarField();
        await errorpage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar2);
        await driver.pause(10000);
        await errorpage.getOtpBtn();
        await driver.pause(50000);
        await errorpage.verifyOtpBtn();
        await driver.pause(50000);
        //Need to modify below assertions 
        await expect(await errorpage.errorTitleText()).to.be.eql(labelConstants.errorHiThereText);
        await expect(await errorpage.errorMessageText()).to.be.eql(labelConstants.errorMessage);
        await expect(await errorpage.notLinkedText()).to.be.eql(labelConstants.notLinkedText);
        await expect(await errorpage.notLinkedText2()).to.be.eql(labelConstants.notLinkedText2);
        await expect(await errorpage.okayBtn()).to.be.eql(true);
        await expect(await errorpage.logoIsDisplayed()).to.be.eql(true);
        await driver.pause(2000)
        await errorpage.interestRates();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.faq();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.privacyPolicy();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.desclaimer();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.bankingOmbudsman();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.termsAndCondition();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        await errorpage.regulatory();
        await driver.pause(5000);
        

    });


    it("TC_16 To verify multiple full page error message for Customer whose PAN and Aadhaar name mismatch and also customer fail in Posidex.", async () => {
        await driver.refresh();
        await errorpage.mobileNumberField();
        await errorpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await errorpage.emailIdField();
        await driver.pause(6000)
        await errorpage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(5000);
        // await expect(await errorpage.popUpCancel()).to.be.eql(true);
        // const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        // await cancel.click();
        await driver.pause(6000)
        await errorpage.panNumberField();
        await errorpage.setValueToPan(validTestData.panNumber.pan2);
        await driver.pause(3000);
        await errorpage.aadhaarField();
        await errorpage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await errorpage.getOtpBtn();
        await driver.pause(50000);
        await errorpage.verifyOtpBtn();
        await driver.pause(50000);
        await expect(await errorpage.errorTitleText()).to.be.eql(labelConstants.errorHiThereText);
        await expect(await errorpage.errorMessageText()).to.be.eql(labelConstants.errorMessage);
        await expect(await errorpage.nameMisMatchError()).to.be.eql(labelConstants.nameMismatchErrorText);
        await expect(await errorpage.nameMisMatchError2()).to.be.eql(labelConstants.nameMismatchErrorText2);
        await expect(await errorpage.okayBtn()).to.be.eql(true);
        await expect(await errorpage.logoIsDisplayed()).to.be.eql(true);

        const footer1 = await $('//*[text()="Interest Rates"]');
        await footer1.click();
        await driver.pause(5000);
        //await driver.closeWindow();
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer2 = await $('//*[text()="FAQ"]');
        await footer2.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer3 = await $('//*[text()="Privacy Policy"]');
        await footer3.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer4 = await $('//*[text()="Disclaimer"]');
        await footer4.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer5 = await $('//*[text()="Banking Ombudsman"]');
        await footer5.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer6 = await $('//*[text()="Terms & Conditions"]');
        await footer6.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-opt.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer7 = await $('//*[text()="Regulatory"]');
        await footer7.click();
        await driver.pause(5000);
       
    });
    
});