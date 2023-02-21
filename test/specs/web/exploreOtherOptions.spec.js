const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

describe("Explore Other Options Validation : ", () => {
    it("Validate whether idfc logo is present on screen", async () => {
        await driver.url("/apply/savings");
        await driver.maximizeWindow();

        // await driver.pause(10000);
        await homepage.waitUntilHomepageLoad();
        await driver.pause(2000);
        await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);
    });

    it("Validate whether User should able to see Explore other options", async () => {
        await driver.pause(2000);
        await driver.refresh();
        const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
        await exploreOptions.click();
        await driver.pause(10000);
        await expect(await homepage.isExploreOtherOptionsDisplayed()).to.be.eql(true);
    
    });
    it("Validate whether two sections should get display on explore more options pop up", async () => {
        
        await expect(await homepage.exploreOtherOptionsTwoTexts()).to.be.eql(true);
        await expect(await homepage.exploreOtherOptionsTwoTexts2()).to.be.eql(true);

    });
    
     
    it("Validate whether To check the contents of Dont remember your Aadhaar number section.", async () => {
        
        await expect(await homepage.downContentOfDontRememberAadhar()).to.be.eql(labelConstants.exploreOtherOptionsField.downContentOfDontRememberAadhar);
       

    });
    it("Validate whether dont have aadahr number section should following content", async () => {
        
        await expect(await homepage.downContentOfDontHaveAadhar()).to.be.eql(labelConstants.exploreOtherOptionsField.downContentOfDontHaveAadhar);
       

    });

    it("Validate whether in the dont have aadahr number section visitiUid button should br present or not", async () => {
    
        await expect(await homepage.exploreOtherOptionsVisitUidBtn()).to.be.eql(true);
       

    });
    it("Validate whether in the dont have aadahr number section intiate offline process button should be present or not", async () => {
    
        await expect(await homepage.exploreOtherOptionsintiateOfflineProcessBtn()).to.be.eql(true);
       

    });
    it("Validate whether pop up gets close when user clicks on close icon.", async () => {
        const close = await $('(//*[name()="svg"][@aria-label="Cross"])[1]')
        await close.click();
        await driver.pause(2000);
        await expect(await homepage.popUpClosed()).to.be.not.eql(true);
       

    });

    it("Validate whether pop up should not close when user clicks on outside the pop up.", async () => {
        
        const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
        await exploreOptions.click();
        const close = await $('//div[@class="ReactModal__Overlay ReactModal__Overlay--after-open"]')
        await close.click();
        await driver.pause(2000);
        await expect(await homepage.popUpNotClosed()).to.be.eql(true);
       
    });

    it("Validate whether user clicks visitUIDAI button user redirect to the UIDAI page", async () => {
        
        const visitUid = await $('//*[@id="visitUid"]');
        await visitUid.click();
        await driver.pause(30000);
        await expect(await homepage.uidRedirectPage()).to.be.eql(true);
        await expect(await homepage.uidPageContainer()).to.be.eql(true);

        
       
    });
    it("Validate whether User should be redirect to the  Don't  have Aadhaar page.", async () => {
        await driver.pause(2000);
        await driver.refresh();
        const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
        await exploreOptions.click();
        await driver.pause(3000);
        const intiate = await $('//*[@id="initiateOfflineProcess"]');
        await intiate.click();
        await driver.pause(10000);
        await expect(await homepage.dontHaveAadharRedirectPage()).to.be.eql(labelConstants.exploreOtherOptionsField.dontHaveAadharText);
        
    
    });

    it("Validate whether User click back arrow key, User redirect to the Landing page", async () => {
        
        const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
        await backArrow.click();
        await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);

    
    
    });
    it("Validate whether Following fields should get display sequentially on No Aadhaar page", async () => {
        
        const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
        await exploreOptions.click();
        await driver.pause(3000);
        const intiate = await $('//*[@id="initiateOfflineProcess"]');
        await intiate.click();
        await driver.pause(3000);
        await expect(await homepage.isDontHavePageText()).to.be.eql(labelConstants.dontHaveAadharPage);
        await expect(await homepage.isDontHavePageText2()).to.be.eql(labelConstants.dontHaveAadharPage2);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldPan()).to.be.eql(labelConstants.dontHaveAadharPage3);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldMobileNo()).to.be.eql(labelConstants.dontHaveAadharPage4);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldSendOtp()).to.be.eql(labelConstants.dontHaveAadharPage5);

    });
    it("Validate whether if user enter only First name in the Full name text box then error message should be shown to user.", async () => {
        const fullName = $('//*[@autocomplete="fullName"]');
        await fullName.click();
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarFullName(invalidTestData.exploreOtherOptionsField.invalidFullName);
        await driver.pause(3000);
        await expect(await homepage.isDontHavePageText()).to.be.eql(labelConstants.exploreOtherOptionsField.fullNameErrorMsg);


    });

    it("Validate whether If user enter  First name  Last Name in the Full name text box then no error message should be shown to user.", async () => {
       
        const fullName = $('//*[@autocomplete="fullName"]');
        await fullName.click();
        for (var index = 1; index <= 12; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
        await driver.pause(3000);
        await expect(await homepage.isDontHavePageText()).to.be.eql(labelConstants.exploreOtherOptionsField.validFullNameMsg);

    });

    it("Validate whether User should enter 10 numbers field should display error message like please enter valid pan", async () => {
        const fullName = $('//*[@autocomplete="pan"]');
        await fullName.click();
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarPan(invalidTestData.exploreOtherOptionsField.invalidPan);
        await driver.pause(3000);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldPan()).to.be.eql(labelConstants.exploreOtherOptionsField.invalidPanErrorMsg);


    });

    it("Validate whether User should enter 10 alphabets field should display error message like please enter valid pan", async () => {
        const fullName = $('//*[@autocomplete="pan"]');
        await fullName.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await fullName.click();
        for (var index = 1; index <= 2; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarPan(invalidTestData.exploreOtherOptionsField.invalidPan2);
        await driver.pause(3000);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldPan()).to.be.eql(labelConstants.exploreOtherOptionsField.invalidPanErrorMsg);


    });

    it("Validate whether User should enter combination of 3 alphabets 3 spcl chars 4 numbers field should display error message like please enter valid pan", async () => {
        const fullName = $('//*[@autocomplete="pan"]');
        await fullName.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await fullName.click();
        for (var index = 1; index <= 3; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarPan(invalidTestData.exploreOtherOptionsField.invalidPan3);
        await driver.pause(3000);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldPan()).to.be.eql(labelConstants.exploreOtherOptionsField.invalidPanErrorMsg);


    });
    it("Validate whether User should enter combination of first 5 alphabets then 4 digits and last alphabet field icon should get turn as yellow.", async () => {
        const fullName = $('//*[@autocomplete="pan"]');
        await fullName.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await fullName.click();
        for (var index = 1; index <= 3; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(3000);
        await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
        await driver.pause(3000);

        // const icon = $('//*[@class="Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa"]');
        // const color = icon.getCSSProperty('color').value;
        // await console.log("######",color)
        // await expect(color.value).to.be.eql('rgba(84,86,91,1)')
        // const color = await driver.getCSSProperty("//*[@class='Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa']", "color");
        // await console.log("######",color)
        // await expect(color.value).to.be.eql("rgba(84,86,91,1)");
        const panIconElem = await $('//*[@class="Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa"]')
        const panIcon = await panIconElem.getCSSProperty('//*[@class="Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa"]','color')
        await console.log("######",panIcon)
        await expect(await homepage.colorOfTheIcon()).to.be.eql(validTestData.cssValues);

        await expect(await homepage.isDontHaveAadharPanIconDisplayed()).to.be.eql(true);
        await expect(await homepage.dontHaveAadharEnterDetailsFieldPan()).to.be.eql(labelConstants.exploreOtherOptionsField.validPanMsg);

        
    });

    it("Validate whether Verify that mobile number should be start  +91 country code.", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        await expect(await homepage.isDontHaveAadharMobilePlus91Displayed()).to.be.eql(true);
        await expect(await homepage.dontHaveAadharMobilePlus91Text()).to.be.eql(labelConstants.exploreOtherOptionsField.nintyOneMobileNo);

    });
    it("Validate whether Verify that mobile number should accept only numbers", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo);
        await expect(await homepage.dontHaveAadharMobileField()).to.be.not.eql(invalidTestData.exploreOtherOptionsField.invalidMobileNo);
        await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
        await driver.pause(3000)
        await expect(await homepage.dontHaveAadharMobileField()).to.be.eql(validTestData.exploreOtherOptionsField.validMobileNo);


    }); 
    it("Validate whether Verify that user should not be able to enter special characters or alphabets in mobile number field", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 3; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo2);
        await expect(await homepage.dontHaveAadharMobileField()).to.be.not.eql(invalidTestData.exploreOtherOptionsField.invalidMobileNo2);
        // await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
        // await driver.pause(3000)
        // await expect(await homepage.dontHaveAadharMobileField()).to.be.eql(validTestData.exploreOtherOptionsField.validMobileNo);


    }); 
    it("Validate whether Verify that mobile number should accept not accept more than 10 numbers", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo3);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobileField()).to.be.eql("8142662462");
        

    }); 
    it("Validate whether Verify that mobile number should accept not accept less than 10 numbers it shows error msg", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 3; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo4);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        

    }); 
    it("Validate whether Verify that entered invalid mobile number should accept same ", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 3; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo2);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileFieldMsg);
        

    }); 
    it("Validate whether if user entered 5,4,3,2,1,0 as intial in mobile number field should get error msg ", async () => {
        
        const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo5);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo6);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo7);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);

        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo8);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo9);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        
        await mobileNo.click();
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
    
        }
        await driver.pause(4000);
        await mobileNo.click();
        for (var index = 1; index <= 5; index++) {

            await driver.keys(['Backspace']);
    
        }
        await homepage.setValueToDontHaveAadhaarMobileNo(invalidTestData.exploreOtherOptionsField.invalidMobileNo10);
        await driver.pause(4000)
        await expect(await homepage.dontHaveAadharMobile()).to.be.eql(labelConstants.exploreOtherOptionsField.mobileErrorMsg);
        



    }); 
    it("Validate whether Verify that timer should be start from 03:30 ", async () => {
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    const sendBtn = await $("button[type='  ']");
    await sendBtn.click();
    await driver.pause(2000)
    await expect(await homepage.timerStartsFrom()).to.be.eql(labelConstants.exploreOtherOptionsField.timer);


}); 

it("Validate whether Verify that emailId field with missing @ and Domain it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify that emailId field with missing username it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail2);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify that emailId field with missing username it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail3);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify that emailId field entere two @ signs, it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail4);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify email address field With Multiple dots, it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail5);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify the email id text box  With Missing top level domain (.com/.net/.org/etc.), it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail6);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify the email id text box  With unicode char, it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail7);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 
it("Validate whether Verify the email id text box  With Garbage, it shows Error msg", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(invalidTestData.exploreOtherOptionsField.invalidEmail8);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldTextError);
    

}); 

// valid Email Id Tc's
it("Verify the field by entering the valid email address.", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId3);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});

it("Verify the field With Email contains dot in the address field", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId4);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});


it("Verify email id field With Digits in address are valid", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId5);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});

it("Verify the email id field With Underscore in the address field is valid", async () => {

    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId6);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    
});

it("Verify the email id field With .name is valid Top Level Domain name", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId7);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});

it("Verify With Dot in Top Level Domain name also considered valid (use co.jp as example here)", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId8);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});

it("Verify With Dash in address field is valid", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId9);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

});



it("Validate whether Verify that emailId field should accept 40 alphabets only", async () => {
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId2);
    await driver.pause(4000)
    await expect(await homepage.dontHaveAadharEmailIdText()).to.be.eql(labelConstants.exploreOtherOptionsField.emailFieldText);
    

}); 
it("Validate whether Verify functionlaity of Send OTP button when user clicks after entering valid mobile number", async () => {
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await driver.pause(3000);
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    await expect(await homepage.isSendOtpBtnNotDisplayed()).to.be.not.eql(true);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    await expect(await homepage.isSendOtpBtnNotDisplayed()).to.be.eql(true);

    // const sendBtn = await $("button[type='  ']");
    // await sendBtn.click();
    

}); 

it("Validate whether Verify  if user can click on right arrow key when only5 digit OTP is entered Right arrow should not get enable.", async () => {
    
    
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    const sendBtn = await $("button[type='  ']");
    await sendBtn.click();
    await driver.pause(20000);
    await expect(await homepage.isRightArrowDisplayed()).to.be.not.eql(true);

    
}); 
it("Validate whether Verify  if user entered invalid Otp user should get Error msg in Otp field", async () => {
    
    
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    const sendBtn = await $("button[type='  ']");
    await sendBtn.click();
    await driver.pause(20000);
    const rightArrow = await $('//span[@aria-label="ArrowRight"]');
    await rightArrow.click();
    await expect(await homepage.otpErrorMsgText()).to.be.not.eql(labelConstants.exploreOtherOptionsField.otpErrorMsg);

    
}); 
it("Validate whether user After clicking on 'Resend code' OTP field should be cleared.", async () => {

    const resend = await $('//*[@class="CallToActionstyle__ContentWrapper-sc-100zrep-1 kyFLwW"]');
    await resend.click();
    await expect(await homepage.otpFieldValue()).to.be.eql(labelConstants.exploreOtherOptionsField.otpFieldValue);

});

it("Validate whether Verify  if user entered valid Otp after 10 min user should get Error msg in Otp field", async () => {
    
    
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    const sendBtn = await $("button[type='  ']");
    await sendBtn.click();
    await driver.pause(300000);
    const rightArrow = await $('//span[@aria-label="ArrowRight"]');
    await rightArrow.click();

    await expect(await homepage.expiredOtpTitleText()).to.be.not.eql(labelConstants.exploreOtherOptionsField.expiredOtpTitleText);
    await expect(await homepage.expiredOtpMsgText()).to.be.not.eql(labelConstants.exploreOtherOptionsField.expiredOtpMsgText);

    
}); 



it("verify whether OTP button should be enabled before clicking on mobile number field is entered correct. ", async () => {


const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
await backArrow.click();
await driver.pause(5000);
const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
await exploreOptions.click();
await driver.pause(3000);
const intiate = await $('//*[@id="initiateOfflineProcess"]');
await intiate.click();
await driver.pause(3000);
const fullName = $('//*[@autocomplete="fullName"]');
await fullName.click();
await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
const mailId = await $('//*[@name="email"]');
await mailId.click();
await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
const pan = $('//*[@autocomplete="pan"]');
await pan.click();
await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
await mobileNo.click();
await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
await driver.pause(4000)
await expect(await homepage.isSendOtpBtnNotDisplayed()).to.be.eql(true);


});

it("verify whether user should be authenticated successfully to the Thank you for sahring your details page when entered correct Otp. ", async () => {


const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
await backArrow.click();
await driver.pause(5000);
const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
await exploreOptions.click();
await driver.pause(3000);
const intiate = await $('//*[@id="initiateOfflineProcess"]');
await intiate.click();
await driver.pause(3000);
const fullName = $('//*[@autocomplete="fullName"]');
await fullName.click();
await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
const mailId = await $('//*[@name="email"]');
await mailId.click();
await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
const pan = $('//*[@autocomplete="pan"]');
await pan.click();
await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
await mobileNo.click();
await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
await driver.pause(4000)
const sendBtn = await $("button[type='  ']");
await sendBtn.click();
await driver.pause(20000);
const rightArrow = await $('//span[@aria-label="ArrowRight"]');
await rightArrow.click();
await driver.pause(5000);
//await expect(await homepage.isSendOtpBtnNotDisplayed()).to.be.eql(true);
await expect(await homepage.thankYouForYourDetailsText()).to.be.eql(labelConstants.exploreOtherOptionsField.thankYouText);


});
it("verify whether To check the UI of Thank you page.", async () => {

await expect(await homepage.thankYouPageWillContactBoldText()).to.be.eql(labelConstants.exploreOtherOptionsField.weWillContactYouText);
await expect(await homepage.thankYouPageWillContactText()).to.be.eql(labelConstants.exploreOtherOptionsField.weWillContactYouText2);
await expect(await homepage.thankYouPageVisitBankBtn()).to.be.eql(true);


});
it("verify whether To check the functionality of  Go to IDFC First Bank Website button.", async () => {
const visitBankBtn = await $('//*[@class="Buttonstyle__Wrapper-sc-6p72tp-0 fhUqql sc-fspXqA cLuSUk"]');
await visitBankBtn.click();
await driver.pause(10000);
await expect(await homepage.isWelcomeBannerDisplayed()).to.be.eql(true);


});


it("verify whether the functionality of right arrow key after entering all valid details user should land on Thank you page", async () => {


const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
await backArrow.click();
await driver.pause(5000);
const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
await exploreOptions.click();
await driver.pause(3000);
const intiate = await $('//*[@id="initiateOfflineProcess"]');
await intiate.click();
await driver.pause(3000);
const fullName = $('//*[@autocomplete="fullName"]');
await fullName.click();
await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
const mailId = await $('//*[@name="email"]');
await mailId.click();
await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
const pan = $('//*[@autocomplete="pan"]');
await pan.click();
await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
await mobileNo.click();
await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
await driver.pause(4000)
const sendBtn = await $("button[type='  ']");
await sendBtn.click();
await driver.pause(20000);
const rightArrow = await $('//span[@aria-label="ArrowRight"]');
await rightArrow.click();
await driver.pause(5000);
await expect(await homepage.isSendOtpBtnNotDisplayed()).to.be.eql(true);
await expect(await homepage.thankYouForYourDetailsText()).to.be.eql(labelConstants.exploreOtherOptionsField.thankYouText);


});










it("Validate whether Verify that mobile number should accept not accept more than 10 numbers", async () => {
    
    
    
    const backArrow = $('//*[name()="path" and contains(@d,"M23.47 8.2")]');
    await backArrow.click();
    await driver.pause(5000);
    const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
    await exploreOptions.click();
    await driver.pause(3000);
    const intiate = await $('//*[@id="initiateOfflineProcess"]');
    await intiate.click();
    await driver.pause(3000);
    const fullName = $('//*[@autocomplete="fullName"]');
    await fullName.click();
    await homepage.setValueToDontHaveAadhaarFullName(validTestData.exploreOtherOptionsField.validFullName);
    const mailId = await $('//*[@name="email"]');
    await mailId.click();
    await homepage.setValueToDontHaveAadhaarEmailId(validTestData.exploreOtherOptionsField.validEmailId);
    const pan = $('//*[@autocomplete="pan"]');
    await pan.click();
    await homepage.setValueToDontHaveAadhaarPan(validTestData.exploreOtherOptionsField.validPan);
    const mobileNo = await $('//*[@autocomplete="mobileNumber"]');
    await mobileNo.click();
    await homepage.setValueToDontHaveAadhaarMobileNo(validTestData.exploreOtherOptionsField.validMobileNo);
    await driver.pause(4000)
    const sendBtn = await $("button[type='  ']");
    await sendBtn.click();
    await driver.pause(20000);
    const rightArrow = await $('//span[@aria-label="ArrowRight"]');
    await rightArrow.click();
    await driver.pause(15000);
    await expect(await homepage.thankYouForYourDetailsText()).to.be.eql(labelConstants.exploreOtherOptionsField.thankYouText);

    

    //*[@type="password"]


}); 
    
   
   


    
});