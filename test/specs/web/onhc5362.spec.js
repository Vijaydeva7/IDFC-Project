const onhc5362 = require("../../pages/web/onhc5362.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const onhc5362Page = require("../../pages/web/onhc5362.page");

// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const { on } = require("npm");


describe(" ohnc5362 sheet testecases valisation : ", () => {
    it("IDFC window open", async () => {
       
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        await onhc5362.waitUntilHomepageLoad();
        await driver.pause(5000);
       
    });
    
    it("To check select your product heading in Landing Page", async () => {
       
       await onhc5362.selectProductHeading();
       await expect(await onhc5362.selectProductHeading()).to.be.eql(labelConstants.onhc5360.selectPText)
       
    });

    it("To check product view of tiles in collapse view", async () => {
       
        await onhc5362.toCheckProductView();
        await onhc5362.toCheckProductView2();
        await expect(await onhc5362.toCheckCollapseView()).to.be.eql(true);
        
     });
     it('to check 10k and 15k cards', async () => {
        // const elem = await $$('//*[@class="sc-hBeyRu evUNvk"]');
        // const parent = await elem[2].parentElement()
        // console.log(await parent.getAttribute('class')); // outputs: "parent"

        // const ele = await  $('//*[@class="sc-hBeyRu evUNvk"]');
        // console.log("######", await ele.parentElement());
        // console.log("$$$$$$$", await ele.getAttribute('class'));
        // await expect(await ele.parentElement()).to.be.eql(await ele.getAttribute('class'));

        await onhc5362.classicCard();
        //await console.log("#######", await onhc5362.classicCard());
        await onhc5362.platinumCard();
        //await console.log("#######", await onhc5362.platinumCard());
       // await expect(await onhc5362.classicCard()).to.be.eql(await onhc5362.platinumCard());

    });
    





    it('to check collapsed view of 10k product tile card', async () => {
        
        await onhc5362.tenKproduct10000Text();
        await expect(await onhc5362.tenKproduct10000Text()).to.be.eql(labelConstants.onhc5360.tenKText);
        await onhc5362.tenKproductPara();
        await expect(await onhc5362.tenKproductPara()).to.be.eql(labelConstants.onhc5360.para1);
        await onhc5362.tenKproductPara2();
        await expect(await onhc5362.tenKproductPara2()).to.be.eql(labelConstants.onhc5360.para2);
        await onhc5362.crossMark();
        await onhc5362.fiveLakhsText();
        await expect(await onhc5362.fiveLakhsText()).to.be.eql(labelConstants.onhc5360.para3);
        await onhc5362.classicRadio();
        
    });
    
    it('to check collapsed view of 25k product tile card', async () => {

        await onhc5362.popularHeadingText();
        await expect(await onhc5362.popularHeadingText()).to.be.eql(labelConstants.onhc5360.popularText);
        await onhc5362.twentyFiveKtext();
        await expect(await onhc5362.twentyFiveKtext()).to.be.eql(labelConstants.onhc5360.twentyFive);
        await onhc5362.twentyFivePara();
        await expect(await onhc5362.twentyFivePara()).to.be.eql(labelConstants.onhc5360.twentyFivePara);
        await onhc5362.twentyFivePara2();
        await expect(await onhc5362.twentyFivePara2()).to.be.eql(labelConstants.onhc5360.twentyFivePara2);
        await onhc5362.thirtyFiveLakhs();
        await expect(await onhc5362.thirtyFiveLakhs()).to.be.eql(labelConstants.onhc5360.thirtyFiveLakhText);
        await onhc5362.platinumRadio();

    });
  
    it('to check 25k product tile card selected by default', async () => {
          
    await onhc5362.radio25kSelectedBydefault();

    });

      
    it('to check selected and non selected product tile cards', async () => {
        
        await onhc5362.radio25kSelectedBydefault();
        await onhc5362.selectedCardColor();
        await expect(await onhc5362.selectedCardColor()).to.be.eql("color: rgb(255, 255, 255); font-size: 20px; font-weight: 700;");
        await onhc5362.unselectedCard();
        await expect(await onhc5362.unselectedCard()).to.be.eql("color: rgb(75, 77, 77); font-size: 20px; font-weight: 700;");

       

    
    });
   
    it('to check all benefits link and arrow icon', async () => {
       

        await onhc5362.iconDownDisplayed();
        await driver.pause(3000);
        await onhc5362.clickAllBenefits();
        await driver.pause(3000);
        await onhc5362.iconUpDisplayed();

    });
    
    it('to check T&C conditions', async () => {
        
       
       await onhc5362.termsAndCondition();
       await driver.pause(5000);
    
    });
     
    it('to check expand view of 10k product', async () => {
        
       await onhc5362.tenKexpandView();

    });
    
    it('to check 25k product tile card', async () => {
        
        await onhc5362.twentyFiveKexpandView();

    });
  
    it('to open Account with 10k Card', async () => {
       
        await driver.refresh();
        await driver.pause(7000);
        await onhc5362.mobileField(validTestData.mobileNumber2.mobileNo);
        await onhc5362.email();
        await driver.pause(10000);
        await onhc5362.emailField(validTestData.emailId.validEmailId);
        await onhc5362.panField(validTestData.panNumber.pan);
        await onhc5362.aadhaarField(validTestData.aadhaarNumber.aadhaar);
        await onhc5362.getOtp();
        await driver.pause(20000)
        await onhc5362.verifyAadhaarField();
        await driver.pause(50000);
        await onhc5362.checkBox();
        await driver.pause(5000);
        await onhc5362.proceedWithAadhaar();
        await driver.pause(5000);
        await onhc5362.preferredBranch();
        await driver.pause(5000);
        await onhc5362.secondOption();
        await onhc5362.incomeField(validTestData.grossIncome.income);
        await onhc5362.companyField(validTestData.companyName2);
        await driver.pause(5000);
        await onhc5362.selectPersistent();
        await onhc5362.motherNameField(validTestData.mothersNameField);
        await onhc5362.tenKproduct();
        await onhc5362.ProceedToOpenAccnt();
        await driver.pause(50000);
        await onhc5362.fundingButton();
        await driver.pause(6000);
        await onhc5362.cancelButton();
        await driver.pause(5000);
        await onhc5362.radio3();
        await onhc5362.cancelTransaction();
        await driver.pause(15000);

    });


    skip.it('to open Account with 25k Card', async () => {
       
        await driver.refresh();
        await driver.pause(7000);
        await onhc5362.mobileField(validTestData.mobileNumber2.mobileNo);
        await onhc5362.email();
        await driver.pause(10000);
        await onhc5362.emailField(validTestData.emailId.validEmailId);
        await onhc5362.panField(validTestData.panNumber.pan);
        await onhc5362.aadhaarField(validTestData.aadhaarNumber.aadhaar);
        await onhc5362.getOtp();
        await driver.pause(20000)
        await onhc5362.verifyAadhaarField();
        await driver.pause(50000);
        await onhc5362.checkBox();
        await driver.pause(5000);
        await onhc5362.proceedWithAadhaar();
        await driver.pause(5000);
        await onhc5362.preferredBranch();
        await driver.pause(5000);
        await onhc5362.secondOption();
        await onhc5362.incomeField(validTestData.grossIncome.income);
        await onhc5362.companyField(validTestData.companyName2);
        await driver.pause(5000);
        await onhc5362.selectPersistent();
        await onhc5362.motherNameField(validTestData.mothersNameField);
        await onhc5362.twentyFiveK();
        await onhc5362.ProceedToOpenAccnt();
        await driver.pause(50000);
        await onhc5362.fundingButton();
        await driver.pause(6000);
        await onhc5362.cancelButton();
        await driver.pause(5000);
        await onhc5362.radio3();
        await onhc5362.cancelTransaction();
        await driver.pause(15000);
       

        
        
    

    });

   
    });
