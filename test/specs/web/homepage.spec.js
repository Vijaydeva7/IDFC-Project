const homepage = require("../../pages/web/homepage.page");
const basicDetails = require("../../specs/web/basicDetails.spec");

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
//const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

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
        await basicDetails.basicDetails();
    });

    it("Validate whether +91 appended on mobile number after entering it", async () => {
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.toTestPlus91);
        await expect(await homepage.isPlusNintyOneTextDispalyed()).to.be.eql(true);
    });

    it("Validate whether 'Mobile number registered with Aadhaar' hint text displayed for the mobile number field", async () => {
        await driver.refresh();
        await driver.pause(3000);
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
        // await expect(mobileNum.length).to.be.eql(10);
    });

    it("Validate whether User able to enter the blank space or not", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileBlankNum(invalidTestData.mobileNumber.blankSpace);
        let mobileBlankNum = await homepage.getMobileBlankSpace();
        await driver.pause(5000);
        await expect(mobileBlankNum).to.be.eql("Please enter a valid 10-digit mobile number");
    });

    it("Validate whether User  able to enter the Spl char&Alpha in mobile number field", async () => {
        await driver.pause(3000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileSplCharAndAlpha(invalidTestData.mobileNumber.secialCharAlph);

        await expect(await homepage.getMobileSplCharAndAlpha()).to.be.not.eql(invalidTestData.mobileNumber.secialCharAlph);
        await expect(await homepage.isPlzEnterMobileTxtDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnterMobNum);
        
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
        await expect(await homepage.getRegAadharText()).to.be.eql(labelConstants.mobileNumRegWithAadharText);

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
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

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
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

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
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

    });

    it("Validate whether Field should give the hint text as Mobile number registered with Aadhaar.", async () => {
        await driver.pause(3000);
        await driver.refresh();
        let withoutValue = await homepage.getWithoutAnyValue();
        await expect(await homepage.getWithoutAnyValue()).to.be.eql("");
        await driver.pause(3000);
        await expect(await homepage.isRegMobileNumWithAadharTxtDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.mobileNumHintText);

            
    });

    it("Validate whether Field should not accept field start with zero to five numbers.", async () => {
        
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await driver.pause(3000);
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.zero);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);


        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.one);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);

        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }       
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.two);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);


        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.three);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);


        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.four);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);


        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
        
        }
        await homepage.setValueToMobileNum(invalidTestData.mobileNumber.five);
        await driver.pause(3000);
        await expect(await homepage.isZeroAsIntialDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnter10DigMobNum);


            

    });

        
        
    it("Validate whether Field should not accept 10 blank spaces ", async () => {
        await driver.pause(3000);
        await driver.refresh();
        await driver.pause(5000);
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);

        }
        await homepage.mobileNumberField()
        await driver.pause(3000);
        await driver.keys(["Spacebar"]);
        await driver.pause(3000);
        await expect(await homepage.istenPlzEnterMobNumDispalyed()).to.be.eql(true);
        await expect(await homepage.getPlzEnterText()).to.be.eql(labelConstants.plzEnterMobNum);

    });

    it("Validate whether dont have text is displayed or not ", async () => {
            await driver.refresh();
            await driver.pause(5000);
            await expect(await homepage.isDontHaveAadharTextDisplayed()).to.be.eql(true);
        
    });

    it("Validate whether By Proceeding text should be displayed ", async () => {
        
        await driver.refresh();
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(3000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await driver.pause(3000);


        // const resumeVerify = await $("//button[@class='Buttonstyle__Wrapper-sc-bbdsxl-0 bZQfzg']");
        // await resumeVerify.click();


        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);
        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(2000);
        await expect(await homepage.getByproceedText()).to.be.eql(labelConstants.byProceedingText);

        
    });


    it("Validate whether Please enter correct Otp text displayed or not ", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(3000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);
        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();

        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(20000);
        await homepage.verifyOtpBtn();
        await driver.pause(10000);
        await expect(await homepage.isOtpErrorMsgDisplayed()).to.be.eql(true);

    });

    it("Validate whether timer should be Presented above the resend Otp Button", async () => {
        await driver.pause(3000);
        await expect(await homepage.isTimerDisplayed()).to.be.eql(true);

    });
    it("Validate whether pan and aadhar do not match", async () => {
        await driver.pause(20000);
        await driver.refresh();
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(5000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000)
        await homepage.setValueToEmail(validTestData.emailId2.email);
        await homepage.panNumberField();
        await homepage.setValueToPan(invalidTestData.mobileNumber.inValidPan);
        
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(15000);
        await homepage.verifyOtpBtn();
        await driver.pause(50000);
        await expect(await homepage.isPanAadharDoNotMatchTextDisplayed()).to.be.eql(true);

    });

    it("Validate whether User should be able to proceed with professional details if Aadhaar address is serviceable", async () => {
        await driver.pause(3000);
        await basicDetails.basicDetails();//Optimized Code
        await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
        await driver.pause(2000);
        await homepage.comapanyNameField();
        await driver.pause(3000);
       // await homepage.mothersNameField();

        

    });

    it("Validate whether Company name name should be automatically added in the Company name list when user enters the Company name", async () => {
        await driver.pause(3000);
        await homepage.comapanyNameField();
        await driver.pause(2000);
        await homepage.setValueToCompanyName(validTestData.companyName);
        await driver.pause(3000);
    // await homepage.mothersNameField();
        await driver.pause(2000);
        await expect(await homepage.getCompanyName()).to.be.eql(validTestData.companyName);
    });
    it("Validate whether occupation field prefilled with salaried", async () => {
        await driver.pause(2000);
        await expect(await homepage.getSalariedText()).to.be.eql(labelConstants.salariedPlaceHolder);    
    });

    it("Validate whether source income field prefilled with salary", async () => {
        await driver.pause(2000);
        await expect(await homepage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder); 
       
   
    });

    it("Validate whether Hint text should be as Mothers fullname'", async () => {
        await driver.pause(2000);
        await expect(await homepage.getMothersName()).to.be.eql(labelConstants.mothersFullName);    
    });

    it("Validate whether Rupee Logo icon displayed or not", async () => {
        await driver.pause(2000);
        await homepage.grossIncomeField();
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income);

        await expect(await homepage.isRupeeLogoDisplayed()).to.be.eql(true);
            
    });

    it("Validate whether should gross income error message", async () => {
        await driver.pause(3000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(2000);
        await driver.pause(40000);

        // const resumeVerify = await $("//button[@class='Buttonstyle__Wrapper-sc-bbdsxl-0 bZQfzg']");
        // await resumeVerify.click();
        // await driver.pause(20000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);
        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(20000);
        await homepage.verifyOtpBtn();
        await driver.pause(50000);
        await homepage.grossIncomeField();
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income5);
        await driver.pause(2000);
        await expect(await homepage.getGrossIncomeErrorText()).to.be.eql(labelConstants.grossIncomeErrorText);

            
        });

    it("Validate whether User should be present Provide your professional & personal details", async () => {
        await driver.pause(2000);
        await driver.refresh();
        await driver.pause(4000);
        //await expect(await homepage.isProfessionalDetailsTextDisplayed()).to.be.eql(true);
        //await expect(await homepage.getProfessionalDetailsText()).to.be.eql(labelConstants.professionalDetailsText);
        await expect(await homepage.getProfessionalDetailsText2()).to.be.eql(labelConstants.professionalDetailsText2); 
    

    });

    it("Validate whether User should able to see Explore other options", async () => {
        await driver.pause(2000);
        await driver.refresh();
        await homepage.exploreOptionsButton();
        await driver.pause(10000);
        await expect(await homepage.isExploreOtherOptionsDisplayed()).to.be.eql(true);

    });

    it("Validate whether User should be redirect to the UIDAI site", async () => {
        await driver.pause(2000);
        await homepage.visitUid();
        await driver.pause(20000);
        await expect(await homepage.isUidPortalDisplayed()).to.be.eql(true);

    });

    it("Validate whether User should be redirect to the  Don't  have Aadhaar page.", async () => {
        await driver.pause(2000);
        await driver.refresh();
        await homepage.exploreOptionsButton();
        await driver.pause(10000);
        const intiate = await $('//*[@id="initiateOfflineProcess"]');
        await intiate.click();
        await driver.pause(10000);
        // await expect(await homepage.isIdfcLogoDontHaveAadharDisplayed()).to.be.eql(true);
        await expect(await homepage.isDontHavePageText()).to.be.eql(labelConstants.dontHaveAadharPage);
        await expect(await homepage.isDontHavePageText2()).to.be.eql(labelConstants.dontHaveAadharPage2);


    });

    it("Validate whether Occupation text should displayed ", async () => {
        const back = await $("//a[@role='button']//*[name()='svg']");
        await back.click();
        await driver.switchWindow("IDFC FIRST Bank")
        await driver.pause(2000);
        await expect(await homepage.getOccupationText()).to.be.eql(labelConstants.occupationText); 
                
    });

    it("Validate whether Source of income text should displayed", async () => {
        await driver.pause(2000);
        await expect(await homepage.getSourceOfIncome()).to.be.eql(labelConstants.SourceOfIncome);
            
    });

    it("Validate whether gross income text should displayed ", async () => {
        await driver.pause(2000);
        await expect(await homepage.getGrossIncomeText()).to.be.eql(labelConstants.grossIncomeText);
            
    });


    it("Validate whether company hint text displayed or not", async () => {
        await driver.pause(2000);
        await expect(await homepage.isCompanyNameHintTextDisplayed()).to.be.eql(labelConstants.companyNameHintText);

    });

    it("Validate Max 5 attempts should be given for triggering OTP request.", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(3000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(45000);
        
        for (var resend = 1; resend <=5; resend++) {

            const resend = await $('//button[@id="resendBtn"]')
            await resend.click(); 
            await driver.pause(45000);

        }
        


    });
    it("Validate user enter 5 times incorrect OTP then user should be able to see error message", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(1000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(45000);
        await homepage.resendButton();
        await driver.pause(46000);
        await homepage.resendButton();
        await driver.pause(46000);
        await homepage.resendButton();
        await driver.pause(46000);
        await homepage.resendButton();
        await driver.pause(46000);
        await homepage.resendButton();
        await driver.pause(46000);

    });

    it("Validate whether  OTP button should be enabled before clicking on it if Aadhaar/Virtual Id field is entered correct.", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(1000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await expect(await homepage.otpButtonEnable()).to.be.eql(true);

    });

    it("Validate User Verify the required values should be displayed in your Occupation drop down.", async () => {
            await driver.refresh();
            await basicDetails.basicDetails(); //Optimized Code
            await homepage.occDropDown();
            await driver.pause(3000);
            await expect(await homepage.salaried()).to.be.eql(labelConstants.occupationDropDownValues.salaried);
            await expect(await homepage.soleProprietorship()).to.be.eql(labelConstants.occupationDropDownValues.soleProprietorship);
            await expect(await homepage.partnershipCompany()).to.be.eql(labelConstants.occupationDropDownValues.partnershipCompany);
            await expect(await homepage.selfEmployedProffesional()).to.be.eql(labelConstants.occupationDropDownValues.selfEmployedProffesional);
            await expect(await homepage.homeMaker()).to.be.eql(labelConstants.occupationDropDownValues.homeMaker);
            await expect(await homepage.student()).to.be.eql(labelConstants.occupationDropDownValues.student);
            await expect(await homepage.farmer()).to.be.eql(labelConstants.occupationDropDownValues.farmer);
            await expect(await homepage.retired()).to.be.eql(labelConstants.occupationDropDownValues.retired);

        
            
    });

    it("Validate whether user able to see the search Icon in company name field", async () => {
            await expect(await homepage.isSearchIconDisplayed()).to.be.eql(true);
    });

    it("Validate User Verify the required values should be displayed in your source of income drop down.", async () => {
            await driver.refresh();
            await basicDetails.basicDetails(); //Optimized Code
            await homepage.sourceOfIncomeDD();
            await driver.pause(3000);
            await expect(await homepage.salary()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.salary);
            await expect(await homepage.familyWealth()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.familyWealth);
            await expect(await homepage.savings()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.savings);
            
            await homepage.occDropDown();
            await driver.pause(5000);
            await homepage.SelfEmployedProfessional();
            await homepage.sourceOfIncomeDD();
            await driver.pause(4000);
            await expect(await homepage.professionalFee()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.professionalFee);
            await expect(await homepage.business()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.business);
            await expect(await homepage.investments()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.investments);
            await expect(await homepage.professionalFee()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.professionalFee);
        

        
            
    });
    
    it("Validate Timer should get start from 45 secs.", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(2000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(50000);
        await homepage.resendButton();
        await driver.pause(3000)
    });

    it("Validate Verify that when user entered invalid Aadhaar number user should be able to see error message", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(1000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(invalidTestData.invalidAadhaar.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(5000)
        await expect(await homepage.invalidAadharErrorText()).to.be.eql(labelConstants.invalidAadhaarErrorText);

        
    });
    
    it("Validate Verify if  mobile number is changed before OTP validation, other fields are reset or not.", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo2);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(1000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email2);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan2);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar2);
        await mobileNumber.click();
        await driver.pause(2000)
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
                
        }
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(2000)

        await expect(await homepage.getEmailIdResetField()).to.be.eql(labelConstants.resetFieldEmail);

    
    
    });

    it("Validate User should get authenticated successfull.", async () => {
        await driver.refresh();
        await basicDetails.basicDetails(); //Optimized Code
        await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);

        
    });


    it("Validate whether After typing 4 alphabets Company name list should display according to the text entered.", async () => {
        await driver.pause(2000);
        await homepage.comapanyNameField();
        await driver.pause(3000);
        await homepage.setValueToCompanyName(validTestData.companyName2);
        await driver.pause(5000);
        await expect(await homepage.getCompanyNamesList()).to.be.eql(true);    
        //await expect(await homepage.getCompanyNamesMatch()).to.be.eql(labelConstants.companyNameMatch);    

    });

    it("Validate whether User should be able to see the Company name list properly without any dummy data.", async () => {
        
        await expect(await homepage.compareCompanyListData()).to.be.eql(validTestData.companyName2);
        await expect(await homepage.compareCompanyListData2()).to.be.eql(validTestData.companyName2);
        await expect(await homepage.compareCompanyListData3()).to.be.eql(validTestData.companyName2);

    });

    it("Validate whether Mother's name field should not accept numeric numbers", async () => {
        await driver.pause(2000);
        await homepage.mothersNameField();
        await driver.pause(3000);
        await homepage.setValueToMothersName(invalidTestData.mothersName.numerics);
        await driver.pause(5000);
        await expect(await homepage.getMothersErrorText()).to.be.eql(labelConstants.numericMothersNameErrorText);    
    });

    it("Validate whether Mother name field should not take more than 40 char", async () => {
        for (var index = 1; index <= 10; index++) {

            await driver.keys(['Backspace']);
                    
    }
        await driver.pause(2000);
        await homepage.mothersNameField();
        await homepage.setValueToMothersName(invalidTestData.mothersName.moreThan40Char);
        await expect(await homepage.getMothersName()).to.be.not.eql(invalidTestData.mothersName.moreThan40Char);    
    });

    it("Validate whether Mother's name field should accept firstname lastname.", async () => { 
        
        for (var index = 1; index <= 40; index++) {

            await driver.keys(['Backspace']);
                    
        }
        await homepage.setValueToMothersName(validTestData.mothersNameField);

        await expect(await homepage.getMotherName()).to.be.eql(validTestData.mothersNameField);
    });



    it("Validate whether Desclaimer word is displayed or not", async () => {
        await driver.pause(2000);
        await expect(await homepage.disclaimerText()).to.be.eql(labelConstants.disclaimerText);    
    });





    it("Validate whether View Schedule of Charges should get display in red font", async () => {
        // const redElem = await $('//*[contains(text(),"View Schedule of Charges")]')
        // const color = await redElem.getColorOfTheText('rgb(157, 29, 39)')
        // await console.log("#######",color)
        // await expect(await color).to.be.eql(labelConstants.redText); 
        await expect(await homepage.viewScheduleRedirectOnlyText()).to.be.eql(labelConstants.viewScheduleText)
    });

    it("Validate whether I am not a politically exposed person.. text is displayed or not", async () => {
        await expect(await homepage.getIamNotPoliticalPersonText()).to.be.eql(labelConstants.iamNotPoliticalText);    
    });

    it("Validate whether I am an Indian citizen.. text is displayed or not", async () => {
        await expect(await homepage.getIamAnIndianCitizenText()).to.be.eql(labelConstants.IndianCitizenText);    
    });

    it("Validate whether select your product text is displayed or not", async () => {
        await expect(await homepage.selectProductText()).to.be.eql(labelConstants.selectProductText);    
    });

    it("Validate whether First Supreme image should be display", async () => {
        await expect(await homepage.supremeImageDisplayed()).to.be.eql(true); 
    });

    it("Validate whether First Prime image should be display", async () => { 
        await expect(await homepage.primeImageDisplayed()).to.be.eql(true);
    });

    it("Validate whether clicking Terms& conditions  user should redirect to T&C page.", async () => { 

        const termsAndCondition = await $('//*[text()="terms & conditions "]');
        await termsAndCondition.click();
        await driver.pause(3000);
        await expect(await homepage.termsAndCondition()).to.be.eql(labelConstants.termsAndConditionText);
    });

    it("Validate when user  landed the Landing page user should able to see the proceed button", async () => { 
        await expect(await homepage.proceedButtonDisplayed()).to.be.eql(true);
    });

    it("Validate when user click view schedule it redirect to another link", async () => { 
        
        await driver.refresh()
        await driver.pause(5000);
        await homepage.clickViewSchedule();
        await driver.pause(5000)
        await expect(await homepage.viewScheduleRedirectText()).to.be.eql(true);

    // await expect(await homepage.viewScheduleRedirectOpenBtn()).to.be.eql(true);
    });

    it("Validate whether clicking Terms& conditions 34 points should be present", async () => { 
        // await driver.refresh();
        const termsAndCondition = await $('//*[text()="terms & conditions "]');
        await termsAndCondition.click();
        await driver.pause(3000);
    // await console.log("#######", homepage.termsAndConditionPoints())
        await expect(await homepage.termsAndConditionPoints()).to.be.eql(true);
    });

    it("Validate whether user should not able to enter 0 in gross income field as intial", async () => { 
        await driver.pause(5000);
        // for (var index = 1; index <= 8; index++) {

        //     await driver.keys(['Backspace']);
                            
        // }
        // await driver.pause(5000);
        await homepage.setValueToGrossIncome(invalidTestData.grossIncome.zeroIntial);
        await driver.pause(5000);
        await expect(await homepage.getGrossIncome()).to.be.not.eql(invalidTestData.grossIncome.zeroIntial);

    });

    it("Validate whether user should not able to enter alphabets and special Char in gross income field", async () => { 
        await driver.pause(5000);
        for (var index = 1; index <= 4; index++) {

            await driver.keys(['Backspace']);
                            
        }
        await driver.pause(5000);

        await homepage.setValueToGrossIncome(invalidTestData.grossIncome.alphaAndChar);
        await expect(await homepage.getGrossIncome()).to.be.not.eql(invalidTestData.grossIncome.alphaAndChar);

    });

    it("Validate whether user should not able to enter decimal values in gross income field", async () => { 
        await driver.pause(5000);
        
        for (var index = 1; index <= 4; index++) {

            await driver.keys(['Backspace']);
                            
        }
        await driver.pause(5000);

        await homepage.setValueToGrossIncome(invalidTestData.grossIncome.decimal);
        await driver.pause(5000);

        await expect(await homepage.getGrossIncome()).to.be.not.eql(invalidTestData.grossIncome.decimal);

    });


    it("Validate whether Respective source of income should be by default selected when user selects specific occupation", async () => { 
        await driver.refresh();
        await basicDetails.basicDetails(); //Optimized Code
        await expect(await homepage.salaried()).to.be.eql(labelConstants.occupationDropDownValues.salaried);
        await expect(await homepage.salary()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.salary);
        await driver.pause(3000);
        await homepage.occDropDown();
        await driver.pause(2000)
        await homepage.sepDropDownValue();
        await driver.pause(3000);
        await expect(await homepage.selfEmployedProffesional()).to.be.eql(labelConstants.occupationDropDownValues.selfEmployedProffesional);
        await expect(await homepage.professionalFee()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.professionalFee);
        await driver.pause(5000);

    });

    it(" Validate whether User should not be able to add values manually in Occupation field.", async () => {
        await driver.refresh();
        await basicDetails.basicDetails(); //Optimized
        await homepage.occDropDown();
        await driver.pause(3000)
    // await driver.keys(['Enter']);
        await homepage.setValueToOccupation(invalidTestData.occupationValue);
        await expect(await homepage.getOccupationValue()).to.be.not.eql(invalidTestData.occupationValue);



    });

    it("Validate whether User should able to enter only numbers in gross annual income text box", async () => { 
        // for (var index = 1; index <= 5; index++) {

        //     await driver.keys(['Backspace']);
                            
        // }
        await driver.pause(5000);
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income);
        await driver.pause(3000);
        await expect(await homepage.getGrossIncome()).to.be.eql(validTestData.grossIncome.income);
        
        
        await driver.pause(5000);
        await homepage.setValueToGrossIncome(invalidTestData.grossIncome.alphaAndChar);
        await expect(await homepage.getGrossIncome()).to.be.not.eql(invalidTestData.grossIncome.alphaAndChar);


    });

    it("Validate User If user enters all the above fields correctly, Proceed to open account button should be enable and clickable.", async () => {
        await driver.refresh();
        await basicDetails.basicDetails();//Optimized Code
        await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
        await driver.pause(3000);
        await homepage.checkBoxField();
        await driver.pause(3000);
        await homepage.proceedToAadharBtn();
        await driver.pause(4000);
        await homepage.preferBranch();
        await driver.pause(2000);
        const branch = $('//*[text() ="WARANGAL BRANCH"]');
        await branch.click();
        await driver.pause(2000);

        await homepage.grossIncomeField();
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income3);
        await driver.pause(3000);
        await homepage.comapanyNameField();
        await driver.pause(2000);
        await homepage.setValueToCompanyName(validTestData.companyName);
        await driver.pause(2000);
        await homepage.mothersNameField();
        await driver.pause(2000);
        await homepage.setValueToMothersName(validTestData.mothersNameField);
        await driver.pause(2000);
        const proceedToOpen = $('//button[@form="formName"]');
        await proceedToOpen.click();
    });
    
    it("Validate whetherTo verify if Proceed to open account button is disable when user is landed on the page.", async () => { 
        await driver.refresh();
        await driver.pause(5000);
        await expect(await(homepage.isDisabledProceedToOpen())).to.be.eql(true)

    });

    it("Validate whetherUser should able to see the static footer design/menu's for all web pages.", async () => { 

    await expect(await(homepage.isFooterDisplayed())).to.be.eql(true)

    });

    it("Validate whether Informational text - I accept all the terms & conditions related to IDFC", async () => { 

    await expect(await(homepage.acceptTermsAndConditionTextDisplay())).to.be.eql(labelConstants.acceptTermsAndConditionText)

    });

    it("Validate whether User should able to  encrypt or decrypt their Aadhaar number by clicking on Eye icon.", async () => { 
        
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await expect(await(homepage.encryptedData())).to.be.eql(true)
        await homepage.eyeIcon();
        await expect(await(homepage.decryptedData())).to.be.eql(true)

        
    });

    it("Validate whetherUser should be able to click on Explore other option", async () => {
        await driver.pause(2000);
        await driver.refresh();
        await homepage.exploreOptionsButton();
        await driver.pause(10000);
        await expect(await homepage.isExploreOtherOptionsDisplayed()).to.be.eql(true);

    });

    it("Validate whetherUser PAN-Aadhaar name should match to proceed with account opening journey.", async () => {
        

        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(3000)
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan3);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(30000);
        await homepage.verifyOtpBtn();
        await driver.pause(30000)
        await expect(await homepage.panAadharMismatchCondition()).to.be.eql(labelConstants.hiThereText);
        await expect(await homepage.panAadharMismatchCondition2()).to.be.eql(labelConstants.panAadharMismatchCondition);

        
    });
        
    it("Validate whetherUser should be able to click on Explore other option", async () => {
            await driver.pause(2000);
            await driver.refresh();
            await homepage.exploreOptionsButton();
            await driver.pause(10000);
            await expect(await homepage.isExploreOtherOptionsDisplayed()).to.be.eql(true);
        
    });

    it("Validate whether Verify when user adds values between ₹1000 to ₹1,00,00,000  in Gross annual income field values should be accepted", async () => { 
        await driver.refresh();
        await basicDetails.basicDetails(); //Optimized Code
        await homepage.grossIncomeField();
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income);
        await driver.pause(2000);
        await expect(await homepage.getGrossIncome()).to.be.eql(validTestData.grossIncome.income);
        await driver.pause(3000);
        for (var index = 1; index <= 4; index++) {

            await driver.keys(['Backspace']);
                            
        }
        await driver.pause(5000);
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income2);
        await driver.pause(5000);
        await expect(await homepage.getGrossIncome()).to.be.eql(validTestData.grossIncome.income2);

    });

    it("Validate whether gross anual income field should not accept more than 1,00,00,00,000", async () => { 
        
        await homepage.grossIncomeField();
        for (var index = 1; index <= 8; index++) {

            await driver.keys(['Backspace']);
                            
        }
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income4);
        await driver.pause(5000);
        await expect(await homepage.getGrossIncomeError()).to.be.eql(labelConstants.grossAnualIncomeErrorText);

    });
        
    it("Validate Checkbox should be by default selected when user lands on personal details page using servicable data.", async () => {
            await driver.refresh();
            await basicDetails.basicDetails(); // Optimized Code
            await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
            await driver.pause(3000);
            const checkBox = $('//*[@for="checkbox_comm_address"]');
            await checkBox.click();
            await driver.pause(3000);
            const proceedToAadhar = $('//*[@id="proceedAadharAddressBtn"]');
            await proceedToAadhar.click();
            await driver.pause(4000);
            await homepage.preferBranch();
            await driver.pause(2000);
            const brach = $('//*[text() ="WARANGAL BRANCH"]');
            await brach.click();
            await driver.pause(2000);
            await homepage.grossIncomeField();
            await homepage.setValueToGrossIncome(validTestData.grossIncome.income3);
            await driver.pause(3000);
            await homepage.comapanyNameField();
            await driver.pause(2000);
            await homepage.setValueToCompanyName(validTestData.companyName);
            await driver.pause(2000);
            await homepage.mothersNameField();
            await driver.pause(2000);
            await homepage.setValueToMothersName(validTestData.mothersNameField);
            await driver.pause(2000);
            // const checkBoxVs = $('//*[@class="Checkboxstyle__Box-sc-ins62l-1 blcGGD"]');
            // await checkBoxVs.click();
            await expect(await homepage.viewScheduleCheckBox()).to.be.not.eql(true);
            // const proceedToOpen = $('//button[@id="proceedBtn"]');
            // await proceedToOpen.click();
            // await driver.pause(2000);
    });

    it("Validate if Pan-Aadhar name match user should be able to proceed with the proceed to open Account Button", async () => {
        await driver.refresh();
        await driver.pause(4000);
        await homepage.mobileNumberField()
        await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
        await driver.pause(5000);
        await homepage.emailIdField();
        await driver.pause(50000)
        // const resumeVerify = await $("//button[@class='Buttonstyle__Wrapper-sc-bbdsxl-0 bZQfzg']");
        // await resumeVerify.click();
        // await driver.pause(20000);
        await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
        await homepage.popUpCancel();
        await driver.pause(3000);
        await homepage.setValueToEmail(validTestData.emailId2.email);

        await homepage.panNumberField();
        await homepage.setValueToPan(validTestData.panNumber.pan);
        await homepage.aadhaarNumField();
        await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
        await driver.pause(10000);
        await homepage.getOtpButton();
        await driver.pause(30000);
        await homepage.verifyOtpBtn();
        await driver.pause(20000)
        await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
        await driver.pause(3000);
        await homepage.checkBoxComm();
        await driver.pause(3000);
        await homepage.proceedToAadharButton();
        await driver.pause(4000);
        await homepage.preferBranch();
        await driver.pause(2000);
        await homepage.brachValueWrgl();
        await driver.pause(2000);

        
        await homepage.grossIncomeField();
        await homepage.setValueToGrossIncome(validTestData.grossIncome.income3);
        await driver.pause(3000);
        await homepage.comapanyNameField();
        await driver.pause(2000);
        await homepage.setValueToCompanyName(validTestData.companyName);
        await driver.pause(2000);
        await homepage.mothersNameField();
        await driver.pause(2000);
        await homepage.setValueToMothersName(validTestData.mothersNameField);
        await driver.pause(2000);
        
        // const checkBoxVs = $('//*[@class="Checkboxstyle__Box-sc-ins62l-1 blcGGD"]');
        // await checkBoxVs.click();
       // await expect(await homepage.proceedToOpenAccountButton()).to.be.not.eql(true);
        // const proceedToOpen = $('//button[@id="proceedBtn"]');
         await proceedToOpen.click();
        // await driver.pause(2000);
});

it("To verify PAN-Aadhaar mismatch condition after all 2 attempts.",async () => {
    await driver.refresh();
    await driver.pause(4000);
    await homepage.mobileNumberField()
    await homepage.setValueToMobileNum(validTestData.mobileNumber2.mobileNo);
    await driver.pause(5000);
    await homepage.emailIdField();
    await driver.pause(50000)
    // const resumeVerify = await $("//button[@class='Buttonstyle__Wrapper-sc-bbdsxl-0 bZQfzg']");
    // await resumeVerify.click();
    // await driver.pause(20000);
    await expect(await homepage.isPopUpDisplayed()).to.be.eql(true);
    await homepage.popUpCancel();
    await driver.pause(3000);
    await homepage.setValueToEmail(validTestData.emailId2.email);

    await homepage.panNumberField();
    await homepage.setValueToPan(validTestData.panNumber.pan2);
    await homepage.aadhaarNumField();
    await homepage.setValueToAadhaar(validTestData.aadhaarNumber.aadhaar);
    await driver.pause(10000);
    await homepage.getOtpButton();
    await driver.pause(30000);
    await homepage.verifyOtpBtn();
    await driver.pause(20000)
   // await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
    // await driver.pause(3000);
    // const checkBox = $('//*[@for="checkbox_comm_address"]');
    // await checkBox.click();
    // await driver.pause(3000);
    // const proceedToAadhar = $('//*[@id="proceedAadharAddressBtn"]');
    // await proceedToAadhar.click();
    // await driver.pause(4000);
    // await homepage.preferBranch();
    // await driver.pause(2000);
    // const brach = $('//*[text() ="WARANGAL BRANCH"]');
    // await brach.click();
    // await driver.pause(2000);
    // await homepage.grossIncomeField();
    // await homepage.setValueToGrossIncome(validTestData.grossIncome.income3);
    // await driver.pause(3000);
    // await homepage.comapanyNameField();
    // await driver.pause(2000);
    // await homepage.setValueToCompanyName(validTestData.companyName);
    // await driver.pause(2000);
    // await homepage.mothersNameField();
    // await driver.pause(2000);
    // await homepage.setValueToMothersName(validTestData.mothersNameField);
    // await driver.pause(2000);
    // const checkBoxVs = $('//*[@class="Checkboxstyle__Box-sc-ins62l-1 blcGGD"]');
    // await checkBoxVs.click();
   // await expect(await homepage.proceedToOpenAccountButton()).to.be.not.eql(true); (if Required remove the comment )
    // const proceedToOpen = $('//button[@id="proceedBtn"]');
    // await proceedToOpen.click();
    // await driver.pause(2000);
})

it("To verify for occupation-Salaried,Sole Proprietorship and SEP, respective source of income is by default selected or not.",async () => {
   
    await driver.refresh();
    await basicDetails.basicDetails(); //Optimized Code
    await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
    await driver.pause(3000);
    await homepage.checkBoxComm();
    await driver.pause(3000);
    await homepage.proceedToAadharButton();
    await driver.pause(4000);
    await homepage.preferBranch();
    await driver.pause(2000);
    await homepage.brachValueWrgl();
    await driver.pause(2000);
    await expect(await homepage.getSalariedText()).to.be.eql(labelConstants.salariedPlaceHolder);    
    await expect(await homepage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder);
    await homepage.occDropDown();
    await homepage.sepDropDownValue();
    await driver.pause(3000);
    await expect(await homepage.selfEmployedProffesional2()).to.be.eql(labelConstants.occupationDropDownValues.selfEmployedProffesional);
    await expect(await homepage.professionalFee()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.professionalFee);
    await homepage.occDropDown();
    await homepage.solePropValue();
    await expect(await homepage.soleProp()).to.be.eql(labelConstants.occupationDropDownValues.soleProp);
    await expect(await homepage.businessValue()).to.be.eql(labelConstants.sourceOfIncomeDropDownValues.business);
    await driver.pause(3000);




})

it("To verify the 'Company name' field is added or not when occupation = 'Salaried' is selected.",async () => {

    await driver.refresh();
    await driver.pause(4000);
    await basicDetails.basicDetails(); // Optimized File
    await expect(await homepage.userAuthenticatedSuccessful()).to.be.eql(labelConstants.myAddressCommunicaionText);
    await driver.pause(3000);
    await homepage.checkBoxComm();
    await driver.pause(3000);
    await homepage.proceedToAadharButton();
    await driver.pause(4000);
    await homepage.preferBranch();
    await driver.pause(2000);
    await homepage.brachValueWrgl();
    await driver.pause(2000);
    await expect(await homepage.getSalariedText()).to.be.eql(labelConstants.salariedPlaceHolder);    
    await expect(await homepage.getSalaryText()).to.be.eql(labelConstants.salaryPlaceHolder);
    await homepage.comapanyNameField();
    await driver.pause(4000);
     
})






});




