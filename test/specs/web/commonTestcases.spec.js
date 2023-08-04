const commontestcases = require("../../pages/web/commonTestcases.page")

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
const { okayBtn, btn, checkBoxSelected } = require("../../pages/web/preferredBranch.page");

 const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
const { AQ_MSG_STATE_WAITING } = require("oracledb");
const preAccResumeFlowPage = require("../../pages/web/preAccResumeFlow.page");




describe("Pre Account resume flow Validation : ", () => {

    it("Validate whether Top black bar", async () => {
      
        // await driver.pause(2000);
      await driver.url("/apply/savings/resume");
      // await driver.maximizeWindow();
      // await driver.setWindowSize(1920,1080);
      // await driver.window.resizeTo();
      await commontestcases.waitUntilHomepageLoad();
      await driver.pause(7000);
      await commontestcases.topBar();

    });

    it("check the resume journey part", async () => {
        
        await commontestcases.resumeJourneyPart();

    });
    
    it("check the LOGO is presented or not", async () => {
        
        await commontestcases.logoPart();
        
    });
    it("check the Welcome Back text is displayed or not", async () => {
        
        await commontestcases.welcomeBackText();
        await expect(await commontestcases.welcomeBackText()).to.be.eql(labelConstants.resumeFlowTexts.welcomeText);    

        
    });
    it("check the paragraph text is displayed or not", async () => {
        
        await commontestcases.paragraph();
        await expect(await commontestcases.paragraph()).to.be.eql(labelConstants.resumeFlowTexts.paraText);    
    
    });
    it("check the Next Button presented or not", async () => {
        
        await commontestcases.nextButton();
    
    });

    it("check the 4 vouchers presented or not", async () => {
        
        await commontestcases.vouchers1();
        await commontestcases.vouchers2();
        await commontestcases.vouchers3();
        await commontestcases.vouchers4();

    });
    it("check the mobile number field accept only numbers", async () => {
        
        await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo);
        await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.mobileText);    

        
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }
        await commontestcases.mobileField(invalidTestData.mobileNumber.containingSplChars);
        await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorText);    

        

    });

    it("check the mobile number field accept only numbers", async () => {
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }

        await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo13);

        await expect(await commontestcases.mobileFieldNumbers()).to.be.eql(labelConstants.resumeFlowTexts.mobileNumber);    

    });

    it("check the mobile number field not accept decimal value numbers", async () => {
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }

        await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo14);

        await expect(await commontestcases.mobileFieldNumbers()).to.be.eql(labelConstants.resumeFlowTexts.mobileNumber);    

    });

    it("check the mobile number field not accept blank spaces", async () => {
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);

        }

        await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo15);

        await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorText);    

    });

 it("check the mobile number field not accept copy paste", async () => {
    for (var index = 1; index <= 14; index++) {

        await driver.keys(['Backspace']);

    }
    await driver.pause(5000);
        await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo);
        await driver.keys(['Ctrl', 'a']);
        await driver.pause(5000);

        await driver.keys(['Ctrl', 'x'])
        await driver.pause(5000);

    
        await driver.refresh();
        await driver.pause(5000);
        await commontestcases.mobileClick();
        await browser.keys(['Ctrl', 'v'])
    
       await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorText);    

    });

    it("check the mobile number field not accept zero as intial and 10 zeros in mobile field", async () => {
        
            await driver.refresh();
            await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo16);
            await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorMobileText);    
    
    });

    it("check the mobile number field not accept less than 10 numbers", async () => {
        
        for (var index = 1; index <= 14; index++) {

            await driver.keys(['Backspace']);
    
        }           
            await commontestcases.mobileField(validTestData.mobileNumber2.mobileNo17);
            await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorMobileText);    
    
    });
    it("check the mobile number field is empty user will get error msg", async () => {
        
            await driver.refresh(); 
            await driver.pause(5000);      
            await commontestcases.mobileClick();
            await driver.keys(['Space']);

            await expect(await commontestcases.mobileText()).to.be.eql(labelConstants.resumeFlowTexts.errorText);    
    
    });
/*
   class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-eCbnBi aTLuo" >> paragraph
   class="sc-ciSmjq PWMmY react-code-input" >> 
   class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-kmIPwp jCuKhl"
   id="resendBtn"
   src="/safe_red~e3c504.png" >> logo
       */ 
    });