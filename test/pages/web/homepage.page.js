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


    

    
}

module.exports = new Homepage();
