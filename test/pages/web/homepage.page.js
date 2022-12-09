class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-ciKPGv kxCwlZ"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.termsAndCondHintText = "//p[text()='*T&C apply']";
        this.plusNintyOneText = "//p[text()='+91']";
        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.mobileBlankSpace = "//*[text()='Please enter a valid 10-digit mobile number']";
        this.mobileSplCharAlpha2 = '//*[@id="mobileNumber"]';
        this.mobileSplCharAndAlpha ="//*[text()='Please enter Mobile No']";
        this.tenDigMobileNum = "//*[text()='Mobile number registered with Aadhaar']";
        this.tenDigMobileNum2 = '//*[@id="mobileNumber"]';
        this.tenZeros = "//*[text()='Please enter a valid 10-digit mobile number']";
        this.withoutAnyValue = "//*[text()='Mobile number registered with Aadhaar']";
        this.tenBlankSpaces = '//*[text()="Please enter Mobile No"]';
        this.popUp = '//*[text()= "Welcome back!"]';
        this.aadhaarField = '//*[@id="aadhaar"]'; 
        this.otpError = '//*[text()="Please enter correct OTP"]';
        this.emailId = '//*[@id="emailId"]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';    
        this.byProceedText = '//*[text()="By proceeding I allow IDFC FIRST Bank to use my Aadhaar to fetch KYC details from UIDAI, fetch CIBIL report from "]'; 
        this.dontHaveAadhar = '//*[@id="formName"]/div[3]/div/div[1]/p[2]';
        this.timer = '//*[text()="Time Left"]';
        this.panAadharDontMatch = '//*[text()="The name on your PAN and Aadhaar do not match"]';
        

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
        return await $(this.mobileSplCharAlpha2).getText();
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
}

module.exports = new Homepage();
