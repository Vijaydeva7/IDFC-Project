const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");

describe("Homepage Validation", () => {
    it("Validate whether idfc logo is present on screen", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        //await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);
    });
    it("Validate whether term's and condition hint text is present on screen", async () => {
        await expect(await homepage.isTermsAndCondHintTextIsDisplayed()).to.be.eql(true);
    });

    it("Validate whether +91 appended on mobile number after entering it", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.toTestPlus91);
        await expect(await homepage.isPlusNintyOneTextDispalyed()).to.be.eql(true);
    });

    it("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
        await expect(await homepage.getMobileNumberHintText()).to.be.eql(labelConstants.mobileNumHintText);
    });

    it("Validate whether mobile number field accepts only numbers", async () => {
        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingAlphabets))).to.be.eql("");

        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingSplChars))).to.be.eql("");
    });
    it("Validate whether User  able to enter only 10 digits in the mobile number field", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lengthMoreThan10Digits);
        await driver.pause(7000);
        let mobileNum = await homepage.getMobileNumber();

        await console.log("############", mobileNum);

        // await expect(mobileNum.length).to.be.eql(10);
    });
});