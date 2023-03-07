const referrallinkpage = require("../../pages/web/referralLink.page");
const { expect, assert } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
const { default: ChromeDriverService } = require("wdio-chromedriver-service");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");



describe("Referral Link Validation : ", () => {
    it("referral details", async () => {

        await driver.url("https://www.ref-r.com/campaign_user/p?brandid=13850&campaignid=12572&widget=popup&ir_url=https://idfcfirst.ref-r.com/");
        await driver.pause(5000);
        await driver.maximizeWindow();
        await driver.pause(5000);
        const name = await $('//*[@id="l_name"]');
        await name.click();
        await referrallinkpage.setValueToName(validTestData.referralPage.name);
        const email = await $('//*[@name="email"]');
        await email.click();
        await referrallinkpage.setValueToEmail(validTestData.referralPage.email);
        const mobile = await $('//*[@id="l_mobile"]');
        await mobile.click();
        await referrallinkpage.setValueToMobile(validTestData.referralPage.mobile);
        await driver.pause(4000);
        const checkBox = await $('//*[@id="remember_me"]')
        await checkBox.click();
        const startBtn = await $('//*[@class="submit btn btn-block"]');
        await startBtn.click();
        await driver.pause(5000);

    });
    it("validate whether Terms & conditions in grey color should get display below referral statistics.", async () => {
       
        await expect(await referrallinkpage.getTncText()).to.be.eql(labelConstants.referralPage.tncText);

        
    })
    it("validate whether To check if user clicks on How it works then it is opening as pop up or not", async () => {
        
        const howItWorks = await $('//*[@class="howItWorks"]');
        await  howItWorks.click();
        await driver.pause(5000);
        await expect(await referrallinkpage.howItWorksPopUp()).to.be.eql(labelConstants.referralPage.howItsWorkPopUpText);
        await expect(await referrallinkpage.howItWorksPopUp1()).to.be.eql(true);
        await expect(await referrallinkpage.howItWorksPopUp2()).to.be.eql(true);
        await expect(await referrallinkpage.howItWorksPopUp3()).to.be.eql(true);
        await expect(await referrallinkpage.howItWorksPopUp4()).to.be.eql(true);
       
    })
    it("validate whether how it works Pop up should get close and user should land on referral statistics page.", async () => {
        
        const close = await $('//*[@id="howItWorks"]/div/div/div[1]/button');
        await close.click();
        await driver.pause(3000);
        await expect(await referrallinkpage.closePopUp()).to.be.eql(true);

        
    })
    it("validate whether Pipe symbol presented or not in between two anchor elements", async () => {
       
        await expect(await referrallinkpage.getPipeSymbol()).to.be.eql(labelConstants.referralPage.pipeSymbol);
        
      
    })
    it("validate whether To check if user clicks on Terms & conditions then it is opening as pop up or not", async () => {
        
        const tncBtn = await $('//*[@class="tnc"]');
        await tncBtn.click();
        await driver.pause(3000);
        await expect(await referrallinkpage.getTncPopUp()).to.be.eql(true);

        
    })
    it("validate whether tcn Pop up should get close and user should land on referral statistics page.", async () => {
        
        const close = await $('//*[@id="modal"]/div/div/div[1]/button');
        await close.click();
        await driver.pause(3000);
        await expect(await referrallinkpage.closePopUpTcn()).to.be.eql(true);

        
    })
    it("validate whether User clicks on referral link user should be able to see generated link on Share pop up.", async () => {
        
        const referral = await $('//*[@class="copyLink"]');
        await referral.click();
        await driver.pause(3000);
        await expect(await referrallinkpage.referralPopUp()).to.be.eql(true);

        
    })
    it("validate whether in share popUp user should get copy link button ", async () => {
        
        await expect(await referrallinkpage.copyLinkBtn()).to.be.eql(true);
 
    })
    it("validate whether in share popUp user should get copy link button ", async () => {
        
        await expect(await referrallinkpage.closeButton()).to.be.eql(true);
 
    })
    it("validate whether in share popUp user should get copy link button ", async () => {
        const copyLinkBtn = await $('//*[@id="copy-dynamic"]');
        await copyLinkBtn.click()
        await driver.pause(3000);
        await expect(await referrallinkpage.copiedText()).to.be.eql(labelConstants.referralPage.copiedText);
 
    })
    it("validate whether user clicks close button in share popUp user should get static referral page ", async () => {
        
        const closeButton = await $('//*[@id="copyLink"]/div/div/div[2]/button[2]');
        await closeButton.click()
        await driver.pause(3000);
        await expect(await referrallinkpage.closeButtonFunctionality()).to.be.eql(true);
 
    })
    it("validate whether user clicks whatsapp link user should get Home page of whatsapp and download option should be available ", async () => {
        
        const whatsapp = await $('//*[@onclick="updateWatsapp()"]');
        await whatsapp.click()
        await driver.pause(5000);
        //await expect(await referrallinkpage.whatsAppFunctionality()).to.be.eql(labelConstants.referralPage.whatsAppText);
        await expect(await referrallinkpage.whatsAppFunctionality2()).to.be.eql(true);
        const download = await $('//*[@class="_aeo8 _9vcv _9u4o _9u4i"]');
        await download.click();
        await driver.pause(5000);
 
    })
    it("validate whether user clicks whatsapp link user should get Home page of whatsapp and download option should be available ", async () => {
        
        const whatsapp = await $('//*[@onclick="updateWatsapp()"]');
        await whatsapp.click()
        await driver.pause(5000);
        //await expect(await referrallinkpage.whatsAppFunctionality()).to.be.eql(labelConstants.referralPage.whatsAppText);
        await expect(await referrallinkpage.whatsAppFunctionality2()).to.be.eql(true);
        const download = await $('//*[@class="_aeo8 _9vcv _9u4o _9u4i"]');
        await download.click();
        await driver.pause(5000);
 
    })

    //*[@id="copyLink"]/div/div/div[2]/button[2]

   
    


    
});