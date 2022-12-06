const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validtestData = require("../../../test-data/web/valid_test_data.json");
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

    it.skip("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
        await expect(await homepage.getMobileNumberHintText()).to.be.eql(labelConstants.mobileNumHintText);
    });

    it("Validate whether mobile number field accepts only numbers", async () => {
        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingAlphabets))).to.be.eql("");

        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingSplChars))).to.be.eql("");
    });
    it("Validate adhar text box should allow 12 digit number", async () => {
        await homepage.setvaluetoAdharNumber(validtestData.mobileNumber.adharnumber);
        await homepage.clickAdharMaskedIcon();
        await driver.pause(2000);
        var str = await homepage.getvalueAdharNumber();
        const noSpecialCharacters = str.replace(/ /g, '');
        await expect(noSpecialCharacters).to.be.eql(validtestData.mobileNumber.adharnumber);
        await expect(noSpecialCharacters.length).to.be.eql(validtestData.mobileNumber.adharnumber.length);
    });

    it("verify the placeholder for the Aadhaar section", async () => {
        console.log("#####", homepage.getplaceholderAdhaartext());
        await expect(await homepage.getplaceholderAdhaartext()).to.be.eql(labelConstants.placeholdertextAdhar);
    });

    it("verify the hint text message for the Aadhaar section", async () => {
        await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.adharnumber);
        await expect(await homepage.getAdharhinttext()).to.be.eql(labelConstants.adharhintAdhaar);
        await driver.pause(7000);
        console.log("###", homepage.getAdharhinttext());
    });
    it("Verify get OTP Adhar button is disabled when user entered less than 12 digits", async () => {
        await homepage.setValueToMobileNum(validtestData.mobileNumber.toTestPlus91)
        try {
            await homepage.EnterEmailAddress(validtestData.mobileNumber.EmailId)
        } catch (error) {
            await homepage.clickCancelOnEmailPopup();
        }
        await homepage.EnterPanAddress(validtestData.mobileNumber.PANID)
        await homepage.setvaluetoAdharNumber(validtestData.mobileNumber.adharnumberlessthan12digits)
        var isenabledotpbutton = await homepage.getOTPAdharbutton()
        console.log("$$$$", isenabledotpbutton)
        await expect(await homepage.getOTPAdharbutton()).to.be.eql(false)
    });
    it("Verify adhar field should not accept decimal values", async () => {
        await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.decimaladhar)
        await homepage.clickAdharMaskedIcon()
        var str = await homepage.getvalueAdharNumber();
        const noSpecialCharacters = str.replace(/ /g, '');
        await expect(noSpecialCharacters).to.be.not.eql(invalidTestData.mobileNumber.decimaladhar)

    });
    it("Verify adhar field should not accept space button", async () => {
        await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.adharwithspace)
        await homepage.clickAdharMaskedIcon()
        var str = await homepage.getvalueAdharNumber();
        const noSpecialCharacters = str.replace(/ /g, '');
        await expect(noSpecialCharacters).to.be.not.eql(invalidTestData.mobileNumber.adharwithspace)
    });

    it("Verify Get otp to verify adhar button is diabled by entering invalid adhar ID", async () => {
        await homepage.setValueToMobileNum(validtestData.mobileNumber.toTestPlus91)
        try {
            await homepage.EnterEmailAddress(validtestData.mobileNumber.EmailId)
        } catch (error) {
            await homepage.clickCancelOnEmailPopup();
        }
        await homepage.EnterPanAddress(validtestData.mobileNumber.PANID)
        await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.invalidAdhar)
        var isenabledotpbutton = await homepage.getOTPAdharbutton()
        await expect(await homepage.getOTPAdharbutton()).to.be.eql(false)
    });

    it("Verify adhar number is decrypted by clicking on eye tool tip", async () => {
        await homepage.setvaluetoAdharNumber(validtestData.mobileNumber.adharnumber);
        await homepage.clickAdharMaskedIcon();
        await driver.pause(2000);
        var str = await homepage.getvalueAdharNumber();
        it.skip("Verify Error message by entering less than 12 digit adhar ID", async () => {
            await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.invalidAdhar)
            await expect(await homepage.errorHintTextAdhar()).to.be.eql(labelConstants.adharErrorhinttext)
        });
        const noSpecialCharacters = str.replace(/ /g, '');
        await expect(noSpecialCharacters).to.be.eql(validtestData.mobileNumber.adharnumber);
        await expect(noSpecialCharacters.length).to.be.eql(validtestData.mobileNumber.adharnumber.length);
    });
    it("Validat OTP by entering valid mobile number registered with adhar number", async () => {
        await homepage.setValueToMobileNum(validtestData.mobileNumber.toTestPlus91)
        try {
            await homepage.EnterEmailAddress(validtestData.mobileNumber.EmailId)
        } catch (error) {
            await homepage.clickCancelOnEmailPopup();
        }
        await homepage.EnterPanAddress(validtestData.mobileNumber.PANID)
        await homepage.clickAdharMaskedIcon();
        await homepage.setvaluetoAdharNumber(validtestData.mobileNumber.adharnumber)
        await homepage.clickOnOTPAdharvalidatebutton();
        await driver.pause(25000)
        await homepage.clickonverifyAdharbuttonEnabled();
    });
    it("Verify Error message by entering less than 12 digit adhar ID", async () => {
        await homepage.setValueToMobileNum(validtestData.mobileNumber.toTestPlus91)
        try {
            await homepage.EnterEmailAddress(validtestData.mobileNumber.EmailId)
        } catch (error) {
            await homepage.clickCancelOnEmailPopup();
        }
        await homepage.EnterPanAddress(validtestData.mobileNumber.PANID)
        await homepage.clickAdharMaskedIcon()
        await homepage.setvaluetoAdharNumber(invalidTestData.mobileNumber.invalidAdhar)

    });
});