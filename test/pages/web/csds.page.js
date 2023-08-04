class csds {
    constructor() {
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.featuresIMG = '//*[@src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/creative-website/Banner-RHS-3.png"]';
        this.mobileValue = '//*[@id="mobileNumber"]';
        this.emailValue = '//*[@id="formName"]/div/div[2]/div/div/div/input';
        this.panValue = '//*[@id="panNumber"]';
        this.aadhaarValue = '//*[@id="aadhaar"]';
        this.getOTP = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.verifyAdhar = '//*[@id="verifyAadharBtn"]';
        this.emailC = '//*[@class="InputWrapperstyle__InputWrapperStyles-sc-yn7nxv-0 jTxkve input-box-wrapper-child"]';
        this.boxCheck = '//*[@id="app"]/div[1]/div/div/div[2]/div[1]/div[1]/div[1]/label/div';
        this.aadhaarProceed = '//*[@id="proceedAadharAddressBtn"]';
        this.preBranch = '//*[@id="select_prefered_branch"]';
        this.second = '//*[@id="select_prefered_branch-list"]/li[2]/div';
        this.income = '//*[@id="grossAnualIncome"]';
        this.company = '//*[@id="select_company"]';
        this.persistent = '//*[text() = "PERSISTENT SYSTEMS LIMITED"]';
        this.mother = '//*[@id="motherFullName"]';
        this.tenK = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[2]/div/div[2]/label/div[3]/label/span';
        this.proceedToOpen = '//*[@form="formName"]';
        this.funding = '//*[@id="fundingProceedBtn"]';
        this.cancel = '//*[@id="buttons"]/a[3]';
        this.radio = '//*[@id="reasonRadio3"]';
        this.transactionCancel = '//*[@title="Cancel Transaction"]';
        this.twentyFiveKCard = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[2]/div/div[3]/label/div[3]/label/p';
        this.seven = '//*[text()="Up to 7% p.a. interest"]';
        this.seven1 = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[1]/div/div[1]/div';
    }
    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }
    async featuresDisplayed(){
        return await $(this.featuresIMG).isDisplayed() == true;
    }
    async mobileField(value){
        return await $(this.mobileValue).setValue(value)
    }
    async emailField(value){
        return await $(this.emailValue).setValue(value)
    }
    async panField(value){
        return await $(this.panValue).setValue(value)
    }
    async aadhaarField(value){
        return await $(this.aadhaarValue).setValue(value)
    }
    async getOtp(){
        return await $(this.getOTP).click();
    }
    async verifyAadhaarField(){
        return await $(this.verifyAdhar).click();
    }
    async email(){
        return await $(this.emailC).click();
    }
    async checkBox(){
        return await $(this.boxCheck).click();
    }
    async proceedWithAadhaar(){
        return await $(this.aadhaarProceed).click();
    }
    async preferredBranch(){
        return await $(this.preBranch).click();
    }
    async secondOption(){
        return await $(this.second).click();
    }
    async incomeField(value){
        return await $(this.income).setValue(value)
    }
    async companyField(value){
        return await $(this.company).setValue(value)
    }
    async selectPersistent(){
        return await $(this.persistent).click();
    }
    async motherNameField(value){
        return await $(this.mother).setValue(value)
    }
    async tenKproduct(){
        return await $(this.tenK).click();
    }
    async ProceedToOpenAccnt(){
        return await $(this.proceedToOpen).click();
    }
    async fundingButton(){
        return await $(this.funding).click();
    }
    async cancelButton(){
        return await $(this.cancel).click();
    }
    async radio3(){
        return await $(this.radio).click();
    }
    async cancelTransaction(){
        return await $(this.transactionCancel).click();
    }
    async twentyFiveK(){
        return await $(this.twentyFiveKCard).click();
    }
    async sevenPercent(){
        return await $(this.seven).getText();
    }
    async sevenPercentText(){
        return await $(this.seven1).getText();
    }
    

}
module.exports = new csds()