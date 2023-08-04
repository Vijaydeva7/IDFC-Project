class Preferredpage {

    constructor() {

        this.mobileNumber = "#mobileNumber";
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.popUp = '//div[@title="Welcome back!"]';
        this.emailId = '(//*[@data-testid="TextInput"])[1]';
        this.panNumber = '//*[@id="panNumber"]';
        this.aadharNumber = '//*[@id="aadhaar"]';
        this.occupationPlaceHolder='//input[@id="selectOccupation"]';
        this.sourceIncomePlaceHolder = '//input[@id="selectSourceOfIncome"]';
        this.grossIncome = '//input[@id="grossAnualIncome"]';
        this.motherName = '//*[@id="motherFullName"]';
        this.companyName = '(//input[@type="text"])[8]';
        this.debit = '//*[@id="debitCardNumber"]';
        this.cvv = '//*[@id="CVVNumberDebitCard"]';
        this.cancel = '//*[@id="resumeModalCloseBtn"]';
        this.getOtp = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.verifyOtp = '//*[@id="verifyAadharBtn"]';
        this.checkBox = '//label[@for="checkbox_comm_address"]';
        this.popUpProceedButton = '//*[@id="proceedAadharAddressBtn"]';
        this.preferredBranch = '//*[@id="select_prefered_branch"]';
        this.secondBnch = '//*[@class="Liststyle__ListItem-sc-zdgkpp-3 brURid listItem-select_prefered_branch-list"]';
        this.gross = '//*[@id="grossAnualIncome"]';
        this.company = '(//input[@type="text"])[8]';
        this.proceedBtn = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 kvfmZj"]';

        this.vkycUi = '//div[@class="sc-juNKJE eKFMNo"]';
        this.vkycUi2 = '//div[@class="sc-cKhfdh hgNsdj"]';
        this.scheduleLtr = '//*[text()="Schedule for later"]';
        this.calanderIcon = '//*[@data-testid="IconCalendar3"]';
        this.timer = '//*[@data-testid="IconChevronDown"]';
        this.tslot = '//*[@class="Liststyle__ListItem-sc-zdgkpp-3 kPRwgT listItem-timeslot-list"][3]';
        this.confirmButton = '//*[@id="confirmAppointmentBtn"]';
        this.okay = '//*[text()="Okay, Got it!"]';
        this.accountdetails = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 ilTMgU"]';
        this.debidCard = '//*[@id="debitCardNumber"]';
        this.month = '//*[@id="expiryMonthDebitCard"]';
        this.selectMonth = '//*[@value="05"]';
        this.year = '//*[@id="expiryYearDebitCard"]';
        this.makePaymentL = '//*[@id="SubmitBillShip"]';
        this.cvvLband = '//*[@id="CVVNumberDebitCard"]';
        this.selectYear = '//*[@value="2029"]';
        this.lBand = '//*[@id="fundingProceedBtn"]';
        this.dateSelect = '//*[@aria-label="Choose Wednesday, May 3rd, 2023"]';
        this.checkBoxSelectedOrNot  = '//*[@id="checkbox_comm_address"]';
        this.pincode = '#pincode';
        this.address = '//*[@id="address1"]';
        this.uncheckcommaddress = '//div[@class = "Checkboxstyle__Box-sc-ins62l-1 blcGGD"]';


    }


 

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });

    }
    async AccountDetails() {

      return await $(this.accountdetails).click();
    }


    async debitCardLpopUp(){
        return await $(this.debidCard).click();
    }
    async monthLpopUp(){
        return await $(this.month).click();
    }
    async selectMonthLpopUp(){
        return await $(this.selectMonth).click();
    }
    async yearLpopUp(){
        return await $(this.year).click();
    }
    async selectYearLpopUp(){
        return await $(this.selectYear).click();
    }
    async cvvLpopUp(){
        return await $(this.cvvLband).click();
    }
    async makePaymentLpopUp(){
        return await $(this.makePaymentL).click();
    }

    async scheduleLtrBtn(){
        return await $(this.scheduleLtr).click();
    }
    async calander(){
        return await $(this.calanderIcon).click();
    }
    async timerIcon(){
        return await $(this.timer).click();
    }
    async okayBtn(){
        return await $(this.okay).click();
    }
    async timeSlot(){
        return await $(this.tslot).click();
    }
    async confirmBtn(){
        return await $(this.confirmButton).click();
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
   
    async setValueToCompanyName(value){
        return await $(this.companyName).setValue(value);
    }
    async setValueToDebitCard() {
        await $(this.debit).setValue();
    }
    async setValueToCvv(){
        return await $(this.cvv).setValue();
    }
    async popUpCancel(){
        return await $(this.cancel).click();
    }
   
    async UncheckCommAddress() {
        return await $(this.uncheckcommaddress).click();
    }

    async Pincode(value) {
        return await $(this.pincode).setValue(value);
    }
    async Address(value) {
        return await $(this.address).setValue(value);
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
async checkBoxField(){
    return await $(this.checkBox).click();
}
async popUpProceedBtn(){
    return await $(this.popUpProceedButton).click();
}
async preferredBranchField(){
    return await $(this.preferredBranch).click();
}
async secondBranch(){
    return await $(this.secondBnch).click();
}
async grossIncomeField(){
    return await $(this.gross).click();
}
async companyNameField(){
    return await $(this.company).click();
}
async mothersNameField(){
    return await $(this.motherName).click();
}
async proceedToOpenBtn(){
    return await $(this.proceedBtn).click();
}
async uiOfVKYCfield(){
    return await $(this.vkycUi).isDisplayed();
}
async uiOfVKYCfield2(){
    return await $(this.vkycUi2).isDisplayed();
}
async btn(){
    return await $(this.lBand).isDisplayed();
}
async date(){
    return await $(this.dateSelect).click();
}
async fundingBtn(){
    return await $(this.lBand).click();
}
async checkBoxSelected(){
    return await $(this.checkBoxSelectedOrNot).isSelected();
}

   

}

module.exports = new Preferredpage();