class onhc5360 {
    constructor(){
        this.epBanner = '//*[@class="sc-cSiBin DKeaZ"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.colorText = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-gswDWH cPAVqN"]';
        this.interestText1 = '//*[text()="7%"]';
        this.interestText2 = '//*[text()="p.a. interest"]';
        this.interestText3 = '//*[text()="Up to"]';
        this.interestText4 = '//*[text()="Discover all benefits"]';
        this.tickMarkIcon = '//*[@aria-label="VerifiedTick"]';
        this.mobileCredit = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[1]/div/div[2]/div/div/p';
        this.mobileCredit2 = '//p[@data-testid="TextWrapper"][text() = "interest credit"]';
        this.nochargesText = '//*[text()="on 28+ services"]';
        this.nochargesText2 = '//*[@id="app"]/div[1]/div/div/div[2]/div[3]/div[1]/div/div[3]/div/div/p';
        this.benefits = '//*[@class="sc-dPykP dkGYuT"]';
        this.Airport = '//*[text()="Airport Lounge Access"]';
        this.cashBack = '//*[text()="2% on ALL Debit Card Spends"]';
        this.trip = '//*[text()=" on flights and hotels"]';
        this.skechers = '//*[text()=" at both stores and online"]';
        this.accidentCover = '//*[text()="Personal Accident Cover"]';
        this.airplane = '//*[@data-testid="IconFlight2"]';
        this.cashBack2 = '//*[@aria-label="Cashback2"]';
        this.accidentIcon = '//*[@data-testid="IconUmbrella3"]';
        this.benefitsLink = '//*[text()="Discover all benefits"]';
        this.benefits6 = '//*[@class="sc-gLMhmw crOGeR"][6]';
        this.benefits7 = '//*[@class="sc-gLMhmw crOGeR"][7]';
        this.benefits8 = '//*[@class="sc-gLMhmw crOGeR"][8]';
        this.benefits9 = '//*[@class="sc-gLMhmw crOGeR"][9]';
        this.benefits10 = '//*[@class="sc-gLMhmw crOGeR"][10]';
        this.lastCard = '//*[@data-testid="IconLastCard"]';
        this.lastCardText = '//*[text()="Lost Card Liability"]';
        this.cashWithdraw = '//*[@data-testid="IconDailyCash"]';
        this.withdrawText = '//*[text()="Daily Cash Withdrawal"]';
        this.purchase = '//*[@data-testid="IconDailyPurchaseLimit"]';
        this.purchasetext = '//*[text()="Daily Purchase Limit"]';
        this.protectionIcon = '//*[@data-testid="IconPurchaseProtection"]';
        this.protection = '//*[text()="Purchase Protection"]';
        this.accidentIcon = '//*[@data-testid="IconAcidentCover"]';
        this.accidentText = '//*[text()="Air Accident Cover"]';

        

        //*[@class="sc-gLMhmw crOGeR"][1]

    }
    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }
    async eachProductBanner(){
        return await $(this.epBanner).isDisplayed() == true;
    }
    async colorOfTheText(){
        return await $(this.colorText).getCSSProperty('color') == "rgb(155, 30, 38)";
    }
    async interestRates(){
        return await $(this.interestText1).isDisplayed() == true;
    }
    async interestRates2(){
        return await $(this.interestText2).isDisplayed() == true;
    }

    async interestRates3(){
        return await $(this.interestText3).isDisplayed() == true;
    }
    async interestRates4(){
        return await $(this.interestText4).scrollIntoView({behavior: "instant", block: "center", inline: "center"});
    }
    
    async tickIcon(){
        return await $(this.tickMarkIcon).isDisplayed() == true;
    }
    async monthlyInteresrCredit(){
        return await $(this.mobileCredit).getText();
    }
    async monthlyInteresrCredit2(){
        return await $(this.mobileCredit2).getText();
    }
    async noChargesText(){
        return await $(this.nochargesText).getText();
    }
    async noChargesText2(){
        return await $(this.nochargesText2).getText();
    }
    async noChargesText3(){
        return await $(this.nochargesText2).getCSSProperty('font-weight') == "900";
    }
    async fiveBenefitsList(){
        return await $(this.benefits).isDisplayed() == true;
    }
    async airportLoungeAccess(){
        return await $(this.Airport).getText();
    }
    async cashbackField(){
        return await $(this.cashBack).getText();
    }
    async clearTrip(){
        return await $(this.trip).getText();
    }
    async skechersField(){
        return await $(this.skechers).getText();
    }
    async personalAccidentCover(){
        return await $(this.accidentCover).getText();
    }

    async airportLounge(){
        return await $(this.airplane).isDisplayed() == true;
    }
    async cashBackIcon(){
        return await $(this.cashBack2).isDisplayed() == true;
    }
    async clearTripIcon(){
        return await $(this.clearTripLogo).isDisplayed() == true;
    }
    async accidentCoverIcon(){
        return await $(this.accidentIcon).isDisplayed() == true;
    }
    async clickAllBenefits(){
        return await $(this.benefitsLink).click();
    }
    async tenBenefits6(){
        return await $(this.benefits6).isDisplayed() == true;
    }
    async tenBenefits7(){
        return await $(this.benefits7).isDisplayed() == true;
    }
    async tenBenefits8(){
        return await $(this.benefits8).isDisplayed() == true;
    }
    async tenBenefits9(){
        return await $(this.benefits9).isDisplayed() == true;
    }
    async tenBenefits10(){
        return await $(this.benefits10).isDisplayed() == true;
    }
    async iconLastCard(){
        return await $(this.lastCard).isDisplayed() == true;
    }
    async iconLastCardText(){
        return await $(this.lastCardText).getText();
    }
    async iconCashWithdraw(){
        return await $(this.cashWithdraw).isDisplayed() == true;
    }
    async cashWithdrawText(){
        return await $(this.withdrawText).getText();
    }
    async iconPurchase(){
        return await $(this.purchase).isDisplayed() == true;
    }
    async purchaseText(){
        return await $(this.purchasetext).getText();
    }
    async IconProtection(){
        return await $(this.protectionIcon).isDisplayed() == true;
    }
    async protectionText(){
        return await $(this.protection).getText();
    }
    async IconAcidentCover(){
        return await $(this.accidentIcon).isDisplayed() == true;
    }
    async textAcidentCover(){
        return await $(this.accidentText).getText();
    }
    
    
    
}
module.exports = new onhc5360()