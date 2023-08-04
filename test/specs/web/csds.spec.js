const csds = require("../../pages/web/csds.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
// const { on } = require("npm");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const { on } = require("npm");


describe("CSDS Sheet testcases Validation : ", () => {
    it("Validate whether idfc logo is present on screen", async () => {
       
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        // await driver.pause(10000);
        await csds.waitUntilHomepageLoad();
        await driver.pause(5000);
       
    }); 

    it("HH To Verify and check the revised interest rate of 7% p.a. in the features shown at the top right corner of the page.", async() => {

        await csds.featuresDisplayed();

    });
    it("HH To Verify and check the revised interest rate of 7% p.a.  shown at the product tile.", async() => {
        
        await csds.sevenPercentText();
        await expect(await csds.sevenPercentText()).to.be.eql(labelConstants.sevenInterest1)
    })


    it("To Verify and check the revised interest rate of 7% p.a. in step3 Account details page", async() => {

        await driver.refresh();
        await csds.mobileField(validTestData.mobileNumber2.mobileNo);
        await csds.email();
        await driver.pause(10000);
        await csds.emailField(validTestData.emailId.validEmailId);
        await csds.panField(validTestData.panNumber.pan);
        await csds.aadhaarField(validTestData.aadhaarNumber.aadhaar);
        await csds.getOtp();
        await driver.pause(20000)
        await csds.verifyAadhaarField();
        await driver.pause(50000);
        await csds.checkBox();
        await driver.pause(5000);
        await csds.proceedWithAadhaar();
        await driver.pause(5000);
        await csds.preferredBranch();
        await driver.pause(5000);
        await csds.secondOption();
        await csds.incomeField(validTestData.grossIncome.income);
        await csds.companyField(validTestData.companyName2);
        await driver.pause(5000);
        await csds.selectPersistent();
        await csds.motherNameField(validTestData.mothersNameField);
        await csds.tenKproduct();
        await csds.ProceedToOpenAccnt();
        await driver.pause(50000);
        await csds.fundingButton();
        await driver.pause(6000);
        await csds.cancelButton();
        await driver.pause(5000);
        await csds.radio3();
        await csds.cancelTransaction();
        await driver.pause(30000);

        await csds.sevenPercent();
        await expect(await csds.sevenPercent()).to.be.eql(labelConstants.sevenInterest)

        
        
        
    });


});