class onhc5362{
    constructor(){
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.headingSelectProduct = '//*[text()="Select your "]';
        this.classicProductView = '//label[@class="sc-kkmGDX eQEuwO"]';
        this.platinumProductView = '//label[@class="sc-kkmGDX bwGMML"]';
        this.collapseView = '//*[@class="sc-gLMhmw crOGeR"][8]';
        this.cardClassic = '//*[@for="Classic"][@class="sc-gswDWH kKOHXk"]';
        this.cardPlatinum = '//*[@for="Platinum"][@class="sc-gswDWH doOmed"]';
        this.tenK10kText = '//p[text()="₹10,000 "]';
        this.tenK10Kpara = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[2]/div/div[2]/label/div[1]/div/p[2]';
        this.tenK10kpara2 = '//*[text()="VISA Classic Debit card"]';
        this.cross = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[2]/div/div[2]/label/div[2]/div[3]/div';
        this.fiveLakhs = '//*[text()="₹5 Lakhs"]';
        this.radioClassic = '//*[@for="Classic"][@data-component="RadioButton"]';
        this.popular = '//*[@class="sc-cApVeq dUKeqA"][1]';
        this.twentyFiveThousand = '//*[text()="₹25,000 "]';
        this.twentyPara = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[2]/div/div[3]/label/div[1]/div/p[2]';
        this.twentyPara2 = '//*[text()="VISA Platinum Debit card"]';
        this.thirtyFiveLakh = '//*[text()="₹35 Lakhs "]';
        this.radioPlatinum = '//*[@for="Platinum"][@data-component="RadioButton"]';
        this.radio25K = '//*[@id="Platinum"]';
        this.selectedColor = '//*[@style="color: rgb(255, 255, 255); font-size: 20px; font-weight: 700;"]';
        this.unselectedColor = '//*[@style="color: rgb(75, 77, 77); font-size: 20px; font-weight: 700;"]';
        this.downIcon = '//*[@aria-label="ChevronDown"][@style="fill: rgb(155, 30, 38);"]';
        this.benefitsLink = '//*[text()="Discover all benefits"]';
        this.upIcon = '//*[@data-testid="IconChevronUp"]';
        this.termsCondition = '//*[@class="CallToAction-sc-11yre54-0 sc-eSoWNj jsGnhC hOSjr"]';
        this.tenKExpand = '//*[@class="sc-ihRIEg OMwqx"][1]';
        this.twentyFiveK = '//*[@class="sc-ihRIEg OMwqx"][2]';
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


    }
    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }
    async selectProductHeading(){
        return await $(this.headingSelectProduct).getText();
    }

    async toCheckProductView(){
        return await $(this.classicProductView).isDisplayed() == true;
    }
    async toCheckProductView2(){
        return await $(this.platinumProductView).isDisplayed() == true;
    }
    async toCheckCollapseView(){
        return await $(this.collapseView).isDisplayed() == false;
    }
    async classicCard(){
        return await $(this.cardClassic).isDisplayed() == true;
    }
    async platinumCard(){
        return await $(this.cardPlatinum).isDisplayed() == true;
    }
    async tenKproduct10000Text(){
        return await $(this.tenK10kText).getText();
    }
    async tenKproductPara(){
        return await $(this.tenK10Kpara).getText();
    }
    async tenKproductPara2(){
        return await $(this.tenK10kpara2).getText();
    }
    async crossMark(){
        return await $(this.cross).isDisplayed() == true;
    }
    async fiveLakhsText(){
        return await $(this.fiveLakhs).getText();
    }
    async classicRadio(){
        return await $(this.radioClassic).isDisplayed() == true;
    }

    async popularHeadingText(){
        return await $(this.popular).getText();
    }
    async twentyFiveKtext(){
        return await $(this.twentyFiveThousand).getText();
    }
    async twentyFivePara(){
        return await $(this.twentyPara).getText();
    }
    async twentyFivePara2(){
        return await $(this.twentyPara2).getText();
    }
    async thirtyFiveLakhs(){
        return await $(this.thirtyFiveLakh).getText();
    }
    async platinumRadio(){
        return await $(this.radioPlatinum).isDisplayed() == true;
    }
    async radio25kSelectedBydefault(){
        return await $(this.radio25K).isSelected() == true;
    }
    async selectedCardColor(){
        return await $(this.selectedColor).getAttribute('style')
    }
    async unselectedCard(){
        return await $(this.unselectedColor).getAttribute('style')
    }
    async iconDownDisplayed(){
        return await $(this.downIcon).isDisplayed() == true;
    }
    async clickAllBenefits(){
        return await $(this.benefitsLink).click();
    }
    async iconUpDisplayed(){
        return await $(this.upIcon).isDisplayed() == true;
    }
    async termsAndCondition(){
        return await $(this.termsCondition).click();
    }
    async tenKexpandView(){
        return await $(this.tenKExpand).isDisplayed() == true;
    }
    async twentyFiveKexpandView(){
        return await $(this.twentyFiveK).isDisplayed() == true;
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
    



}
module.exports = new onhc5362()