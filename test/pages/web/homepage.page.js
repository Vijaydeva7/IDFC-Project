class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-ciKPGv kxCwlZ"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.termsAndCondHintText = "//p[text()='*T&C apply']";
        this.plusNintyOneText = "//p[text()='+91']";
        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.email = "#emailId";
        this.errorTextForEmailId = "//label[text() = 'Please enter a valid email address']";
        this.emailIdHintText = "//label[text()='Email address']";
        this.adharNumber = '#aadhaar';
        this.adharMaskIcon = '//*[@id="formName"]/div[2]/div[2]/div/div/div/div/div';
        this.placeholderforAdhartext = "//label[@for='aadhaar']";
        this.hinttextAdhar = "//label[contains(text(),'12-digit Aadhaar number or 16-digit Virtual ID')]";
        this.cancelButtonemailpopup = "//div[contains(text(),'Cancel')]";
        this.enterEmailAddress = "//input[@id='emailId']";
        this.panId = "//input[@id='panNumber']";
        this.getOTPButton = "//button[@id='getOtpBtn']";
        this.errorAdharhinttext = "//label[contains(text(),'Please enter a valid 12-digit Aadhaar number or 16')]";
        this.otpOnMobile = "//input[@id='otp']";
        this.verifyAdharbutton = "//button[@id='verifyAadharBtn']";
    }

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }

    async isIdfcLogoDisplayed() {
        return await $(this.idfcLogo).isDisplayed();
    }
    async isTermsAndCondHintTextIsDisplayed() {
        return await $(this.termsAndCondHintText).isDisplayed();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isPlusNintyOneTextDispalyed() {
        return await $(this.plusNintyOneText).isDisplayed();
    }
    async setvaluetoAdharNumber(value) {
        return await $(this.adharNumber).setValue(value);
    }
    async getvalueAdharNumber(value) {
        return await $(this.adharNumber).getValue(value);
    }

    // anand_changes

    async setValueToEmailId(value) {
        return await $(this.email).setValue(value);
    }

    async isEmailIdFeildDisplayed() {
        return await $(this.email).isDisplayed();
    }

    async isErrorTextForEmailIdDisplayed() {
        return await $(this.errorTextForEmailId).isDisplayed();
    }

    async isEmailIdHintTextDisplayed() {
        return await $(this.emailIdHintText).isDisplayed();
    }

    async getEmailId() {
        return await $(this.email).getAttribute('value');
    }

    async clearEmail() {
        const email = await $(this.email).getAttribute('value');

        for (var index = 1; index <= email.length; index++) {
            await driver.keys(['Backspace']);
        }
    }
    async clickAdharMaskedIcon() {
        return await $(this.adharMaskIcon).click();
    }
    async getplaceholderAdhaartext() {
        return await $(this.placeholderforAdhartext).getText();
    }
    async getAdharhinttext() {
        return await $(this.hinttextAdhar).getText();
    }
    async getvalueAdharNumberText() {
        return await $(this.adharNumber).getText();
    }
    async clickCancelOnEmailPopup() {
        return await $(this.cancelButtonemailpopup).click();
    }
    async EnterEmailAddress(value) {
        return await $(this.enterEmailAddress).setValue(value);
    }
    async EnterPanAddress(value) {
        return await $(this.panId).setValue(value);
    }
    async getOTPAdharbutton() {
        return await $(this.getOTPButton).isEnabled();
    }
    async errorHintTextAdhar() {
        return await $(this.errorAdharhinttext).getText();
    }
    async clickOnOTPAdharvalidatebutton() {
        return await $(this.getOTPButton).click();
    }
    async EnterOTPreceivedonMobile() {
        return await $(this.otpOnMobile).click();
    }

    async clickonverifyAdharbuttonEnabled() {
        return await $(this.verifyAdharbutton).click();
    }

    async clickonverifyAdharbuttonEnabled() {
        return await $(this.verifyAdharbutton).sendKeys();
    }
    async clickonAdharvaluefield() {
        return await $(this.adharNumber).click();
    }


}
module.exports = new Homepage();
