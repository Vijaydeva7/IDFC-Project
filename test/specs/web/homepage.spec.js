const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");

describe("Homepage Validation : ", () => {
    it("Validate whether idfc logo is present on screen", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        //await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);
    });

    it.skip("Validate whether term's and condition hint text is present on screen", async () => {
        await expect(await homepage.isTermsAndCondHintTextIsDisplayed()).to.be.eql(true);
    });

    it.skip("Validate whether +91 appended on mobile number after entering it", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.toTestPlus91);
        await expect(await homepage.isPlusNintyOneTextDispalyed()).to.be.eql(true);
    });

    it.skip("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
        await expect(await homepage.getMobileNumberHintText()).to.be.eql(labelConstants.mobileNumHintText);
    });

    it.skip("Validate whether mobile number field accepts only numbers", async () => {
        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingAlphabets))).to.be.eql("");

        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingSplChars))).to.be.eql("");
    });
    it("Validate whether User  able to enter only 10 digits in the mobile number field", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lengthMoreThan10Digits);
        await driver.pause(7000);
        // let mobileNum = await homepage.getMobileNumber();

        //  await console.log("############", mobileNum);

        await driver.clearElement('#mobileNumber');
        await driver.pause(7000);


        // await expect(mobileNum.length).to.be.eql(10);
    });

    // anand_changes

    it.skip("Validate whether Email ID feild appears next to Mobile Number feild with proper Alignment", async () => {
        await expect(await homepage.isEmailIdFeildDisplayed()).to.be.eql(true);
    });

    it.skip("Verify whether the hint text for the email id field displayed", async () => {
        await expect(await homepage.isEmailIdHintTextDisplayed()).to.be.eql(true);
    });

    it.skip("Validate whether field accept valid email address and email icon should display while entering the email", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.validEmailId);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await homepage.clearEmail();
    });

    it.skip("Validate whether the field with Email contains dot in the address field is accepted", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.validEmailIdWithDot);
        // await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        // await homepage.clearEmail();
        await driver.pause(7000);
        await console.log("#################### ", await homepage.getEmailId());
    });

    it.skip("Verify whether the email id field with '+' sign is considered valid character", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithAddOperator);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with Quotes around email is considered valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithQuotes);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether email id field with Digits in the address field is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithDigitsInAddress);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with Underscore in the address field is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithUnderscoreInAddress);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with Dash is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithDashInAddress);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with missing @ sign and domain is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithMissingAtAndDomain);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id text box with Garbage is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithGarbage);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with two @ sign is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWith2AtSigns);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with multiple dots is valid", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithMultipleDots);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id text box with missing top level domain", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithMissingDomain);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with .web is not a valid top level domain", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithDotWebAsDomain);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field not accepts more than 40 characters", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.validEmailId);

        let email = await homepage.getEmailId();
        await expect(email.length).not.be.eql(40);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id field with Missing username", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithMissingUsername);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id text box with Leading dot in address is not allowed", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithLeadingDots);
        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });

    it.skip("Verify whether the email id text box with Trailing dot in address is not allowed", async () => {
        await homepage.setValueToEmailId(validTestData.emailId.EmailIdWithTrailingDots);

        await expect(await homepage.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await homepage.clearEmail();
    });
});