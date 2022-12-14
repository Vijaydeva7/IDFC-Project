class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-cEqVOX cFXySj"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.termsAndCondHintText = "//p[text()='*T&C apply']";
        this.plusNintyOneText = "//p[text()='+91']";



        this.mobileNumberHintText  ='//label[@for="mobileNumber"]';
        this.mobileBlankSpace =    '//label[@for="mobileNumber"]';
        this.mobileSplCharAlpha2   ='//*[@id="mobileNumber"]';
        this.mobileSplCharAndAlpha ='//label[@for="mobileNumber"]';
        this.tenDigMobileNum =      '//label[@for="mobileNumber"]';
        this.tenDigMobileNum2 =     '//*[@id="mobileNumber"]';
        this.tenZeros =             '//label[@for="mobileNumber"]';
        this.withoutAnyValue =      '//label[@for="mobileNumber"]';
        this.tenBlankSpaces =       '//label[@for="mobileNumber"]';



        this.popUp = '//div[@title="Welcome back!"]';
        this.aadhaarField = '//*[@id="aadhaar"]'; 
        this.otpError = '//label[@for="resume_app_number_input_otp"]';
        this.emailId = '//*[@id="emailId"]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';    
        this.byProceedText = '#termsAndPolicies'; 
        this.dontHaveAadhar = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/p[2]';
        this.timer = '//*[text()="Time Left"]';
        this.panAadharDontMatch = '//*[text()="The name on your PAN and Aadhaar do not match"]';
        this.checkBoxPopUp = '//body/div[7]/div[1]/div[1]/div[1]';
        this.checkBoxPopUpText = '//body/div[7]/div[1]/div[1]/div[1]/div[3]/p[1]';
        this.exploreOptions = '//div[@title="Explore other options"]';
        this.uidPortal = '//*[@class="header__logo-container--left"]';
        this.idfcDontHaveAadharPage = '//*[@class="sc-dEZoUN fJrQnC"]';
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
    async getMobileNumberHintText() {
        return await $(this.mobileNumberHintText).getText();
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
    // Mobile number blank space testcase
    async setValueToMobileBlankNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async getMobileBlankSpace(){
        return await $(this.mobileBlankSpace).getText();
    }
    // special char&Alpha testcase
    async setValueToMobileSplCharAndAlpha(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isPlzEnterMobileTxtDispalyed() {
        return await $(this.mobileSplCharAndAlpha).isDisplayed();
    }
    async getMobileSplCharAndAlpha(){
        return await $(this.mobileSplCharAndAlpha).getText();
    }
    
    // Only 10 digits mobile Number Testcase 
    async setValueToOnly10DigMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isRegAadharMobileNumTxtDispalyed() {
        return await $(this.tenDigMobileNum).isDisplayed();
    }
    async getOnly10DigMobileNum(){
        return await $(this.tenDigMobileNum2).getValue();
    }
// user enter 10 zeros in the mobile field testcase
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isTenZerosMobileNumTxtDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getTenZerosMobileNum(){
        return await $(this.tenDigMobileNum2).getValue();
    }
// user enter without any value testcase
    
    async isRegMobileNumWithAadharTxtDispalyed() {
        return await $(this.withoutAnyValue).isDisplayed();
    }
    async getWithoutAnyValue(){
        return await $(this.tenDigMobileNum2).getValue();
    }
//  less than ten numbers testcase
async setValueToMobileNum(value) {
    return await $(this.mobileNumber).setValue(value);
}
async isLessThanTenNumDispalyed() {
    return await $(this.tenZeros).isDisplayed();
}
async getLessThanTenNum(){
    return await $(this.tenDigMobileNum2).getValue();
}


// should not accept zero as intial testcase 

async setValueToMobileNum(value) {
    return await $(this.mobileNumber).setValue(value);
}
async isZeroAsIntialDispalyed() {
    return await $(this.tenZeros).isDisplayed();
}
async getZeroAsIntial(){
    return await $(this.tenDigMobileNum2).getValue();
}

// should not accept zero to five num as intail testcase
async setValueToMobileNum(value) {
    return await $(this.mobileNumber).setValue(value);
}
async istenPlzEnterMobNumDispalyed() {
    return await $(this.tenBlankSpaces).isDisplayed();
}
async getTenBlankSpaces(){
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
async isCheckBoxPopUpDisplayed() {
    return await $(this.checkBoxPopUp).isDisplayed();
}
async getCheckBoxPopUpText(){
    return await $(this.checkBoxPopUpText).getText();
}
}

module.exports = new Homepage();
