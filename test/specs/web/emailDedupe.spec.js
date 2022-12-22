const emailDedupe = require("../../pages/web/emailDepupe.page");
const { expect } = require("chai");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");

describe("Homepage Validation : ", () => {
    it("Validate whether idfc logo is present on screen", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        //await driver.pause(10000);
        await emailDedupe.waitUntilHomepageLoad();
        await expect(await emailDedupe.isIdfcLogoDisplayed()).to.be.eql(true);
    });

    it("Verify whether the hint text for the email id field displayed",async() => {
        await expect(await emailDedupe.isEmailIdHintTextDisplayed()).to.be.eql(true);
    })

    it("Validate whether field accept valid email address and email icon should display while entering the email",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.validEmailId)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Validate whether the field with Email contains dot in the address field is accepted",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.validEmailIdWithDot)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Validate whether Email which contains dot with subdomain is accepted",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.validEmailIdWithDotInDomain)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with '+' sign is considered valid character",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithAddOperator)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with Quotes around email is considered valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithQuotes)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether email id field with Digits in the address field is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithDigitsInAddress)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with Underscore in the address field is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithUnderscoreInAddress)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with Dash is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithDashInAddress)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with missing @ sign and domain is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithMissingAtAndDomain)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id text box with Garbage is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithGarbage)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with two @ sign is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWith2AtSigns)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with multiple dots is valid",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithMultipleDots)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id text box with missing top level domain",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithMissingDomain)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field with .web is not a valid top level domain",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithDotWebAsDomain)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(false);
        await emailDedupe.clearEmail();
    })

    it("Verify whether the email id field not accepts more than 40 characters",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithMoreThan40Characters)

        // let email = await emailDedupe.getEmailId();
        // await expect(email.length).not.be.eql(40);
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })
    
    it("Verify whether the email id field with Missing username",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithMissingUsername)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })
    
    it("Verify whether the email id text box with Leading dot in address is not allowed",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithLeadingDots)
        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })
    
    it("Verify whether the email id text box with Trailing dot in address is not allowed",async() => {
        await emailDedupe.setValueToEmailId(validTestData.emailId.EmailIdWithTrailingDots)

        await expect(await emailDedupe.isErrorTextForEmailIdDisplayed()).to.be.eql(true);
        await emailDedupe.clearEmail();
    })
});