class FullDemo {
    constructor() {
        this.mobilenumber = '#mobileNumber'
        this.emailId = '//*[@id="formName"]/div/div[2]/div/div/div/input'
        this.pan = '#panNumber'
        this.adharnum = "#aadhaar"
        this.getOtpBtn = '//*[@data-testid="VerifyAadhaarBtn"]'
        this.verifyOtpBtn = '//button[@id="verifyAadharBtn"]'
        this.adharinput = '/html/body/div[4]/div/div/div/div[3]/div/div[2]/div/div/div/input';
        this.otpbutton = '//*[@data-testid="sendOTPButton"]';
        this.verifyotpbutton = '//*[@data-testid="verify_otp"]';
        this.uncheckcommaddress = '//div[@class = "Checkboxstyle__Box-sc-ins62l-1 blcGGD"]';
        this.pincode = '#pincode';
        this.address = '//*[@id="address1"]';//input[@id="address1"]
        this.salaried = '//input[@id="selectOccupation"]';
        this.salary = '//input[@id="selectSourceOfIncome"]';
        this.mothersNameText='//*[@id="motherFullName"]';
        this.grossIncome = '//input[@id="grossAnualIncome"]';
        this.companyname = '//*[@id="formName"]/div/div[4]/div/div/div/div/input';
        this.selectcompanyname = '//*[@class="ListItem__ListItemWrapper-sc-10a364e-0 gaJSIW SearchResultstyle__SearchResultListItem-sc-2pcwfa-1 gfazMh"]';
        this.proceedopenaccountbtn = '/html/body/div/div[1]/div/div/div[2]/div[6]/div/button';
        this.proceed = '//button[@id="fundingProceedBtn"]';
        this.cardnumber = '//input[@id="debitCardNumber"]';
        this.cvv = '//input[@id="CVVNumberDebitCard"]';
        this.makepayment = '//a[@id="SubmitBillShip"]';
        this.congratulations = '//*[text()="Congratulations! "]';
        this.message = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 kTJIAj"]';
        this.customerid = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 ikmUdn"]';
        this.accountnum = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 dFVBqG"]';
        this.registermessage = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 eQaHNe"]';
        this.accountdetails = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 ilTMgU"]';
        this.month = '//select[@id="expiryMonthDebitCard"]';
        this.oct = '//*[text()="Oct (10)"]';
        this.year = '//[@id="expiryYearDebitCard"]';
        this.ttthree = '//*[text()="2023"]';
        this.cardsubmitbtn = '//button[@id="cmdSubmit"]';
        this.fundingPopUpText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 dDgZEv"]';
        this.fundingBtn = '//*[@id="fundingProceedBtn"]';
        this.congoText = '//*[text()="Congratulations! "]';
        this.earnUptoFlow = '//*[@src="/Vector~34cf55.svg"]';
        this.adharnum = "#aadhaar";
        this.getOtpBtn = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.ocupation = '//*[@aria-labelledby="selectOccupation-Label"]';
        this.clickaadhar = '//input[@id="aadhaar"]'
        this.SOIncome = '//*[@aria-labelledby="selectSourceOfIncome-Label"]';
        this.sourceOfIncome = '/html/body/div/div[1]/div/div/div[2]/form[2]/div/div[1]/div/div/div/div/div[1]/ul/li[4]/div/span';
        this.sheduledtimedate = '//*[text()="Video KYC (Scheduled) 5 May 2023, 2:30 PM"]';
        this.vkyc = '/html/body/div/div[1]/div[4]/div[2]/div[1]/div[2]/div[2]/div[1]/button';
        this.vkycUi = '//div[@class="sc-juNKJE eKFMNo"]';
        this.vkycUi2 = '//div[@class="Stepperstyle__Root-sc-7f5ri8-4 ftAPEh sc-eEnVfJ bDHiaB"]';
        this.debit = '//*[@id="debitCardNumber"]';
        this.cvv = '//*[@id="CVVNumberDebitCard"]';
        this.logo = '//*[@class="logoDiv"]';
        this.headmsg = '//*[text()="Initiate Verification"]';
        this.scheduleLtr = '//*[text()="Schedule for later"]';
        this.calanderIcon = '//*[@data-testid="IconCalendar3"]';
        this.timer = '//*[@data-testid="IconChevronDown"]';
        this.tslot = '//*[@class="Liststyle__ListItem-sc-zdgkpp-3 kPRwgT listItem-timeslot-list"][3]';
        this.confirmButton = '//*[@id="confirmAppointmentBtn"]';
    }

    async enterMobilenumber(value) {    
        return await $(this.mobilenumber).setValue(value);
    }

    async enterEmailId(value) {
        return await $(this.emailId).setValue(value);
    }

    async AdharInput(value) {
        return await $(this.adharinput).setValue(value);
    }

    async OTPButton() {
        return await $(this.otpbutton).click();
    }

    async VerifyOTPButton() {
        return await $(this.verifyotpbutton).click();
    }

    async enterPan(value) {
        return await $(this.pan).setValue(value);
    }

    async enterAdharNum(value) {
        return await $(this.adharnum).setValue(value);
    }
    
    async clickToGetOtp(){
        return await $(this.getOtpBtn).click();
    }

    async clickToVerifyOtp(){
        return await $(this.verifyOtpBtn).click();
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

    async Salaried() {
        return await $(this.salaried).getValue();
    }

    async Salary() {
        return await $(this.salary).getValue();
    }

    async grossIncomeValue(value) {
        return await $(this.grossIncome).setValue(value);
    }

    async mothersName(value){
        return await $(this.mothersNameText).setValue(value);
    }

    async CompanyName(value) {
        return await $(this.companyname).setValue(value);
    }

    async SelectCompanyName() {
        return await $(this.selectcompanyname).click();
    }

    async ProceedOpenAccountBtn() {
        return await $(this.proceedopenaccountbtn).click();
    }

    async Proceed() {
        return await $(this.proceed).click();
    }

    async CardNumber(value) {
        return await $(this.cardnumber).setValue(value)
    }

    async CVV(value) {
        return await $(this.cvv).setValue(value);
    }

    async MakePayment() {
        return await $(this.makepayment).click();
    }

    async Congratulations() {
        return await $(this.congratulations).getText();
    }

    async Message() {
        return await $(this.message).getText();
    }

    async CustomerId() {
        return await $(this.customerid).isDisplayed();
    }

    async AccountNumber() {
        return await $(this.accountnum).isDisplayed();
    }

    async RegisterMessage() {
        return await $(this.registermessage).isDisplayed();
    }

    async AccountDetails() {
        return await $(this.accountdetails).click();
    }

    async Month() {
        return await $(this.month).click();
    }

    async Oct() {
        return await $(this.oct).getText();
    }

    async Year() {
        return await $(this.year).click();
    }
    
    async TTThree() {
        return await $(this.ttthree).getText();
    }

    async CardSubmitBtn() {
        return await $(this.cardsubmitbtn).click();
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
    async earnUptoTextFlow() {
        return await $(this.earnUptoFlow).isDisplayed();
    }

    async enterAdharNum(value) {
        return await $(this.adharnum).setValue(value);
    }        

    async clickToGetOtp(){
        return await $(this.getOtpBtn).click();
    }	
    
    async ClickAadhar() {
        return await $(this.clickaadhar).click();
    }        
    
    async Ocupation() {
        return await $(this.ocupation).click();
    }        
    
    async sourceIncomePlaceHolderText() {
        return await $(this.sourceOfIncome).click();
    }        
    
    async SourceOFIncome() {
        return await $(this.SOIncome).isDisplayed();
    }
    
    async SheduledTimeDate() {
        return await $(this.sheduledtimedate).getText();
    }

    async VKYC() {
        return await $(this.vkyc).click();
    }

    async uiOfVKYCfield(){
        return await $(this.vkycUi).isDisplayed();
    }
        
    async uiOfVKYCfield2(){ 
        return await $(this.vkycUi2).isDisplayed();
    }

    async setValueToDebitCard() {
        await $(this.debit).setValue(); 
    }
        
    async setValueToCvv(){ 
        return await $(this.cvv).setValue();
    }

    async Logo() {
        return await $(this.logo).isDisplayed();
    }

    async HeadingMsg() {
        return await $(this.headmsg).getText();
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
}

module.exports = new FullDemo();