class Accountpage {
    constructor() {

        this.pincode = '//*[@id="pincode"]';
        this.city = '//*[@value="RANGAREDDI"]';
        this.classicProduct = '//*[@aria-checked="false"]';
        this.address1 = '//*[@id="address1"]';
        this.proceedBtnClass = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 dPEWVA"]';
        this.fundingPopUpText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 dDgZEv"]';
        this.fundingBtn = '//*[@id="fundingProceedBtn"]';
        this.congoText = '//*[text()="Congratulations! "]';
        this.debitCard = '//*[@id="debitCardNumber"]';
        this.cvv = '//*[@id="CVVNumberDebitCard"]';
        this.earnUptoFlow = '//*[@src="/Vector~34cf55.svg"]';
        this.mothersNameText = '//*[@id="motherFullName"]';
        



    }

    async setValueToPincode(value){
        return await $(this.pincode).setValue(value)
    }
    async cityName() {
        return await $(this.city).getValue();
    }
    async sourceIncomePlaceHolderText() {
        return await $(this.sourceIncomePlaceHolder).getValue();
    }
    async grossIncomeValue() {
        return await $(this.grossIncome).getValue();
    }
    async mothersName(){
        return await $(this.mothersNameText).getValue();
    }
    async selectClassicProduct() {
        return await $(this.classicProduct).isDisplayed();
    }
    async setValueToAddress1(value){
        return await $(this.address1).setValue(value)
    }
    async proceedOpenBtn() {
        return await $(this.proceedBtnClass).isDisplayed();
    }
    async fundingPopUp() {
        return await $(this.fundingPopUpText).getText();
    }
    async fundingProceedBtn() {
        return await $(this.fundingBtn).isDisplayed();
    }
    async accountDetailsPageText() {
        return await $(this.congoText).getText();
    }
    async setValueToDebitCard(value){
        return await $(this.debitCard).setValue(value)
    }
    async setValueToCvv(value){
        return await $(this.cvv).setValue(value)
    }
    async earnUptoTextFlow() {
        return await $(this.earnUptoFlow).isDisplayed();
    }
   


}
module.exports = new Accountpage();       