class Commontestcases{
    constructor() {


        this.mobileNumber='//*[@name="mobileNumber"]';
        this.basicDetailHeading = '//*[text()="Welcome Back!"]';
        this.topbar = '//*[@class="sc-kYQaHc gQtfxQ"]';
        this.resumeJourney = '//*[@class="sc-gmIBId bUJMLF"]';
        this.logo = '//*[@src="/safe_red~e3c504.png"]';
        this.welcomeText = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-clGIgy jHAVvS"]';
        this.paraText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 vLkZD"]';
        this.mobile = '//*[@for="number_input_mobile"]';
        this.nextBtn = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 gRHoMQ"]';
        this.voucher1 = '//*[@src="/coins_red~e5e06d.png"]';
        this.voucher2 = '//*[@src="/calender~9333b0.png"]';
        this.voucher3 = '//*[@src="/atm~dbc078.png"]';
        this.voucher4 = '//*[@src="/goal_planning~c61ece.png"]';
        this.mobileInput = '//*[@name="mobileNumber"]';



    }
    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
   

}
   async topBar(){
    return await $(this.topbar).isDisplayed() == true;
   }
   async resumeJourneyPart(){
    return await $(this.resumeJourney).isDisplayed() == true;
   }
   async logoPart(){
    return await $(this.logo).isDisplayed() == true;
   }
   async welcomeBackText(){
    return await $(this.welcomeText).getText();
   }
   async paragraph(){
    return await $(this.paraText).getText();
   }
   async nextButton(){
    return await $(this.nextBtn).isDisplayed() == true;
   }
   async vouchers1(){
    return await $(this.voucher1).isDisplayed() == true;
   }
   async vouchers2(){
    return await $(this.voucher2).isDisplayed() == true;
   }
   async vouchers3(){
    return await $(this.voucher3).isDisplayed() == true;
   }
   async vouchers4(){
    return await $(this.voucher4).isDisplayed() == true;
   }
   async mobileField(value){
    return await $(this.mobileNumber).setValue(value);
   }
   async mobileText(){
    return await $(this.mobile).getText();
   }
   async mobileClick(){
    return await $(this.mobileNumber).click();
   }
   async mobileFieldNumbers(){
    return await $(this.mobileInput).getValue();
   }



}
module.exports = new Commontestcases();