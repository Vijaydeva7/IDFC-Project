class Referrallinkpage {
    constructor() {
        
        this.name = '//*[@id="l_name"]';
        this.email = '//*[@name="email"]';
        this.mobile = '//*[@id="l_mobile"]';
        this.tnc = '//*[@class="tnc"]';
        this.howItWorksPopUpText = '//*[text()="How it works"]';
        this.popUp1 = '//*[@id="howItWorks"]/div/div/div[2]/ol/li[1]';
        this.popUp2 = '//*[@id="howItWorks"]/div/div/div[2]/ol/li[2]';
        this.popUp3 = '//*[@id="howItWorks"]/div/div/div[2]/ol/li[3]';
        this.popUp4 = '//*[@id="howItWorks"]/div/div/div[2]/ol/li[4]';
        this.pipeSymbol = '//*[@id="footer"]';
        this.tcnPopUp = '//*[@id="modal"]/div/div';
        this.closePopUpStaticPage = '//*[@src="https://clientcdn.notifyvisitors.com/Idfc/IDFCFIRSTBankLogowithTaglineinBlack.png"]';
        this.referralSharePopUp = '//*[@id="copyLink"]/div/div';
        this.copyLinkButton = '//*[@id="copy-dynamic"]';
        this.closeBtn = '//*[@id="copyLink"]/div/div/div[2]/button[2]';
        this.copied = '//*[text()="Copied"]';
        this.whatsApp = '//*[@class="_9vd5 _9scb"]';
        this.whatsApp2 = '//*[@class="_aeo8 _9vcv _9u4o _9u4i"]';

    }

   async  setValueToName(value) {
    return await $(this.name).setValue(value);
   }
   async  setValueToEmail(value) {
    return await $(this.email).setValue(value);
   }
   async setValueToMobile(value){
    return await $(this.mobile).setValue(value);
   }
   async getTncText(){
    return await $(this.tnc).getText();
   }
   async howItWorksPopUp(){
    return await $(this.howItWorksPopUpText).getText();
   }
   async howItWorksPopUp1(){
    return await $(this.popUp1).isDisplayed();
   }
   async howItWorksPopUp2(){
    return await $(this.popUp2).isDisplayed();
   }
   async howItWorksPopUp3(){
    return await $(this.popUp3).isDisplayed();
   }
   async howItWorksPopUp4(){
    return await $(this.popUp4).isDisplayed();
   }
   async getPipeSymbol(){
    return await $(this.pipeSymbol).getText();
   }
   async getTncPopUp(){
    return await $(this.tcnPopUp).isDisplayed();
   }
   async closePopUp(){
    return await $(this.closePopUpStaticPage).isDisplayed();
   }
   async closePopUpTcn(){
    return await $(this.closePopUpStaticPage).isDisplayed();
   }
   async referralPopUp(){
    return await $(this.referralSharePopUp).isDisplayed();
   }
   async copyLinkBtn(){
    return await $(this.copyLinkButton).isDisplayed();
   }
   async closeButton(){
    return await $(this.closeBtn).isDisplayed();
   }
   async copiedText(){
    return await $(this.copied).getText();
   }
   async closeButtonFunctionality(){
    return await $(this.closePopUpStaticPage).isDisplayed();
   }
   async whatsAppFunctionality(){
    return await $(this.whatsApp).isDisplayed();
   }
   async whatsAppFunctionality2(){
    return await $(this.whatsApp2).isDisplayed();
   }
   
    
    
}
module.exports = new Referrallinkpage();