class Detailspage {
    constructor() {
        this.step2LockLogo = '//*[@src="/Lock~4aa08b.png"]';
        this.lockBelowText = '//*[text()="You have completed"]';
        this.lockBelowText2 = '//*[text()="limited KYC"]';
        this.congratulationsText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 kTJIAj"]';
        this.customerId = '//*[text()="Customer ID:"]';
        this.accountNo = '//*[text()="Ac No:"]';
        this.complete3StepsText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 esbiwP"]';
        this.appleIcon = '//*[@href="https://www.apple.com/in/"]';
        this.idfcLogo = '//*[@id="ember3"]';
        this.idfcLink = '//*[@href="https://apps.apple.com/in/developer/idfc-bank-ltd/id1090320551"]';
        this.earnUpto = '(//p[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 cuuGoS"])[4]';
        this.interestText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 elZwzV"]';
        this.googlePlay2 = '//a[@aria-label="Google Play logo"]';
        this.appStore = '//*[@src="/appstore~e30463.png"]';
        this.googlePlay = '//*[@data-testid="G_PlayDownloadButton"]';
        this.mobile = '#mobileNumber';
        this.email = '(//input[@type="text"])[2]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";


        this.vkycUi = '//div[@class="sc-juNKJE eKFMNo"]';
        this.vkycUi2 = '//div[@class="Stepperstyle__Root-sc-7f5ri8-4 ftAPEh sc-eEnVfJ bDHiaB"]';
        this.step1 = '(//p[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 laTetU"])[1]';
        this.step2 = '//*[text()="Start video KYC now"]';
        this.step3 = '//*[text()="Add funds to your account now"]';





    }

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobile).isDisplayed() == true;
        });
    }





    async uiOfVKYCfield(){
        return await $(this.vkycUi).isDisplayed();
    }
    async uiOfVKYCfield2(){
        return await $(this.vkycUi2).isDisplayed();
    }

    async step1Field(){
        return await $(this.step1).getText();
    }
    async step2Field(){
        return await $(this.step2).getText();
    }
    async step3Field(){
        return await $(this.step3).getText();
    }

    async setValueToMobileNum(value) {
        return await $(this.mobile).setValue(value);
    }
    async appStoreIcon() {
        return await $(this.appStore).click();
    }
    async googleplayIcon() {
        return await $(this.googlePlay).click();
    }
    async mobileNumber() {
        return await $(this.mobile).click();
    }
    async emailIdField() {
        return await $(this.email).click();
    }
    async mobileNumber() {
        return await $(this.mobile).click();
    }
    

    async accountDetailsStep2LockLogo() {
        return await $(this.step2LockLogo).isDisplayed();
    }
    async step2Text() {
        return await $(this.lockBelowText).getText();
    }
    async step2Text2() {
        return await $(this.lockBelowText2).getText();
    }
    async congoText() {
        return await $(this.congratulationsText).getText();
    }
    async customerIdText() {
        return await $(this.customerId).isDisplayed();
    }
    async accountNumberText() {
        return await $(this.accountNo).isDisplayed();
    }
    async complete3EasyStepsText() {
        return await $(this.complete3StepsText).getText();
    }
    async appleIconDisplayed() {
        return await $(this.appleIcon).isDisplayed();
    }
    async googleplayDisplayed() {
        return await $(this.googlePlay2).isDisplayed();
    }
    async idfcLogoDisplayed() {
        return await $(this.idfcLogo).isDisplayed();
    }
    async idfcLinkDisplayed() {
        return await $(this.idfcLink).isDisplayed();
    }
    async earnUptoText() {
        return await $(this.earnUpto).isDisplayed();
    }
    async moreInterestText() {
        return await $(this.interestText).getText();
    }

   
    
    
}
module.exports = new Detailspage();