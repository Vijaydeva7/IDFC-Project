class Preaccresumeflow {

    constructor() {

      this.mobileNumber='//*[@name="mobileNumber"]';
      this.basicDetailHeading = '//*[text()="Welcome Back!"]';
      this.nextButton = '//*[@form="formName"]';
      this.continueButton = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 enCQKI"]';
      this.startJourneyButton = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 pSorV"]';
      this.aadhaar = '//*[@id="aadhaar"]';
      this.aadhaarErrorMsg = '//*[@for="resume_app_number_input_aadhar"]';
      this.logoOtp = '//*[@src="/safe_red~e3c504.png"]';
      this.messageOtp = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-eCbnBi aTLuo"]';
      this.boxesOtp = '//*[@class="sc-ciSmjq PWMmY react-code-input"]';
      this.otpSubText = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-kBqltT kXTuqB"]';
      this.resend = '//*[@id="resendBtn"]';
      this.timer = '//*[@id="app"]/section/div[2]/div/div[1]/div/form/div/div[2]/div[2]/div/p/text()[2]';
      this.specialCharErr = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-clGIgy dQQBcT"]';
      this.otpField = '//*[@class="sc-ciSmjq PWMmY react-code-input"]';
      this.lastDigit = '/html/body/div[1]/section/div[2]/div/div[1]/div/form/div/div[2]/div[1]/div/div/input[6]';
      this.validateOtpBtn = '//*[@data-testid="verify_otp"]';
      this.landPage = '//*[@src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/creative-website/BannerLHS.png"]';
      this.incorrectOtp = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-clGIgy dQQBcT"]';


    }

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
   

}

async nextBtn() {
    return await $(this.nextButton).isClickable() ==false;
}
async mobileField(value){
    return await $(this.mobileNumber).setValue(value);
}
async mobile(){
    return await $(this.mobileNumber).isClickable() ==false;
}
async nextBtnEnable(){
    return await $(this.nextButton).isClickable() == true;
}
async nextBtnClick(){
    return await $(this.nextButton).click();
}
async continueBtn(){
    return await $(this.continueButton).isDisplayed();
}
async continueBtnClick(){
    return await $(this.continueButton).click();
}
async startJourneyBtn(){
    return await $(this.startJourneyButton).isDisplayed();
}
async aadhaarFieldAvailable(){
    return await $(this.aadhaar).isDisplayed();
}
async adharField(value){
    return await $(this.aadhaar).setValue(value);
}
async errorMsg(){
    return await $(this.aadhaarErrorMsg).getText();
}
async adhaarClick(){
    return await $(this.aadhaar).click();
}
async otpLogo(){
    return await $(this.logoOtp).isDisplayed() == true;
}
async otpMessage(){
    return await $(this.messageOtp).isDisplayed() == true;
}
async otpBoxes(){
    return await $(this.boxesOtp).isDisplayed() == true;
}
async subTextOtp(){
    return await $(this.otpSubText).getText();
}
async resendOtpLink(){
    return await $(this.resend).isDisplayed() == true;
}
async cursorPresented(){
    return await $(this.resend).moveTo();
}
async timerStarts(){
    return await $(this.timer).getValue();
}
async specialCharErrorMsg(){
    return await $(this.specialCharErr).getText();
}
async specialCharOtp(value){
    return await $(this.otpField).setValue(value);
}
async otp(){
    return await $(this.lastDigit).click();
}
async validateOtpButton(){
    return await $(this.validateOtpBtn).isClickable() == false;
}
async validateOtpButton2(){
    return await $(this.validateOtpBtn).isClickable() == true;
}
async validateOtpButton3(){
    return await $(this.validateOtpBtn).click();
}
async landingPage(){
    return await $(this.landPage).isDisplayed();
}
async otpErrorMessage(){
    return await $(this.incorrectOtp).getText();
}

}

module.exports = new Preaccresumeflow();