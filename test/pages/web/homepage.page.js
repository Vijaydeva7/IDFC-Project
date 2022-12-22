class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-cEqVOX cFXySj"]';
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


        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.mobileBlankSpace = '//label[@for="mobileNumber"]';
        this.mobileSplCharAlpha2 = '//*[@id="mobileNumber"]';
        this.mobileSplCharAndAlpha = '//label[@for="mobileNumber"]';
        this.tenDigMobileNum = '//label[@for="mobileNumber"]';
        this.tenDigMobileNum2 = '//*[@id="mobileNumber"]';
        this.tenZeros = '//label[@for="mobileNumber"]';
        this.withoutAnyValue = '//label[@for="mobileNumber"]';
        this.tenBlankSpaces = '//label[@for="mobileNumber"]';



        this.popUp = '//div[@title="Welcome back!"]';
        this.aadhaarField = '//*[@id="aadhaar"]';
        this.otpError = '//label[@for="resume_app_number_input_otp"]';
        this.emailId = '//*[@id="emailId"]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';    
        this.byProceedText = 'p#termsAndPolicies'; 
        this.dontHaveAadhar = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/p[2]';
        this.timer = '//*[text()="Time Left"]';
        this.panAadharDontMatch = '//*[text()="The name on your PAN and Aadhaar do not match"]';
        this.checkBox = '//*[@id="checkbox_comm_address"]';
        this.checkBoxPopUp = '//body/div[7]/div[1]/div[1]/div[1]';
        this.checkBoxPopUpText = '';
        this.exploreOptions = '//div[@title="Explore other options"]';
        this.uidPortal = '//*[@class="header__logo-container--left"]';
        this.idfcDontHaveAadharPage = '//*[@class="sc-kJvQNW gnGaWa"]';
        this.dontHaveAadharPageText = '//label[@for = "number_input_full_name"]';
        this.dontHaveAadharPageText2 = '//label[@for = "number_input_email"]';
        this.reviewAddressCom = '//*[@class="sc-kXqQRF byxioW"]';
        this.reviewAddressComText = '//strong[contains(text(),"My communication address is same as my Aadhaar address.")]';
        this.professionalDetailsText = '//p[contains(text(),"Please enter your ")]';
        this.occupationText = '//label[contains(text(),"Occupation")]';
        this.sourceOfIncome = '//label[contains(text(),"Source of income")]';
        this.grossIncomeText = '//label[@for="number_input_annual_income"]';
        this.rupeeIcon = '//*[@class="Inputstyle__InpuIconWrapper-sc-q7jno0-9 hZYNPa"]';
        this.rupeeLogo = '';
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


    async getPlzEnterText() {
        return await $(this.mobileSplCharAndAlpha).getText();

    }
    async getRegAadharText() {
        return await $(this.mobileSplCharAndAlpha).getText();

    }
    async getMobileNumber() {
        return await $(this.mobileNumber).getText();
    }
    async setValueToMobileBlankNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async getMobileBlankSpace() {
        return await $(this.mobileBlankSpace).getText();
    }
    async setValueToMobileSplCharAndAlpha(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isPlzEnterMobileTxtDispalyed() {
        return await $(this.mobileSplCharAndAlpha).isDisplayed();
    }
    async getMobileSplCharAndAlpha() {
        return await $(this.mobileSplCharAndAlpha).getText();
    }

    async setValueToOnly10DigMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isRegAadharMobileNumTxtDispalyed() {
        return await $(this.tenDigMobileNum).isDisplayed();
    }
    async getOnly10DigMobileNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isTenZerosMobileNumTxtDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getTenZerosMobileNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }

    async isRegMobileNumWithAadharTxtDispalyed() {
        return await $(this.withoutAnyValue).isDisplayed();
    }
    async getWithoutAnyValue() {
        return await $(this.tenDigMobileNum2).getValue();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isLessThanTenNumDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getLessThanTenNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }



    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isZeroAsIntialDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getZeroAsIntial() {
        return await $(this.tenDigMobileNum2).getValue();
    }

   
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async istenPlzEnterMobNumDispalyed() {
        return await $(this.tenBlankSpaces).isDisplayed();
    }
    async getTenBlankSpaces() {
        return await $(this.tenDigMobileNum2).getValue();
    }


    async isPopUpDisplayed() {
        return await $(this.popUp).isDisplayed();
    }
    async isAadhaarFieldDisplayed() {
        return await $(this.aadhaarField).isDisplayed();
    }
    async setValueToAadhaarNum(value) {
        return await $(this.aadhaarField).setValue(value);
    }
    async isOtpErrorMsgDisplayed() {
        return await $(this.otpError).isDisplayed();
    }
    async isExploreOtherOptionsDisplayed() {
        return await $(this.exploreOptions).isDisplayed();
    }
    async isUidPortalDisplayed() {
        return await $(this.uidPortal).isDisplayed();
    }
    async isIdfcLogoDontHaveAadharDisplayed() {
        return await $(this.idfcDontHaveAadharPage).isDisplayed();
    }

    async getProfessionalDetailsText() {
        return await $(this.professionalDetailsText).getText();
    }
    async isDontHavePageText() {
        return await $(this.dontHaveAadharPageText).getText();
    }
    async isDontHavePageText2() {
        return await $(this.dontHaveAadharPageText2).getText();
    }
    async setValueToEmail(value) {
        return await $(this.emailId).setValue(value);
    }
    async setValueToPan(value) {
        return await $(this.panNumber).setValue(value);
    }

    async setValueToAadhaar(value) {
        return await $(this.aadharNumber).setValue(value);
    }
    async isByProceedTextDisplayed() {
        return await $(this.byProceedText).isDisplayed();
    }
    async isDontHaveAadharTextDisplayed() {
        return await $(this.dontHaveAadhar).isDisplayed();
    }
    async isTimerDisplayed() {
        return await $(this.timer).isDisplayed();
    }
    async isPanAadharDoNotMatchTextDisplayed() {
        return await $(this.panAadharDontMatch).isDisplayed();
    }
    // async isReviewAddCom() {
    //     return await $(this.reviewAddressCom).isDisplayed();
    // }
    async getReviewAddComText() {
        return await $(this.reviewAddressComText).getText();
    }
   
    async isCheckBoxPopUpDisplayed() {
        return await $(this.checkBox).isDisplayed();
    }
    async getCheckBoxPopUpText() {
        return await $(this.checkBoxPopUpText).getText();
    }
    async getByproceedText() {
        return await $(this.byProceedText).getText();
    }
    async getOccupationText() {
        return await $(this.occupationText).getText();
    }
    async getSourceOfIncome() {
        return await $(this.sourceOfIncome).getText();
    }
    async getGrossIncomeText() {
        return await $(this.grossIncomeText).getText();
    }
    async isRupeeLogoDisplayed() {
        return await $(this.rupeeIcon).isDisplayed();
    }
}

module.exports = new Homepage();
