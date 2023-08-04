const { default: ChromeDriverService } = require("wdio-chromedriver-service");
const { expect } = require("chai");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const FullDemo = require("../../pages/web/selfDeclared.page");
// const { fullList } = require("npm");

describe("FullDemo Flow : ", async ()=> {
    it("Enter Mobilenumber : ", async ()=> {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        await driver.pause(15000);
        await FullDemo.enterMobilenumber(validTestData.mobileNumber2.mobileNo4);
        await driver.pause(5000);
    });

    it("Enter Email Address : ", async ()=> {
        await FullDemo.enterEmailId(validTestData.emailId2.email);
        await driver.pause(5000);
    });

    // it("Enter Adhar Number : ", async () => {
    //     await FullDemo.AdharInput(validTestData.aadhaarNumber.aadhaar);
    //     await driver.pause(2000);
    // });

    // it("CLick OTP Button : ", async () => {
    //     await FullDemo.OTPButton();
    //     await driver.pause(30000);
    // });

    // it("Click on Verify OTP Button : ", async () => {
    //     await FullDemo.VerifyOTPButton();
    //     await driver.pause(30000);
    // });

    it("Enter Pan Number : ", async () => {
        await FullDemo.enterPan(validTestData.panNumber.pan9);
        await driver.pause(2000);
    });

    it("Enter Adhar Number : ", async () => {
        await FullDemo.enterAdharNum("324831572120");
        await driver.pause(2000);
        await FullDemo.clickToGetOtp();
        await driver.pause(5000);
        await FullDemo.ClickAadhar();
        for (var index = 1; index <= 12; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await driver.pause(5000);
        await FullDemo.enterAdharNum(validTestData.aadhaarNumber.aadhaar9);
        await driver.pause(15000);
        await FullDemo.clickToGetOtp();
        await driver.pause(100000);
        await FullDemo.clickToVerifyOtp();
        await driver.pause(60000);
    });

    it("Uncheck the communication address. : ", async ()=> {
        await FullDemo.UncheckCommAddress();
        await driver.pause(5000);
    });

    it("Add pincode : ", async () => {
        await FullDemo.Pincode(validTestData.cityPincode);
        await driver.pause(2000);
        await FullDemo.Address(validTestData.address12WithSpecialCharacters);
        await driver.pause(2000);
    });

    it("Select occupation as self employed professional", async() => {
        await FullDemo.Ocupation();
        await driver.pause(10000);
        await FullDemo.sourceIncomePlaceHolderText();
        await driver.pause(5000);

    });
    it("Select source of income field ", async() => {
        
        await expect(await FullDemo.SourceOFIncome()).to.be.eql(true);


    });

    it("Enter gross annual income", async() => {
        await FullDemo.grossIncomeValue(validTestData.grossIncome.income);
        await driver.pause(2000);
    });

    it("Enter valid mother's name", async() => {
        await FullDemo.mothersName(validTestData.mothersNameField);
        await driver.pause(2000);
    });

    it("to validate the footer links", async() => {
        
        const footer1 = await $('//*[text()="Interest Rates"]');
        await footer1.click();
        await driver.pause(5000);
        //await driver.closeWindow();
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer2 = await $('//*[text()="FAQ"]');
        await footer2.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer3 = await $('//*[text()="Privacy Policy"]');
        await footer3.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer4 = await $('//*[text()="Disclaimer"]');
        await footer4.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer5 = await $('//*[text()="Banking Ombudsman"]');
        await footer5.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer6 = await $('//*[text()="Terms & Conditions"]');
        await footer6.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
        const footer7 = await $('//*[text()="Regulatory"]');
        await footer7.click();
        await driver.pause(5000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/savings");
        await driver.pause(5000);
     });

    it("Click on Proceed to open account. : ", async () => {
        await FullDemo.ProceedOpenAccountBtn();
        await driver.pause(50000);
    });
    
    it.skip("If user gets L funding pop up click on proceed else validate title of account page. : ", async () => {
        
        const btn = await $('//*[@id="fundingProceedBtn"]');
        if(btn.isDisplayed()){
        await driver.pause(10000);
        const debitCard = await $('//*[@id="debitCardNumber"]');    
        await debitCard.click();
        await FullDemo.setValueToDebitCard(validTestData.debitCard);
        const month = await $('//*[@id="expiryMonthDebitCard"]');
        await month.click();
        const selectMonth = await $('//*[@value="10"]');
        await selectMonth.click();
        const year = await $('//*[@id="expiryYearDebitCard"]');
        await year.click();
        const selectYear = await $('//*[@value="2023"]');
        await selectYear.click();
        const cvv = await $('//*[@id="CVVNumberDebitCard"]');
        await cvv.click();
        await FullDemo.setValueToCvv(validTestData.cvv);
        await driver.pause(2000);
        const makePayment = await $('/html/body/form/div[1]/div[2]/div[3]/div[4]/div[4]/div/div/div[1]/div/div[7]/a[2]');
        await makePayment.click();
        await driver.pause(40000);
    } 
    else 
    {
        await expect(await FullDemo.uiOfVKYCfield()).to.be.eql(true);
        await expect(await FullDemo.uiOfVKYCfield2()).to.be.eql(true);     
    }
    });
    // it("If user gets L funding pop up click on proceed else validate title of account page. : ", async () => {
    //     await FullDemo.Proceed();
    //     await driver.pause(5000);
    // });

    // it("Upon clicking on L funding proceed button enter valid details and click on payment : ", async ()=> {
    //     await FullDemo.CardNumber("");
    //     await driver.pause(2000);
    //     await FullDemo.Month();
    //     await expect (await FullDemo.Oct()).to.be.eql(labelConstants.communicationAddress.October);
    //     await driver.pause(2000);
    //     await FullDemo.Year();
    //     await expect (await FullDemo.TTThree()).to.be.eql(labelConstants.communicationAddress.yearNumber);
    //     await driver.pause(15000);
    //     await FullDemo.CVV("");
    //     await driver.pause(2000);
    //     await FullDemo.MakePayment();
    //     await driver.pause(15000);
    // });

    // it("OTP and Confirmation : ", async ()=> {
    //     await FullDemo.CardSubmitBtn();
    //     await driver.pause(5000);
    // })

    it("Account Opening Page show Congratulations : ", async () => {
        await expect(await FullDemo.Congratulations()).to.be.eql(labelConstants.AccountOpeningDetails.congoText);
        await driver.pause(2000);
    });

    it("Message Your savings account has been opened is displayed : ", async () => {
        await expect(await FullDemo.Message()).to.be.eql(labelConstants.AccountOpeningDetails.Message);
        await driver.pause(2000);
    });
    
    it("Customer ID is visible : ", async () => {
        await expect(await FullDemo.CustomerId()).to.be.eql(true);
        await driver.pause(2000);
    });

    it("Account Number is Displayed : ", async () => {
        await expect(await FullDemo.AccountNumber()).to.be.eql(true);
        await driver.pause(2000);
    });
    
    it("Account Details Download : ", async () => {
        await FullDemo.AccountDetails();
        await driver.pause(30000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/accountDetails");
        await driver.pause(5000);
    });

    it("Validate message Register using your Customer ID : ", async () => {
        await expect(await FullDemo.RegisterMessage()).to.be.eql(true);
        await driver.pause(3000);
    });

    it("validate Perform schedule later functionality", async() => {
        await FullDemo.scheduleLtrBtn();
        await driver.pause(5000);
        await FullDemo.calander();
        await driver.pause(3000);
        await FullDemo.date();
        await driver.pause(2000);
        await FullDemo.timerIcon();
        await driver.pause(2000);
        await FullDemo.timeSlot();
        await driver.pause(2000);
        await FullDemo.confirmBtn();
        await driver.pause(5000);
    });

    // it("validate Perform schedule later functionality", async() => {
    //     await expect(await FullDemo.SheduledTimeDate()).to.be.eql(labelConstants.AccountOpeningDetails.SheduledDateTimeMessage);
    //     await driver.pause(2000);
    // });

    it("Perform Connect now and validate the IDFY url. : ", async () => {
        await FullDemo.VKYC();
        await driver.pause(15000);
        await expect (await FullDemo.Logo()).to.be.eql(true);
        await driver.pause(2000);
        await expect (await FullDemo.HeadingMsg()).to.be.eql(labelConstants.AccountOpeningDetails.HeadingMessageText);
        await driver.pause(20000);
    });

});



