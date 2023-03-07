class Preferredpage {

    constructor() {

        this.mobileNumber = "#mobileNumber";
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.emailId = '//*[@id="emailId"]';
        this.popUp = '//div[@title="Welcome back!"]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';
        this.occupationPlaceHolder='//input[@id="selectOccupation"]';
        this.sourceIncomePlaceHolder = '//input[@id="selectSourceOfIncome"]';
        this.grossIncome = '//input[@id="grossAnualIncome"]';
        this.motherName = '//*[@id="motherFullName"]';
        this.debit = '//*[@id="debitCardNumber"]';
        this.companyName = '//*[@id="select_company"]';
        this.cvv = '//*[@id="CVVNumberDebitCard"]';

    }


 

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });

    }


    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async setValueToEmail(value) {
        return await $(this.emailId).setValue(value);
    }
    async isPopUpDisplayed() {
        return await $(this.popUp).isDisplayed();
    }
    async setValueToPan(value) {
        return await $(this.panNumber).setValue(value);
    }
    async setValueToAadhaar(value) {
        return await $(this.aadharNumber).setValue(value);
    }
    async getSalariedText() {
        return await $(this.occupationPlaceHolder).getValue();
    }
    async getSalaryText(){
        return await $(this.sourceIncomePlaceHolder).getValue();
    }
    async setValueToGrossIncome(value) {
        return await $(this.grossIncome).setValue(value);
    }
    async getGrossIncome(){
        return await $(this.grossIncome).getValue();
    }
    async setValueToMothersName(value){
        return await $(this.motherName).setValue(value);
    }
    async mothersName(){
        return await $(this.mothersNameText).getValue();
    }
    async setValueToDebitCard() {
        await $(this.debit).setValue();
    }
    async setValueToCompanyName(value){
        return await $(this.companyName).setValue(value);
    }
    async setValueToCvv(){
        return await $(this.cvv).setValue();
    }

   

   

}

module.exports = new Preferredpage();