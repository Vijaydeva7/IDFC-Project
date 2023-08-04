const homepage = require("../../pages/web/homepage.page");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const { expect } = require("chai");


class Basicdetails {
    constructor(){
        
    }

    async basicDetails(){
       
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(5000)
        // const resumeVerify = await $("//button[@class='Buttonstyle__Wrapper-sc-bbdsxl-0 bZQfzg']");
        // await resumeVerify.click();
        // await driver.pause(20000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email4);
        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(30000);
        await homepage.verifyOtpBtn();
        await driver.pause(20000)
    }

    async scheduleLaterFunctionality(){

      
            
            await homepage.scheduleLtrBtn();
            await driver.pause(5000);
            await homepage.calander();
            await driver.pause(3000);
            await homepage.calanderDate();
            await driver.pause(2000);
            await homepage.timeSet();
            await driver.pause(2000);
            await homepage.timeSlot();
            await driver.pause(2000);
            await homepage.confirmButtonSchedule();
            await driver.pause(5000);
           
    }





}
module.exports = new Basicdetails();