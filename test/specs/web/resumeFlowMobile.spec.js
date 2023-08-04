const resumeFlowMobile = require("../../pages/web/resumeFlowMobile.page")

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
const { okayBtn, btn, checkBoxSelected } = require("../../pages/web/preferredBranch.page");

 const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const preAccResumeFlowPage = require("../../pages/web/preAccResumeFlow.page");
const { AQ_MSG_STATE_WAITING } = require("oracledb");




describe("post account opening resume mobile <72 hours Validation : ", () => {

    it("Validate whether valid details of user", async () => {
       // await driver.pause(2000);
        await driver.url("/apply/savings/resume");
        // await driver.maximizeWindow();
        // await driver.setWindowSize(1920,1080);
        // await driver.window.resizeTo();
        await resumeFlowMobile.waitUntilHomepageLoad();
        await driver.pause(7000);
    });
    it("Validate after clicking on Next button user should redirect to the OTP field ", async () => {
        
        await resumeFlowMobile.nextBtn();
        await resumeFlowMobile.mobileField(validTestData.mobileNumber2.mobileNo);
        await driver.pause(3000);
        await resumeFlowMobile.nextBtnEnable();
        await resumeFlowMobile.nextBtnClick();
        await driver.pause(7000);
        await resumeFlowMobile.otpField();
 
     });

     it("Validate OTP field UI is presented as expected UI ", async () => {
        
        await resumeFlowMobile.otpLogo();
        await resumeFlowMobile.validateOtpButton();
 
     });

     it("Validate resend OTP link and cursor ", async () => {
        
        await resumeFlowMobile.resendOtpLink();
        await resumeFlowMobile.cursorPresented();
 
     });
     it("Validate paragraph text below the logo", async () => {
        
        await resumeFlowMobile.paragraph();
        await expect(await resumeFlowMobile.paragraph()).to.be.eql(labelConstants.resumeFlowTexts.paraText);    
    
 
     });
   //   it("Validate timer functionalities", async () => {
        
   //      await resumeFlowMobile.timer();
   //      await resumeFlowMobile.
   //      await expect(await resumeFlowMobile.timer()).to.be.eql(labelConstants.resumeFlowTexts.paraText);    
    
 
   //   });
     
     



});