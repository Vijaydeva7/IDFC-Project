class Errorpage {
    constructor() {

        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.idfcLogo = '//*[@src="/LogoFull~640834.svg"]';
        this.emailId = '(//*[@data-testid="TextInput"])[1]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';
        this.getOtp = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.verifyOtp = '//*[@id="verifyAadharBtn"]';
        this.errorTitle = '//*[@data-testid="ERROR_TITLE"]';
        this.errorMsg = '//*[@data-testid="ERROR_MESSAGE"]';
        this.apologiesText1 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 feGsJT sc-gsWdvU cGnDyB"]';
        this.apologiesText2 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 hpBxkL sc-gsWdvU cGnDyB"]';
        this.okayButton = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 cvRfAR"]';
        this.nearestBranch = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 eJSvHo"]';
        this.logo = '//img[@class="sc-hmbsMR ejsngC"]';
        this.notLinked = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 eoUXjy"]';
        this.notLinked2 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 jVbKrH sc-gsWdvU cGnDyB"]';
        this.nameMisMatch = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 eoUXjy"]';
        this.nameMisMatch2 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 jVbKrH sc-gsWdvU cGnDyB"]';
        this.intRates = '//*[text()="Interest Rates"]';
        this.faqLink = '//*[text()="FAQ"]';
        this.privacyPolicyLink = '//*[text()="Privacy Policy"]';
        this.desclaimerLink = '//*[text()="Disclaimer"]';
        this.bankingOmbudsmanLink = '//*[text()="Banking Ombudsman"]';
        this.termsAndConditionLink = '//*[text()="Terms & Conditions"]';
        this.regulatoryLink = '//*[text()="Regulatory"]';
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
    async setValueToPincode(value){
        return await $(this.pincode).setValue(value)
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
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
    async mobileNumberField(){
        return await $(this.mobileNumber).click();
    }
    async emailIdField(){
        return await $(this.emailId).click();
    }
    async panNumberField(){
        return await $(this.panNumber).click();
    }
    async aadhaarField(){
        return await $(this.aadharNumber).click();
    }
    async getOtpBtn(){
        return await $(this.getOtp).click();
    }
    async verifyOtpBtn(){
        return await $(this.verifyOtp).click();
    }
    async errorTitleText(){
        return await $(this.errorTitle).getText();
    }
    async errorMessageText(){
        return await $(this.errorMsg).getText();
    }
    async apologiesErrorText(){
        return await $(this.apologiesText1).getText();
    }
    async apologiesErrorText2(){
        return await $(this.apologiesText2).getText();
    }
    async okayBtn(){
        return await $(this.okayButton).isDisplayed();
    }
    async nearestBtn(){
        return await $(this.nearestBranch).isDisplayed();
    }
    async logoIsDisplayed(){
        return await $(this.logo).isDisplayed();
    }
    async notLinkedText(){
        return await $(this.notLinked).getText();
    }
    async notLinkedText2(){
        return await $(this.notLinked2).getText();
    }
    async nameMisMatchError(){
        return await $(this.nameMisMatch).getText();
    }
    async nameMisMatchError2(){
        return await $(this.nameMisMatch2).getText();
    }
    async interestRates(){
        return await $(this.intRates).click();
    }
    async faq(){
        return await $(this.faqLink).click();
    }
    async privacyPolicy(){
        return await $(this.privacyPolicyLink).click();
    }
    async desclaimer(){
        return await $(this.desclaimerLink).click();
    }
    async bankingOmbudsman(){
        return await $(this.bankingOmbudsmanLink).click();
    }
    async termsAndCondition(){
        return await $(this.termsAndConditionLink).click();
    }

    async regulatory(){
        return await $(this.regulatoryLink).getText();
    }

   
}
module.exports = new Errorpage();       