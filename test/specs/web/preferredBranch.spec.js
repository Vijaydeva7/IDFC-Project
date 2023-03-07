const preferredpage = require("../../pages/web/preferredBranch.page")

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");

// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");




describe("Account Opening Preffered Branch Validation : ", () => {

    it("Validate whether valid details of user", async () => {

        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        await preferredpage.waitUntilHomepageLoad();
        await driver.pause(7000);
        const mobileNumber = await $('#mobileNumber')
        await mobileNumber.click();
        await preferredpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        const emailIdField = await $('//*[@id="emailId"]');
        await emailIdField.click();
        await preferredpage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(3000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        await cancel.click();
        const panNumber = await $('//*[@id="panNumber"]')
        await panNumber.click();
        await preferredpage.setValueToPan(validTestData.panNumber.pan);
        await driver.pause(3000);

    });

    it("Enter VID", async () => {

        const aadhaarNum = await $('//*[@id="aadhaar"]')
        await aadhaarNum.click();
        await preferredpage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);

    });



    it("Click on OTP to verify Aadhaar", async () => {

        const getOtp = await $('//*[@id="getOtpBtn"]')
        await getOtp.click();
        await driver.pause(20000);

    });



    it("click on Validate OTP", async () => {

        const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]')
        await verifyOtpBtn.click();
        await driver.pause(50000);

    });



    it("Check if communication address is uncheck when OTP validated.", async () => {

        const checkBox = await $('//*[@id="formName"]/div[5]/div[1]/div[1]/label/div');
        await checkBox.click();
        await driver.pause(3000);
        const proceedBtn = await $('//*[@id="proceedAadharAddressBtn"]');
        await proceedBtn.click();
        await driver.pause(3000);

    });



    it("Select second preferred branch from the list of given drop down.", async () => {

        const preferred = await $('//*[@id="select_prefered_branch"]');
        await preferred.click();
        await driver.pause(3000);
        const secondBranch = await $('//*[text() = "NUZVID BRANCH"]');
        await secondBranch.click();
        await driver.pause(3000);

    });



    it(" Select occupation as salaried", async () => {

        await driver.pause(2000);
        await expect(await preferredpage.getSalariedText()).to.be.eql(labelConstants.salariedPlaceHolder);    

    });



    it(" Select source of income as salary", async () => {

        await driver.pause(2000);
        await expect(await preferredpage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder);    


    });



    it("Enter gross annual income", async () => {

        const gross = await $('//*[@id="grossAnualIncome"]');
        await gross.click();
        await driver.pause(5000);
        await preferredpage.setValueToGrossIncome(validTestData.grossIncome.income);
        await driver.pause(3000);
        await expect(await preferredpage.getGrossIncome()).to.be.eql(validTestData.grossIncome.income);

    });

    it("Enter Company name ",async () => {

        const company = await $('//*[@id="select_company"]');
        await company.click();
        await driver.pause(2000);
        await preferredpage.setValueToCompanyName(validTestData.companyName);
        await driver.pause(3000);

    });



    it(" Enter mother's name", async () => {

        const mothersName = await $('//*[@id="motherFullName"]');
        await mothersName.click();
        await driver.pause(2000);
        await preferredpage.setValueToMothersName(validTestData.mothersNameField);
        
    });

    it("Click on Proceed to open account.", async () => {

        const proceedToOpen = $('//button[@id="proceedBtn"]');
        await proceedToOpen.click();
        await driver.pause(15000);

    });

    it("If user gets L funding pop up click on proceed else validate title of account page.", async () => {

        await driver.pause(5000);
        const btn = await $('//*[@id="fundingProceedBtn"]');
        await btn.click();
        await driver.pause(10000);
       
    });



    it("Upon clicking on L funding proceed button enter valid details and click on payment ", async () => {

    
        const debitCard = await $('//*[@id="debitCardNumber"]');
        await debitCard.click();
        await preferredpage.setValueToDebitCard(validTestData.debitCard);
        const month = await $('//*[@id="expiryMonthDebitCard"]');
        await month.click();
        const selectMonth  = await $('//*[@value="03"]');
        await selectMonth.click();
        const year = await $('//*[@id="expiryYearDebitCard"]');
        await year.click();
        const selectYear = await $('//*[@value="2029"]');
        await selectYear.click();
        const cvv = await $('//*[@id="CVVNumberDebitCard"]');
        await cvv.click();
        await preferredpage.setValueToCvv(validTestData.cvv);
        await driver.pause(2000);

     });

    it("Confirm transaction.", async () => {

        const makePayment = await $('//*[@id="SubmitBillShip"]');
        await makePayment.click();
        await driver.pause(40000);  

    });

});