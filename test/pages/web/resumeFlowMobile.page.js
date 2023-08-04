class resumeflowmobile{
    constructor(){
        this.mobileNumber='//*[@name="mobileNumber"]';
        this.basicDetailHeading = '//*[text()="Welcome Back!"]';
        this.nextButton = '//*[@form="formName"]';
        this.otpUi = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-eCbnBi aTLuo"]';
        this.logoOtp = '//*[@src="/safe_red~e3c504.png"]';
        this.validateOtpBtn = '//*[@data-testid="verify_otp"]';
        this.resend = '//*[@id="resendBtn"]';
        this.paraText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 vLkZD"]';





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
async nextBtnEnable(){
    return await $(this.nextButton).isClickable() == true;
}
async nextBtnClick(){
    return await $(this.nextButton).click();
}
async otpField(){
    return await $(this.otpUi).isDisplayed() == true;
}
async otpLogo(){
    return await $(this.logoOtp).isDisplayed() == true;
}
async validateOtpButton(){
    return await $(this.validateOtpBtn).isClickable() == false;
}
async resendOtpLink(){
    return await $(this.resend).isDisplayed() == true;
}
async cursorPresented(){
    return await $(this.resend).moveTo();
}
async paragraph(){
    return await $(this.paraText).getText();
   }
}
module.exports = new resumeflowmobile()