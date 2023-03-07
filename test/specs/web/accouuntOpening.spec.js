const homepage = require("../../pages/web/homepage.page");
const detailspage = require("../../pages/accountDetails.page"); 
const accountpage = require("../../pages/web/accountOpening.page.js");

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

describe("Account Opening Validation : ", () => {
    it("Validate whether valid details of user", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        // await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        await driver.pause(7000);
        const mobileNumber = await $('#mobileNumber')
        await mobileNumber.click();
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        const emailIdField = await $('//*[@id="emailId"]');
        await emailIdField.click();
        await homepage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(3000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        await cancel.click();
        const panNumber = await $('//*[@id="panNumber"]')
        await panNumber.click();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        const aadhaarNum = await $('//*[@id="aadhaar"]')
        await aadhaarNum.click();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        const getOtp = await $('//*[@id="getOtpBtn"]')
        await getOtp.click();
        await driver.pause(15000);
        const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]')
        await verifyOtpBtn.click();
        await driver.pause(40000);
    });
    it("validate add correct pincode", async() => {
        
        await driver.pause(5000);
        const pincode = await $('//*[@id="pincode"]');
        await pincode.click();
        await accountpage.setValueToPincode(validTestData.pincode);
        await driver.pause(3000);
        await expect(await accountpage.cityName()).to.be.eql(labelConstants.cityName);
        await driver.pause(2000);
        const address1 = $('//*[@id="address1"]');
        await address1.click();
        await accountpage.setValueToAddress1(validTestData.adress1);

    });

    it("Select occupation as self employed professional", async() => {
        
        const occupation = await $('//*[@id="selectOccupation"]');
        await occupation.click();
        await occupation.click();
        await driver.pause(2000);
        const sep = await $('//*[text()="Self Employed Professional"]');
        await sep.click();
        await driver.pause(5000);
        await expect(await accountpage.sourceIncomePlaceHolderText()).to.be.eql(labelConstants.professionalFeesText);


    });
    it("Select source of income field ", async() => {
        
        await expect(await accountpage.sourceIncomePlaceHolderText()).to.be.eql(labelConstants.professionalFeesText);


    });


    it("Enter gross annual income", async() => {
        
        const grossIncome = await $('//*[@id="grossAnualIncome"]');
        await grossIncome.click();
        await driver.pause(2000);
        await accountpage.setValueToGrossIncome(validTestData.grossIncome.income2);
        await driver.pause(5000);
        await expect(await accountpage.grossIncomeValue()).to.be.eql(validTestData.grossIncome.income2);


    });
    it("Enter valid mother's name", async() => {
        
        const mothersName = await $('//*[@id="motherFullName"]');
        await mothersName.click();
        await driver.pause(2000);
        await accountpage.setValueToMothersName(validTestData.mothersNameField);
        await driver.pause(5000);
        await expect(await accountpage.mothersName()).to.be.eql(validTestData.mothersNameField);


    });

    it("select product as visa classic debit card.", async() => {
        
       const selectProduct =await  $('//*[@class="sc-jmWZkt cNPcET"]');
       await selectProduct.click();
       await driver.pause(2000);
    
    });
    it("Uncheck schedule of charges and show the state of proceed button.", async() => {
        
        const checkBox = await $('//*[@id="formName"]/div[15]/div/div[2]/label/div');
        await checkBox.click();
        await driver.pause(2000);
        await expect(await accountpage.isDisabledProceedToOpen()).to.be.eql(true);
 
     });
     it("to validate the footer links", async() => {
        
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
     it("validate to Click on proceed to open account.", async() => {
        
        const checkBox = await $('//*[@id="formName"]/div[15]/div/div[2]/label/div');
        await checkBox.click();
        await driver.pause(2000);
        await expect(await accountpage.proceedOpenBtn()).to.be.eql(true);
        await checkBox.click();
        await driver.pause(2000);
        const proceedToOpenBtn = await $('//*[@id="proceedBtn"]');
        await proceedToOpenBtn.click()
        await driver.pause(3000);

     });
     it.only("validate funding btn - Step 3 in Account Opening Details Page ", async() => {
        
        // const fundingBtn = await $('div[class="sc-hBlfeS bqQxiP"] button[type="button"]');
        // await fundingBtn.click();
        // await driver.pause(5000);
        await expect(await accountpage.fundingPopUp()).to.be.eql(labelConstants.AccountOpeningDetails.popUpText);
        await expect(await accountpage.fundingProceedBtn()).to.be.eql(true);
        // const closePopUp = await $('//*[@data-testid="IconCross"]');
        // await closePopUp.click();
        await driver.pause(2000);
        await expect(await accountpage.accountDetailsPageText()).to.be.eql(labelConstants.AccountOpeningDetails.congoText);
        await driver.pause(2000);
        


     });


     it.only("validate Perform schedule later functionality", async() => {
        
        await driver.refresh();
        await driver.pause(5000);
        const mobileNumber = await $('#mobileNumber')
        await mobileNumber.click();
        await accountpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo6);
        await driver.pause(5000);
        const emailIdField = await $('//*[@id="emailId"]');
        await emailIdField.click();
       // await homepage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(3000);
        await expect(await accountpage.isPopUpDisplayed()).to.be.eql(true);
        await driver.pause(60000);
        const verifyBtn = await $('//*[@id="verifyOtpBtn"]');
        await verifyBtn.click();
        await driver.pause(10000);
        const scheduleLtrBtn = await $('//*[text()="Schedule for later"]');
        await scheduleLtrBtn.click();
        await driver.pause(5000);
        const calander = await $('//*[@data-testid="IconCalendar3"]');
        await calander.click();
        await driver.pause(3000);
        const date = await $('//*[@aria-label="Choose Wednesday, February 22nd, 2023"]');
        await date.click();
        await driver.pause(2000);
        const timer = await $('//*[@data-testid="IconTime2"]');
        await timer.click();
        await driver.pause(2000);
        const timeSlot = await $('//*[@class="Liststyle__TextWrapper-sc-13ccyva-4 bytzqC"]');
        await timeSlot.click();
        await driver.pause(2000);
        const confirmBtn = await $('//*[@id="confirmAppointmentBtn"]');
        await confirmBtn.click();
        await driver.pause(5000);
        const okayBtn = await $('//*[text()="Okay, Got it!"]');
        await okayBtn.click();
        await driver.pause(5000);



        

     });
     it.only("validate funding btn - Step 3 in Account Opening Details Page ", async() => {
        
        const fundingBtn = await $('div[class="sc-hBlfeS bqQxiP"] button[type="button"]');
        await fundingBtn.click();
        await driver.pause(5000);
        await expect(await accountpage.fundingPopUp()).to.be.eql(labelConstants.AccountOpeningDetails.popUpText);
        await expect(await accountpage.fundingProceedBtn()).to.be.eql(true);
        const closePopUp = await $('//*[@data-testid="IconCross"]');
        await closePopUp.click();
        await driver.pause(2000);
        await expect(await accountpage.accountDetailsPageText()).to.be.eql(labelConstants.AccountOpeningDetails.congoText);
        await driver.pause(2000);


     });

     it.only("validate funding successfully completed - Step 3 in Account Opening Details Page ", async() => {
        
        const proceedBtn = await $('//*[@id="fundingProceedBtn"]');
        await proceedBtn.click();
        await driver.pause(7000);
        const cancel = await $('//*[@id="buttons"]/a[3]');
        await cancel.click();
        const thirdReason = await $('//*[@id="TransactionForm"]/div[2]/div/span[2]/table/tbody/tr[4]/td[1]');
        await thirdReason.click();
        const cancelPayment = await $('//*[@title="Cancel Transaction"]');
        await cancelPayment.click();
        await driver.pause(10000);
        await expect(await accountpage.earnUptoTextFlow()).to.be.eql(labelConstants.detailsPage.earnUptoText);


    });



 


  


});