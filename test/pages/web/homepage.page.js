class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-ciKPGv kxCwlZ"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.termsAndCondHintText = "//p[text()='*T&C apply']";
        this.plusNintyOneText = "//p[text()='+91']";
        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.adharNumber='#aadhaar';
        this.adharMaskIcon='//*[@id="formName"]/div[2]/div[2]/div/div/div/div/div';
        this.placeholderforAdhartext="//label[@for='aadhaar']";
        this.hinttextAdhar="//label[contains(text(),'12-digit Aadhaar number or 16-digit Virtual ID')]";
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
    async setvaluetoAdharNumber(value){
        return await $(this.adharNumber).setValue(value);
    }
    async getvalueAdharNumber(){
        return await $(this.adharNumber).getValue();
    }
    async clickAdharMaskedIcon(){
        return await $(this.adharMaskIcon).click();
    }
    async getplaceholderAdhaartext(){
        return await $(this.placeholderforAdhartext).getText();
    }
    async getAdharhinttext(){
        return await $(this.hinttextAdhar).getText();
    }

}
module.exports = new Homepage();
