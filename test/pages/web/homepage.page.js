class Homepage {
    constructor() {
        this.idfcLogo = '//*[@class="sc-ciKPGv kxCwlZ"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.termsAndCondHintText = "//p[text()='*T&C apply']";
        this.plusNintyOneText = "//p[text()='+91']";
        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.email = "#emailId"
        this.errorTextForEmailId = "//label[text() = 'Please enter a valid email address']"
        this.emailIdHintText = "//label[text()='Email address']";
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

    // anand_changes

    async setValueToEmailId(value){
        return await $(this.email).setValue(value);
    }

    async isEmailIdFeildDisplayed(){
        return await $(this.email).isDisplayed();
    }

    async isErrorTextForEmailIdDisplayed(){
        return await $(this.errorTextForEmailId).isDisplayed();
    }

    async isEmailIdHintTextDisplayed(){
        return await $(this.emailIdHintText).isDisplayed();
    }

    async getEmailId() {
        return await $(this.email).getAttribute('value');
    }

    async clearEmail() {
        const email =  await $(this.email).getAttribute('value');

        for (var index = 1; index <= email.length; index++) {
            await driver.keys(['Backspace']);
        }
    }

}
module.exports = new Homepage();
