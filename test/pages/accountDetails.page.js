class Detailspage {
    constructor() {
        this.step2LockLogo = '//*[@src="/Lock_Latest~2d769d.svg"]';
        this.lockBelowText = '//*[text()="You have completed"]';
        this.lockBelowText2 = '//*[text()="limited KYC"]';
        this.congratulationsText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 kTJIAj"]';
        this.customerId = '//*[text()="Customer ID:"]';
        this.accountNo = '//*[text()="Ac No:"]';
        this.complete3StepsText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 esbiwP"]';
        this.appleIcon = '//*[@href="https://www.apple.com/in/"]';
        this.idfcLogo = '//*[@id="ember3"]';
        this.idfcLink = '//*[@href="https://apps.apple.com/in/developer/idfc-bank-ltd/id1090320551"]';
        this.earnUpto = '//*[@src="/Vector~34cf55.svg"]';
        this.interestText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 elZwzV"]';














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