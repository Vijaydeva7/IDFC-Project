
const onhc5360 = require("../../pages/web/onhc5360.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");

// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const { on } = require("npm");


describe("Homepage Validation : ", () => {
    it("Validate whether idfc logo is present on screen", async () => {
       
        await driver.url("/apply/savings");
        await driver.maximizeWindow();
        await onhc5360.waitUntilHomepageLoad();
        await driver.pause(5000);
       
    });

    it("Validate whether Each Product banner is available or not", async () => {
        

        // await driver.actions([
        //     driver.action('pointer')
        //         .move(500, 500)
        //         .down()
        //         .move(250, 250)
        //         .up(),
        //     driver.action('pointer')
        //         .move(500, 500)
        //         .down()
        //         .move(750, 750)
        //         .up()
        // ])
        // await driver.scrollDown();
        await onhc5360.eachProductBanner();
        await driver.pause(2000);
        //await onhc5360.colorOfTheText();
       
    });
    
    it("To verify details in Up to 6.75% p.a. interest", async () => {
       
        await onhc5360.interestRates();
        await onhc5360.interestRates2();
        await onhc5360.interestRates3();
        await onhc5360.interestRates4();
        await driver.pause(5000);
        //await onhc5360.colorOfTheText();
        
    });

    it(" To verify details in Monthly interest credit", async () => {
        
        await driver.pause(1000);
        await onhc5360.monthlyInteresrCredit();
        await expect(await onhc5360.monthlyInteresrCredit()).to.be.eql(labelConstants.onhc5360.monthlyCredit); 
        await onhc5360.monthlyInteresrCredit2();
        await expect(await onhc5360.monthlyInteresrCredit2()).to.be.eql(labelConstants.onhc5360.monthlyCredit2); 

    });

    it("To verify details in No Charges on 28+ services", async () => {
        
        
        await driver.pause(1000);
        await onhc5360.noChargesText();
        await expect(await onhc5360.noChargesText()).to.be.eql(labelConstants.onhc5360.noCharges); 
        await onhc5360.noChargesText2();
        await expect(await onhc5360.noChargesText2()).to.be.eql(labelConstants.onhc5360.noCharges2); 
        // await onhc5360.noChargesText3();
    });
    
    it("To verify if there is 5 benefits listed in Collapsed view", async () => {


        await onhc5360.fiveBenefitsList();
        await onhc5360.airportLoungeAccess();
        await expect(await onhc5360.airportLoungeAccess()).to.be.eql(labelConstants.onhc5360.airport); 
        await onhc5360.cashbackField();
        await expect(await onhc5360.cashbackField()).to.be.eql(labelConstants.onhc5360.cashback); 
        await onhc5360.clearTrip();
        await expect(await onhc5360.clearTrip()).to.be.eql(labelConstants.onhc5360.clearTrip); 
        await onhc5360.skechersField();
        await expect(await onhc5360.skechersField()).to.be.eql(labelConstants.onhc5360.skechersField); 
        await onhc5360.personalAccidentCover();
        await expect(await onhc5360.personalAccidentCover()).to.be.eql(labelConstants.onhc5360.accidentCover); 
    
    });

    it("To verify details of Airport Lounge Access", async() => {

        await onhc5360.airportLounge();
        await onhc5360.airportLoungeAccess();
        await expect(await onhc5360.airportLoungeAccess()).to.be.eql(labelConstants.onhc5360.airport); 
        
    })
    it("To verify details of Cashback 2% on All Debit Card Spends", async() => {

        await onhc5360.cashBackIcon();
        await onhc5360.cashbackField();
        await expect(await onhc5360.cashbackField()).to.be.eql(labelConstants.onhc5360.cashback); 
       
    })
    it("To verify details of Up to 35% Off on Cleartrip", async() => {

        //await onhc5360.clearTripIcon();
        await onhc5360.clearTrip();
        await expect(await onhc5360.clearTrip()).to.be.eql(labelConstants.onhc5360.clearTrip); 
       
        
    })
    it("To verify details of 10% Off on SKECHERS at both stores and online", async() => {

        //await onhc5360.clearTripIcon();
        await onhc5360.skechersField();
        await expect(await onhc5360.skechersField()).to.be.eql(labelConstants.onhc5360.skechersField); 
         
    })
    it("To verify details of Personal Accident Cover", async() => {

        await onhc5360.accidentCoverIcon();
        await onhc5360.personalAccidentCover();
        await expect(await onhc5360.personalAccidentCover()).to.be.eql(labelConstants.onhc5360.accidentCover); 

    });
    
    it("To verify Discover all benefits is clickable and benefits list gets expanded", async() => {

        await onhc5360.clickAllBenefits();
        await driver.pause(3000);
        await onhc5360.tenBenefits6();
        await onhc5360.tenBenefits7();
        await onhc5360.tenBenefits8();
        await onhc5360.tenBenefits9();
        await onhc5360.tenBenefits10();

    });
 it("To verify details of Lost card Liability", async() => {

        await driver.pause(3000);
        await onhc5360.iconLastCard();
        await onhc5360.iconLastCardText();
        await expect(await onhc5360.iconLastCardText()).to.be.eql(labelConstants.onhc5360.cardText); 
   
    });
    it("To verify details of Daily Cash Withdrawal", async() => {

         await driver.pause(3000);
         await onhc5360.iconCashWithdraw();
         await onhc5360.cashWithdrawText();
         await expect(await onhc5360.cashWithdrawText()).to.be.eql(labelConstants.onhc5360.cardText2); 
    
     });

     it("To verify details of Daily Purchase Limit", async() => {

         await driver.pause(3000);
         await onhc5360.iconPurchase();
         await onhc5360.purchaseText();
         await expect(await onhc5360.purchaseText()).to.be.eql(labelConstants.onhc5360.cardText3); 
    

     });
     it("To verify details of Purchase Protection", async() => {

         await driver.pause(3000);
         await onhc5360.IconProtection();
         await onhc5360.protectionText();
         await expect(await onhc5360.protectionText()).to.be.eql(labelConstants.onhc5360.cardText4); 
    

     });
     it("To verify details of Air Accident Cover", async() => {

         await driver.pause(3000);
         await onhc5360.IconAcidentCover();
         await onhc5360.protectionText();
         await expect(await onhc5360.protectionText()).to.be.eql(labelConstants.onhc5360.cardText4); 
    

     });
     it("To verify details of Air Accident Cover", async() => {

         await driver.pause(3000);
         await onhc5360.IconAcidentCover();
         await onhc5360.protectionText();
         await expect(await onhc5360.protectionText()).to.be.eql(labelConstants.onhc5360.cardText4); 
    

     });
     
     
      

  });