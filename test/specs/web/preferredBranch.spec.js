const preferredpage = require("../../pages/web/preferredBranch.page")

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { termsConditions } = require("../../pages/web/homepage.page");
const { okayBtn, btn } = require("../../pages/web/preferredBranch.page");

 const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");




describe("Account Opening Preffered Branch Validation : ", () => {

    it("Validate whether valid details of user", async () => {
        await driver.pause(2000);
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        await preferredpage.waitUntilHomepageLoad();
        await driver.pause(7000);
        await preferredpage.mobileNumberField();
        await preferredpage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo12);
        await driver.pause(5000);
        await preferredpage.emailIdField();
        await driver.pause(6000)
        await preferredpage.setValueToEmail(validTestData.emailId2.email);
        await driver.pause(5000);
        // await expect(await preferredpage.popUpCancel()).to.be.eql(true);
        // const cancel = await $('//*[@id="resumeModalCloseBtn"]');
        // await cancel.click();
        await driver.pause(6000)
        await preferredpage.panNumberField();
        await preferredpage.setValueToPan(validTestData.panNumber.pan8);
        await driver.pause(3000);

    });

    it("Enter VID", async () => {

        await preferredpage.aadhaarField();
        await preferredpage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar8);
        await driver.pause(10000);

    });



    it("Click on OTP to verify Aadhaar", async () => {

        await preferredpage.getOtpBtn();
        await driver.pause(60000);

    });



    it("click on Validate OTP", async () => {

        await preferredpage.verifyOtpBtn();
        await driver.pause(50000);

    });
    



    it("Check if communication address is uncheck when OTP validated.", async () => {

        await preferredpage.checkBoxField();
        await driver.pause(3000);
        await preferredpage.popUpProceedBtn();
        await driver.pause(3000);

    });



    it("Select second preferred branch from the list of given drop down.", async () => {

        await preferredpage.preferredBranchField();
        await driver.pause(3000);
        await preferredpage.secondBranch();
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

        await preferredpage.grossIncomeField();
        await driver.pause(5000);
        await preferredpage.setValueToGrossIncome(validTestData.grossIncome.income);
        await driver.pause(3000);
        await expect(await preferredpage.getGrossIncome()).to.be.eql(validTestData.grossIncome.income);

    }); 

    it("Enter Company name ",async () => {

        await preferredpage.companyNameField();
        await driver.pause(2000);
        await preferredpage.setValueToCompanyName(validTestData.companyName);
        await driver.pause(3000);

    });



    it(" Enter mother's name", async () => {

        await preferredpage.mothersNameField();
        await driver.pause(2000);
        await preferredpage.setValueToMothersName(validTestData.mothersNameField);
        await driver.pause(5000);
    });

    it("Click on Proceed to open account.", async () => {

        await preferredpage.proceedToOpenBtn();
        await driver.pause(20000);

    });
    // it("Click on OKAY button if Error popup came after clicks on Proceed to Open account button", async () => {
        
    //     const okay = await $('//*[@data-testid="Button"]');
    //     await okay.click();
    //     await driver.pause(5000);

    // });
    


    it("If user gets L funding pop up click on proceed else validate title of account page.", async () => {

        
        if(await preferredpage.btn()){

        await preferredpage.fundingBtn();
        await driver.pause(10000);
        await preferredpage.debitCardLpopUp();
        await preferredpage.setValueToDebitCard(validTestData.debitCard);
        await preferredpage.monthLpopUp();
        await preferredpage.selectMonthLpopUp();
        await preferredpage.yearLpopUp();
        await preferredpage.selectYearLpopUp();
        await preferredpage.cvvLpopUp();
        await preferredpage.setValueToCvv(validTestData.cvv);
        await driver.pause(2000);
        await preferredpage.makePaymentLpopUp();
        await driver.pause(40000); 

        } else {

            await expect(await preferredpage.uiOfVKYCfield()).to.be.eql(true);
            await expect(await preferredpage.uiOfVKYCfield2()).to.be.eql(true);

        }
         

     });

    it("To verify the VKYC status in Web UI of account details page for newly created account", async () => {
        
        await expect(await preferredpage.uiOfVKYCfield()).to.be.eql(true);
        await expect(await preferredpage.uiOfVKYCfield2()).to.be.eql(true);

    })

    it("Account Details Download : ", async () => {

        await preferredpage.AccountDetails();
        await driver.pause(30000);
        await driver.switchWindow("https://qa-ntb.idfcfirstbank.com/apply/accountDetails");
        await driver.pause(5000);
    });

it("schedule later functionality",async () => {

    await preferredpage.scheduleLtrBtn();
    await driver.pause(5000);
    await preferredpage.calander();
    await driver.pause(3000);
    await preferredpage.date();
    await driver.pause(2000);
    await preferredpage.timerIcon();
    await driver.pause(2000);
    await preferredpage.timeSlot();
    await driver.pause(2000);
    await preferredpage.confirmBtn();
    await driver.pause(5000);
    // await preferredpage.okayBtn();
    // await driver.pause(5000);

});
    
});