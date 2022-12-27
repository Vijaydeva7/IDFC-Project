const homepage = require("../../pages/web/homepage.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const { getMobileNumber } = require("../../pages/web/homepage.page");

describe("Homepage Validation : ", () => {
        it("Validate whether idfc logo is present on screen", async () => {
            await driver.url("/apply/savings");
            await driver.maximizeWindow();

            // await driver.pause(10000);
            await homepage.waitUntilHomepageLoad();
            await driver.pause(2000);
            await expect(await homepage.isIdfcLogoDisplayed()).to.be.eql(true);
        });
        it("Validate whether term's and condition hint text is present on screen", async () => {
            await driver.pause(2000);
            await expect(await homepage.isTermsAndCondHintTextIsDisplayed()).to.be.eql(true);
        });

//         it("Validate whether +91 appended on mobile number after entering it", async () => {
//             await homepage.setValueToMobileNum(invalidTestData.mobileNumber.toTestPlus91);
//             await expect(await homepage.isPlusNintyOneTextDispalyed()).to.be.eql(true);
//         });

//         it("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
//         await expect(await homepage.getMobileNumberHintText()).to.be.eql(labelConstants.mobileNumHintText);
//         });




//         it("Validate whether mobile number field accepts only numbers", async () => {
//             await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingAlphabets))).to.be.eql("");

//             await expect(await homepage.getMobileNumber(await homepage.setValueToMobileNum(invalidTestData.mobileNumber.containingSplChars))).to.be.eql("");
//         });
//         it("Validate whether User  able to enter only 10 digits in the mobile number field", async () => {
//             await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lengthMoreThan10Digits);
//             await driver.pause(7000);
//             let mobileNum = await homepage.getMobileNumber();

//             await console.log("############", mobileNum);

//             // await expect(mobileNum.length).to.be.eql(10);
//         });


//         it("Validate whether User  able to enter the blank space", async () => {
//             await driver.pause(3000);
//             for (var index = 1; index <= 10; index++) {

//                 await driver.keys(['Backspace']);

//             }
//             await homepage.setValueToMobileBlankNum(invalidTestData.mobileNumber.blankSpace);
//             let mobileBlankNum = await homepage.getMobileBlankSpace();
//             console.log("######",mobileBlankNum);
//             await driver.pause(5000);
//             await expect(mobileBlankNum).to.be.eql("Please enter a valid 10-digit mobile number");
//         });
    
//         it("Validate whether User  able to enter the Spl char&Alpha in mobile number field", async () => {
//             await driver.pause(3000);
//             for (var index = 1; index <= 10; index++) {

//                 await driver.keys(['Backspace']);

//             }
//             await homepage.setValueToMobileSplCharAndAlpha(invalidTestData.mobileNumber.secialCharAlph);

//             await expect(await homepage.getMobileSplCharAndAlpha()).to.be.not.eql(invalidTestData.mobileNumber.secialCharAlph);
//             await expect(await homepage.isPlzEnterMobileTxtDispalyed()).to.be.eql(true);
//             await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnterMobNum);
            
//         });
    
//         it("Validate whether User should be able to enter only 10 digits in the mobile number field.", async () => {
//             await driver.pause(3000);
//             for (var index = 1; index <= 10; index++) {

//                 await driver.keys(['Backspace']);

//             }
//             await homepage.setValueToOnly10DigMobileNum(invalidTestData.mobileNumber.only10DigMobileNum);
//             await expect(await homepage.getOnly10DigMobileNum()).to.be.eql("9701133446");
//             await driver.pause(3000);
//             await expect(await homepage.isRegAadharMobileNumTxtDispalyed()).to.be.eql(true);
//             await expect(await homepage.getRegAadharText()).to.be.eql(labelConstants.mobileNumRegWithAadharText);

//         });
    
//         it("Validate whether User should be enter only 10 zeros in the mobile number field.", async () => {
//             await driver.pause(3000);
//             for (var index = 1; index <= 10; index++) {

//                 await driver.keys(['Backspace']);

//             }
//             await homepage.setValueToMobileNum(invalidTestData.mobileNumber.tenZerosEnter);
//             await expect(await homepage.getTenZerosMobileNum()).to.be.eql("0000000000");
//             await driver.pause(3000);
//             await expect(await homepage.isTenZerosMobileNumTxtDispalyed()).to.be.eql(true);
//             await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

//         });
    
    

//     it("Validate whether Field should not accept numbers less than 10 digit. ", async () => {
//         await driver.pause(3000);
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);

//         }
//             await homepage.setValueToMobileNum(invalidTestData.mobileNumber.lessThanTenNumbers);
//             await expect(await homepage.getLessThanTenNum()).to.be.eql("876544");
//             await driver.pause(3000);
//             await expect(await homepage.isLessThanTenNumDispalyed()).to.be.eql(true);
//             await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

//     });
    
//     it("Validate whether Field should not accept Zero as intial ", async () => {
//         await driver.pause(3000);
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);

//         }
//         await driver.pause(3000);
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.zeroAsIntial);
//         await expect(await homepage.getZeroAsIntial()).to.be.eql("0342673653");
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

// });
// it("Validate whether Field should give the hint text as Mobile number registered with Aadhaar.", async () => {
//         await driver.pause(3000);
//         await driver.refresh();
//         let withoutValue = await homepage.getWithoutAnyValue();
//         console.log("######", withoutValue);
//         await expect(await homepage.getWithoutAnyValue()).to.be.eql("");
//         await driver.pause(3000);
//         await expect(await homepage.isRegMobileNumWithAadharTxtDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.mobileNumHintText);

        
// });

// it("Validate whether Field should not accept field start with zero to five numbers.", async () => {
      
//     for (var index = 1; index <= 10; index++) {

//         await driver.keys(['Backspace']);

//     }
//     await driver.pause(3000);
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.zero);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

 
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);
    
//         }
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.one);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);
    
//         }       
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.two);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

 
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);
    
//         }
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.three);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

 
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);
    
//         }
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.four);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

 
//         for (var index = 1; index <= 10; index++) {

//             await driver.keys(['Backspace']);
    
//         }
//         await homepage.setValueToMobileNum(invalidTestData.mobileNumber.five);
//         await driver.pause(3000);
//         await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
//         await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

   
        

//         });

    
       
//         it("Validate whether Field should not accept 10 blank spaces ", async () => {
//             await driver.pause(3000);
//             await driver.refresh();
//             await driver.pause(5000);
//             for (var index = 1; index <= 10; index++) {
    
//                 await driver.keys(['Backspace']);
    
//             }
//             const mobileNumber = await $('#mobileNumber')
//             await mobileNumber.click()
//             await driver.pause(3000);
//             await driver.keys(["Spacebar"]);
//             await driver.pause(3000);
//             await expect(await homepage.istenPlzEnterMobNumDispalyed()).to.be.eql(true);
//             await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnterMobNum);

//     });

// it("Validate whether dont have text is displayed or not ", async () => {
//     await driver.refresh();
//     await driver.pause(5000);
//     await expect(await homepage.isDontHaveAadharTextDisplayed()).to.be.eql(true);
   
// });
// it("Validate whether By Proceeding text should be displayed ", async () => {
    
//     const mobileNumber = await $('#mobileNumber')
//     await mobileNumber.click();
//     await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
//     await driver.pause(5000);
//     const emailIdField = await $('//*[@id="emailId"]')
//     await emailIdField.click();
//     await driver.pause(1000)
//     await homepage.setValueToEmail(validTestData.emailId2.email);
//     await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
//     const cancel = await $('//*[@id="resumeModalCloseBtn"]');
//     await cancel.click();
//     await driver.pause(3000);
//     const panNumber = await $('//*[@id="panNumber"]')
//     await panNumber.click();
//     await homepage.setValueToPan(validTestData.panNumber.pan);
//     const aadhaarNum = await $('//*[@id="aadhaar"]')
//     await aadhaarNum.click();
//     await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
//     await driver.pause(10000);
//     const getOtp = await $('//*[@id="getOtpBtn"]')
//     await getOtp.click();

//     await driver.pause(20000);
//     await expect(await homepage.getByproceedText()).to.be.eql(labelConstants.byProceedingText);

  
 
   
// });


// it("Validate whether Please enter correct Otp text displayed or not ", async () => {
//     await driver.refresh();
//     await driver.pause(4000);
//     const mobileNumber = await $('#mobileNumber')
//     await mobileNumber.click();
//     await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
//     await driver.pause(5000);
//     const emailIdField = await $('//*[@id="emailId"]')
//     await emailIdField.click();
//     await driver.pause(1000)
//     await homepage.setValueToEmail(validTestData.emailId2.email);
//     await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
//     const cancel = await $('//*[@id="resumeModalCloseBtn"]');
//     await cancel.click();
//     await driver.pause(3000);
//     const panNumber = await $('//*[@id="panNumber"]')
//     await panNumber.click();
//     await homepage.setValueToPan(validTestData.panNumber.pan);
//     const aadhaarNum = await $('//*[@id="aadhaar"]')
//     await aadhaarNum.click();
//     await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
//     await driver.pause(10000);
//     const getOtp = await $('//*[@id="getOtpBtn"]')
//     await getOtp.click();
//     await driver.pause(20000);
//     const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]');
//     await verifyOtpBtn.click();
//     await driver.pause(10000);
//     await expect(await homepage.isOtpErrorMsgDisplayed()).to.be.eql(true);

// });

// it("Validate whether timer should be Presented above the resend Otp Button", async () => {
//     await driver.pause(3000);
//     await expect(await homepage.isTimerDisplayed()).to.be.eql(true);

// });
// it("Validate whether pan and aadhar do not match", async () => {
//     await driver.pause(20000);
//     await driver.refresh();
//     const mobileNumber = await $('#mobileNumber')
//     await mobileNumber.click();
//     await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
//     await driver.pause(5000);
//     const emailIdField = await $('//*[@id="emailId"]');
//     await emailIdField.click();
//     await homepage.setValueToEmail(validTestData.emailId2.email);
//     await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
//     const cancel = await $('//*[@id="resumeModalCloseBtn"]');
//     await cancel.click();
//     const panNumber = await $('//*[@id="panNumber"]')
//     await panNumber.click();
//     await homepage.setValueToPan(invalidTestData.mobileNumber.inValidPan);
//     const aadhaarNum = await $('//*[@id="aadhaar"]')
//     await aadhaarNum.click();
//     await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
//     await driver.pause(10000);
//     const getOtp = await $('//*[@id="getOtpBtn"]')
//     await getOtp.click();
//     await driver.pause(15000);
//     const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]')
//     await verifyOtpBtn.click();
//     await driver.pause(50000);
//     await expect(await homepage.isPanAadharDoNotMatchTextDisplayed()).to.be.eql(true);

// });
// it(" Validate byproceeding text should be present or not ", async () => {
//         const mobileNumber = await $('#mobileNumber');
//         await mobileNumber.click();
//         await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
//         await driver.pause(5000);
//         const emailIdField = await $('//*[@id="emailId"]');
//         await emailIdField.click();
//         await driver.pause(1000);
//         await homepage.setValueToEmail(validTestData.emailId2.email);
//         await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
//         const cancel = await $('//*[@id="resumeModalCloseBtn"]');
//         await cancel.click();
//         await driver.pause(3000);
//         const panNumber = await $('//*[@id="panNumber"]');
//         await panNumber.click();
//         await homepage.setValueToPan(validTestData.panNumber.pan);
//         const aadhaarNum = await $('//*[@id="aadhaar"]');
//         await aadhaarNum.click();
//         await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
//         await driver.pause(10000);
//         const getOtp = await $('//*[@id="getOtpBtn"]');
//         await getOtp.click();

//         await driver.pause(20000);
//         await expect(await homepage.getByproceedText()).to.be.eql(labelConstants.byProceedingText);

// });
// it("Validate whether User should be able to proceed with professional details if Aadhaar address is serviceable", async () => {
//     await driver.pause(3000);
//     await driver.refresh();
//     const mobileNumber = await $('#mobileNumber')
//     await mobileNumber.click();
//     await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
//     await driver.pause(5000);
//     const emailIdField = await $('//*[@id="emailId"]');
//     await emailIdField.click();
//     await driver.pause(2000);
//     await homepage.setValueToEmail(validTestData.emailId2.email);
//     await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
//     const cancel = await $('//*[@id="resumeModalCloseBtn"]');
//     await cancel.click();
//     const panNumber = await $('//*[@id="panNumber"]')
//     await panNumber.click();
//     await homepage.setValueToPan(validTestData.panNumber.pan);
//     const aadhaarNum = await $('//*[@id="aadhaar"]')
//     await aadhaarNum.click();
//     await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
//     await driver.pause(10000);
//     const getOtp = await $('//*[@id="getOtpBtn"]')
//     await getOtp.click();
//     await driver.pause(20000);
//     const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]');
//     await verifyOtpBtn.click();
//     await driver.pause(50000);
    
    //await expect(await homepage.isReviewAddCom()).to.be.eql(true);
   // await expect(await homepage.getReviewAddComText()).to.be.eql(true);
    // await expect(await homepage.getReviewAddComText()).to.be.eql(labelConstants.reviewAddComText);
    // await driver.pause(2000);
    // await expect(await homepage.isCheckBoxPopUpDisplayed()).to.be.eql(true);
    // const checkBox = await $('//*[@id="checkbox_comm_address"]');
    // await checkBox.click();
    // await driver.pause(5000);
    // await expect(await homepage.getCheckBoxPopUpText()).to.be.eql(labelConstants.checkBoxPopUP);
    // await driver.pause(5000);
    // const proceedWithAadhar = await $('#proceedAadharAddressBtn');
    // await proceedWithAadhar.click();
    // await driver.pause(3000);

//});
it("Validate whether occupation field prefilled with salaried", async () => {
    await driver.pause(2000);
    await console.log("##########", homepage.getSalariedText())
    await expect(await homepage.getSalariedText()).to.be.eql(labelConstants.salariedPlaceHolder);    
});
it("Validate whether source income field prefilled with salary", async () => {
    await driver.pause(2000);
    await expect(await homepage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder);    
});
// it("Validate whether should be as Mothers fullname'", async () => {
//     await driver.pause(2000);
//     await expect(await homepage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder);    
// });

it("Validate whether should gross income error message", async () => {
    await driver.pause(3000);
    
    const mobileNumber = await $('#mobileNumber')
    await mobileNumber.click();
    await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
    await driver.pause(5000);
    const emailIdField = await $('//*[@id="emailId"]');
    await emailIdField.click();
    await driver.pause(2000);
    await homepage.setValueToEmail(validTestData.emailId2.email);
    await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
    const cancel = await $('//*[@id="resumeModalCloseBtn"]');
    await cancel.click();
    const panNumber = await $('//*[@id="panNumber"]')
    await panNumber.click();
    await homepage.setValueToPan(validTestData.panNumber.pan);
    const aadhaarNum = await $('//*[@id="aadhaar"]')
    await aadhaarNum.click();
    await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
    await driver.pause(10000);
    const getOtp = await $('//*[@id="getOtpBtn"]')
    await getOtp.click();
    await driver.pause(20000);
    const verifyOtpBtn = await $('//*[@id="verifyAadharBtn"]');
    await verifyOtpBtn.click();
    await driver.pause(50000);
    const grossIncome = $('//input[@id="grossAnualIncome"]');
    await grossIncome.click();
    await homepage.setValueToGrossIncome(validTestData.grossIncome.income);
    await driver.pause(2000);
    await expect(homepage.getGrossIncomeErrorText()).to.be.eql(true);

        
    });

// it("Validate whether User should be present Provide your professional & personal details", async () => {
//         await driver.pause(2000);
//         await driver.refresh();
//         await driver.pause(4000);
//         //await expect(await homepage.isProfessionalDetailsTextDisplayed()).to.be.eql(true);
//         await console.log("#########",homepage.getProfessionalDetailsText());
//         await expect(await homepage.getProfessionalDetailsText()).to.be.eql(labelConstants.professionalDetailsText);
//         await expect(await homepage.getProfessionalDetailsText2()).to.be.eql(labelConstants.professionalDetailsText2); 
 

// });
// it("Validate whether User should able to see Explore other options", async () => {
//     await driver.pause(2000);
//     await driver.refresh();
//     const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
//     await exploreOptions.click();
//     await driver.pause(10000);
//     await expect(await homepage.isExploreOtherOptionsDisplayed()).to.be.eql(true);

// });
// it("Validate whether User should be redirect to the UIDAI site", async () => {
//     await driver.pause(2000);
//     const visitUid = await $('//*[@id="visitUid"]');
//     await visitUid.click();
//     await driver.pause(20000);
//     await expect(await homepage.isUidPortalDisplayed()).to.be.eql(true);

// });
// it("Validate whether User should be redirect to the  Don't  have Aadhaar page.", async () => {
//     await driver.pause(2000);
//     await driver.refresh();
//     const exploreOptions = await $('//button[@id="exploreOtherOptionBtn"]');
//     await exploreOptions.click();
//     await driver.pause(10000);
//     const intiate = await $('//*[@id="initiateOfflineProcess"]');
//     await intiate.click();
//     await driver.pause(10000);
//     // await expect(await homepage.isIdfcLogoDontHaveAadharDisplayed()).to.be.eql(true);
//     await expect(await homepage.isDontHavePageText()).to.be.eql(labelConstants.dontHaveAadharPage);
//     await expect(await homepage.isDontHavePageText2()).to.be.eql(labelConstants.dontHaveAadharPage);


// });

// it("Validate whether Occupation text should displayed ", async () => {
//     const back = await $('//body/div[@id="app"]/section[1]/div[2]/div[1]/div[1]/a[1]/*[1]');
//     await back.click();
//     await driver.pause(2000);
//     await expect(await homepage.getOccupationText()).to.be.eql(labelConstants.occupationText); 
            
//     });
// it("Validate whether Source of income text should displayed", async () => {
//     await driver.pause(2000);
//     await expect(await homepage.getSourceOfIncome()).to.be.eql(labelConstants.SourceOfIncome);
        
// });
// it("Validate whether gross income text should displayed ", async () => {
//     await driver.pause(2000);
//     await expect(await homepage.getGrossIncomeText()).to.be.eql(labelConstants.grossIncomeText);
        
// });
// it("Validate whether Rupee Logo icon displayed or not", async () => {
//     await driver.pause(2000);
//     const grossIncome = await $('//input[@id="grossAnualIncome"]');
//     await grossIncome.onclick();
//     await homepage.setValueToGrossIncome(validTestData.grossIncome.income);

//     await expect(await homepage.isRupeeLogoDisplayed()).to.be.eql(true);
        
// });

// it("Validate whether Rupee Logo icon displayed or not", async () => {
//         await driver.pause(2000);
//         const grossIncome = await $('//input[@id="grossAnualIncome"]');
//         await grossIncome.onclick();
//         await homepage.setValueToGrossIncome(validTestData.grossIncome.income);

//         await expect(await homepage.isRupeeLogoDisplayed()).to.be.eql(true);

//     });

 });
