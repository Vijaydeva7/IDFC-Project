const preferredpage = require("../../pages/web/preAccResumeFlow.page")

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
const { okayBtn, btn, checkBoxSelected } = require("../../pages/web/preferredBranch.page");

 const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
const preAccResumeFlowPage = require("../../pages/web/preAccResumeFlow.page");
const { AQ_MSG_STATE_WAITING } = require("oracledb");




describe("Pre Account resume flow Validation : ", () => {

    it("Validate whether valid details of user", async () => {
       // await driver.pause(2000);
        await driver.url("/apply/savings/resume");
        // await driver.maximizeWindow();
        // await driver.setWindowSize(1920,1080);
        // await driver.window.resizeTo();
        await preAccResumeFlowPage.waitUntilHomepageLoad();
        await driver.pause(7000);
    });
    it("check the functionality of next button", async () => {
        
         await preAccResumeFlowPage.nextBtn();
         await preAccResumeFlowPage.mobileField(validTestData.mobileNumber2.mobileNo);
         await driver.pause(3000);
         await preAccResumeFlowPage.nextBtnEnable();
         await preAccResumeFlowPage.nextBtnClick();
         await driver.pause(5000);
         await preAccResumeFlowPage.continueBtn();
         await preAccResumeFlowPage.startJourneyBtn();
         await preAccResumeFlowPage.mobile();



     });

    it("start a new journey button validation", async () => {
        
        await preAccResumeFlowPage.startJourneyBtn();
        
    });

    it("Check functionality of 'Continue where I left off' button.", async () => {
        
        await preAccResumeFlowPage.continueBtnClick();
        await driver.pause(5000);
        await preAccResumeFlowPage.aadhaarFieldAvailable();
        await driver.pause(3000);
    });
    it("to check Aadhaar field/VID presented or not", async () => {
        
        await preAccResumeFlowPage.aadhaarFieldAvailable();
        await driver.pause(3000);
    });

    it("inline Error message in Aadhaar Field when user enter less than 12 Digits", async () => {

             await preAccResumeFlowPage.adharField(invalidTestData.invalidAadhaar.aadhaar);
             await driver.pause(4000);
             await preAccResumeFlowPage.errorMsg();
             await expect(await preAccResumeFlowPage.errorMsg()).to.be.eql(labelConstants.resumeFlowTexts.aadhaarErrorMsg);    

    });
    it("inline Error message in Aadhaar Field when user aadhaar number starts with 0 or 1", async () => {
        
        await preAccResumeFlowPage.adhaarClick();
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }
        await driver.pause(4000);
        await preAccResumeFlowPage.adharField(invalidTestData.invalidAadhaar.aadhaar2);
        await preAccResumeFlowPage.errorMsg();
        await expect(await preAccResumeFlowPage.errorMsg()).to.be.eql(labelConstants.resumeFlowTexts.aadhaarErrorMsg); 
        await preAccResumeFlowPage.adhaarClick();
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }
        await preAccResumeFlowPage.adharField(invalidTestData.invalidAadhaar.aadhaar3);
        await preAccResumeFlowPage.errorMsg();
        await expect(await preAccResumeFlowPage.errorMsg()).to.be.eql(labelConstants.resumeFlowTexts.aadhaarErrorMsg); 
      
        
});
it("inline Error message in Aadhaar Field when user enter less than 16 digits", async () => {
        
    await preAccResumeFlowPage.adhaarClick();
    for (var index = 1; index <= 14; index++) {

        await driver.keys(['Backspace']);

    }
    await driver.pause(4000);
    await preAccResumeFlowPage.adharField(invalidTestData.invalidAadhaar.aadhaar4);
    await preAccResumeFlowPage.errorMsg();
    await expect(await preAccResumeFlowPage.errorMsg()).to.be.eql(labelConstants.resumeFlowTexts.aadhaarErrorMsg); 
    
    
});
it("to check the OTP UI ", async () => {
    await preAccResumeFlowPage.adhaarClick();
    for (var index = 1; index <= 14; index++) {

        await driver.keys(['Backspace']);

    }

    await driver.pause(4000);

    await preAccResumeFlowPage.adharField(validTestData.aadhaarNumber.aadhaar);
    await preAccResumeFlowPage.nextBtnClick();
    await driver.pause(5000);
    await preAccResumeFlowPage.otpLogo();
    await preAccResumeFlowPage.otpMessage();
    await preAccResumeFlowPage.otpBoxes();
});
it("to check the subtext in OTP page", async () => {

    await expect(await preAccResumeFlowPage.subTextOtp()).to.be.eql(labelConstants.resumeFlowTexts.subText); 

});
it("to check the Resend OTP link is presented or not", async () => {

    await preAccResumeFlowPage.resendOtpLink();
    await preAccResumeFlowPage.cursorPresented();
    // await expect(await preAccResumeFlowPage.timerStarts()).to.be.eql(labelConstants.resumeFlowTexts.timer);

});
it("otp field not allowed special chars throws error msg", async () => {

    await preAccResumeFlowPage.specialCharOtp(validTestData.aadhaarNumber.otp);
    await driver.pause(3000);
    await preAccResumeFlowPage.specialCharErrorMsg();
    await expect(await preAccResumeFlowPage.specialCharErrorMsg()).to.be.eql(labelConstants.resumeFlowTexts.specialErr);

});
it("to check OTP error message when user enter incorrect otp", async () => {
    await preAccResumeFlowPage.otp();
    for (var index = 1; index <= 8; index++) {

        await driver.keys(['Backspace']);

    }
    await preAccResumeFlowPage.specialCharOtp(validTestData.aadhaarNumber.otp2);
    await preAccResumeFlowPage.validateOtpButton3();
    await driver.pause(7000);
    await preAccResumeFlowPage.otpErrorMessage();
    await driver.pause(10000);
    await expect(await preAccResumeFlowPage.otpErrorMessage()).to.be.eql(labelConstants.resumeFlowTexts.incorrectOtpMsg);

});
it("to check the functionality of validate OTP button", async () => {
    await preAccResumeFlowPage.otp();
    for (var index = 1; index <= 8; index++) {

        await driver.keys(['Backspace']);

    }
    await preAccResumeFlowPage.validateOtpButton();
    await driver.pause(40000);
    // await preAccResumeFlowPage.specialCharOtp(validTestData.aadhaarNumber.otp2);
    await driver.pause(3000);
    await preAccResumeFlowPage.validateOtpButton2();
    await preAccResumeFlowPage.validateOtpButton3();
    await driver.pause(10000);
    await expect(await preAccResumeFlowPage.landingPage()).to.be.eql(true);

});
// $(selector).parentElement()

    });
