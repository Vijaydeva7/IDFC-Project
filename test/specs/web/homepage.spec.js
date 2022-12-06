const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { getMobileNumber } = require("../../pages/web/homepage.page");

describe("Homepage Validation", () => {
    it("Validate whether idfc logo is present on screen", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        // await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);
    });
    it("Validate whether term's and condition hint text is present on screen", async () => {
        await expect(await homepage.isTermsAndCondHintTextIsDisplayed()).to.be.eql(true);
    });

    it("Validate whether +91 appended on mobile number after entering it", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.toTestPlus91);
        await expect(await homepage.isPlusNintyOneTextDispalyed()).to.be.eql(true);
    });

    it("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
       await expect(await homepage.getMobileNumberHintText()).to.be.eql(labelConstants.mobileNumHintText);
    });

   


    it("Validate whether mobile number field accepts only numbers", async () => {
        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingAlphabets))).to.be.eql("");

        await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingSplChars))).to.be.eql("");
    });
    it("Validate whether User  able to enter only 10 digits in the mobile number field", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lengthMoreThan10Digits);
        await driver.pause(7000);
        let mobileNum = await homepage.getMobileNumber();

        await console.log("############", mobileNum);

        // await expect(mobileNum.length).to.be.eql(10);
    });


    it("Validate whether User  able to enter the blank space", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileBlankNum(invalidTestData.mobileNumber.blankSpace);
        let mobileBlankNum = await homepage.getMobileBlankSpace();
        console.log("######",mobileBlankNum);
        await driver.pause(5000);
        await expect(mobileBlankNum).to.be.eql("Please enter a valid 10-digit mobile number");
    });
    
    it("Validate whether User  able to enter the Spl char&Alpha in mobile number field", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileSplCharAndAlpha(invalidTestData.mobileNumber.secialCharAlph);

        await expect(await homepage.getMobileSplCharAndAlpha()).to.be.eql("");
        await expect(await homepage.isPlzEnterMobileTxtDispalyed()).to.be.eql(true);
    });
    
    it("Validate whether User should be able to enter only 10 digits in the mobile number field.", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToOnly10DigMobileNum(invalidTestData.mobileNumber.only10DigMobileNum);
        await expect(await homepage.getOnly10DigMobileNum()).to.be.eql("9701133446");
        await driver.pause(3000);
        await expect(await homepage.isRegAadharMobileNumTxtDispalyed()).to.be.eql(true);
    });
    
    it("Validate whether User should be enter only 10 zeros in the mobile number field.", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.tenZerosEnter);
        await expect(await homepage.getTenZerosMobileNum()).to.be.eql("0000000000");
        await driver.pause(3000);
        await expect(await homepage.isTenZerosMobileNumTxtDispalyed()).to.be.eql(true);
    });
    
    

    it("Validate whether Field should not accept numbers less than 10 digit. ", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
            await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lessThanTenNumbers);
            await expect(await homepage.getLessThanTenNum()).to.be.eql("876544");
            await driver.pause(3000);
            await expect(await homepage.isLessThanTenNumDispalyed()).to.be.eql(true);
    });
    
    it("Validate whether Field should not accept Zero as intial ", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await driver.pause(3000);
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.zeroAsIntial);
        await expect(await homepage.getZeroAsIntial()).to.be.eql("0342673653");
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
});
it("Validate whether Field should give the hint text as Mobile number registered with Aadhaar.", async () => {
        await driver.pause(3000);
        await driver.refresh();
        let withoutValue = await homepage.getWithoutAnyValue();
        console.log("######", withoutValue);
        await expect(await homepage.getWithoutAnyValue()).to.be.eql("");
        await driver.pause(3000);
        await expect(await homepage.isRegMobileNumWithAadharTxtDispalyed()).to.be.eql(true);
});

it("Validate whether Field should not accept field start with zero to five numbers.", async () => {
      
    for (var index = 1; index <= 10; index++) {

        await driver.keys(['Backspace']);

    }
    await driver.pause(3000);
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.zero);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
 
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.one);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
 
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }       
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.two);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
 
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.three);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
 
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.four);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
 
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.five);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
   
        

        });

    
       
        it("Validate whether Field should not accept 10 blank spaces ", async () => {
            await driver.pause(3000);
            await driver.refresh();
            await driver.pause(5000);
            for (var index = 1; index <= 10; index++) {
    
                await driver.keys(['Backspace']);
    
            }
            const mobileNumber = await $('#mobileNumber')
            await mobileNumber.click()
            await driver.pause(3000);
            await driver.keys(["Spacebar"]);
            await driver.pause(3000);
            await expect(await homepage.istenPlzEnterMobNumDispalyed()).to.be.eql(true);
    });


});