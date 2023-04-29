class Homepage {
    constructor() {
        this.idfcLogo = '//*[@src="/LogoFull~640834.svg"]';
        this.basicDetailHeading = "//*[text()='Enter details to start your savings journey now!']";
        this.mobileNumber = "#mobileNumber";
        this.mobileNumber2 = '//*[@for="mobileNumber"]';
        this.termsAndCondHintText = "//button[contains(text(),'Click here')]";
        this.plusNintyOneText = "//p[text()='+91']";
        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.email = "#emailId";
        this.errorTextForEmailId = "//label[text() = 'Please enter a valid email address']";
        this.emailIdHintText = "//label[text()='Email address']";
        this.adharNumber = '#aadhaar';
        this.adharMaskIcon = '//*[@id="formName"]/div[2]/div[2]/div/div/div/div/div';
        this.placeholderforAdhartext = "//label[@for='aadhaar']";
        this.hinttextAdhar = "//label[contains(text(),'12-digit Aadhaar number or 16-digit Virtual ID')]";
        this.cancelButtonemailpopup = "//div[contains(text(),'Cancel')]";
        this.enterEmailAddress = "//input[@id='emailId']";
        this.panId = "//input[@id='panNumber']";
        this.getOTPButton = "//button[@id='getOtpBtn']";
        this.errorAdharhinttext = "//label[contains(text(),'Please enter a valid 12-digit Aadhaar number or 16')]";
        this.otpOnMobile = "//input[@id='otp']";
        this.verifyAdharbutton = "//button[@id='verifyAadharBtn']";


        this.mobileNumberHintText = '//label[@for="mobileNumber"]';
        this.mobileBlankSpace = '//label[@for="mobileNumber"]';
        this.mobileSplCharAlpha2 = '//*[@id="mobileNumber"]';
        this.mobileSplCharAndAlpha = '//label[@for="mobileNumber"]';
        this.tenDigMobileNum = '//label[@for="mobileNumber"]';
        this.tenDigMobileNum2 = '//*[@id="mobileNumber"]';
        this.tenZeros = '//label[@for="mobileNumber"]';
        this.withoutAnyValue = '//label[@for="mobileNumber"]';
        this.tenBlankSpaces = '//label[@for="mobileNumber"]';



        this.popUp = '//div[@title="Welcome back!"]';
        this.aadhaarField = '//*[@id="aadhaar"]';
        this.otpError = '//label[@for="resume_app_number_input_otp"]';
        this.emailId = '(//input[@type="text"])[2]';
        this.panNumber = '//*[@id="panNumber"]';
        //this.aadharNumber = '//*[@id="aadhaar"]'; 
        this.aadharNumber = '//*[@id="aadhaar"]'
        this.byProceedText = '//p[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 hQVrYt"]'; 
        this.dontHaveAadhar = '//*[@id="app"]/div[1]/div/div/div[2]/div[1]/div/div[1]/p[2]';
        this.timer = '//p[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-cbeQSR faRvJV"]';
        this.panAadharDontMatch = '//*[text()="The name on your PAN and Aadhaar do not match"]';
        this.checkBox = '//*[@id="checkbox_comm_address"]';
        this.checkBoxPopUp = '//body/div[7]/div[1]/div[1]/div[1]';
        this.checkBoxPopUpText = '';
        this.exploreOptions = '//div[@title="Explore other options"]';
        this.uidPortal = '//*[@class="header__logo-container--left"]';
        this.uidLogo = '//*[@alt="Aadhaar Logo"]';
        this.uidContainer = '//*[@class="retrieve-eid-uid-form__card-container"]';
        this.idfcDontHaveAadharPage = '//*[@class="sc-kJvQNW gnGaWa"]';
        this.dontHaveAadharPageText = '//label[@for="fullName"]';
        this.dontHaveAadharPageText2 = '//label[@for="email"]';
        this.dontHaveAadharPageText3 = '//p[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 fhbUiO"]';
        this.reviewAddressCom = '//*[@class="sc-kXqQRF byxioW"]';
        this.reviewAddressComText = '//strong[contains(text(),"My communication address is same as my Aadhaar address.")]';
        this.professionalDetailsText = '//p[contains(text(),"Please enter your ")]';
        this.professionalDetailsText2 = '//p[@id="professionalAndPersonalDetails"]';
        this.occupationText = '//label[contains(text(),"Occupation")]';
        this.sourceOfIncome = '//label[contains(text(),"Source of income")]';
        this.grossIncomeText = '//label[@for="number_input_annual_income"]';
        this.rupeeIcon = '//*[@class="InputWrapperstyle__InputWrapperStyles-sc-yn7nxv-0 dvzVVo input-box-wrapper-child"]';
        this.rupeeLogo = '';
        this.occupationPlaceHolder='//input[@id="selectOccupation"]';
        this.sourceIncomePlaceHolder = '//input[@id="selectSourceOfIncome"]';
        //this.mothersNameText='//input[@id="motherFullName"]';
        this.mothersNameText='//*[@for="number_input_monther_name"]';
        this.mothersErrorText = '//*[@for="number_input_monther_name"]';
        this.grossIncomeErrorMsg = '//label[@for="number_input_annual_income"]';
        this.grossIncome = '//input[@id="grossAnualIncome"]';
        this.companyNameHintText = '//label[@for="select_company"]';
        this.fiveTimesOtpErrorText = "//div[text() = 'Sorry, your Aadhaar authentication could not be completed. Please try again after sometime']",
        this.searchIcon = '//*[@data-testid = "IconSearch"]';
        this.invalidAadharError = '//label[contains(text(),"Please enter a valid 12-digit Aadhaar number or 16")]';
        this.userAuthenticated = '//strong[contains(text(),"My communication address is same as my Aadhaar add")]';
        this.disclaimer = '//p[contains(text(),"Disclaimer")]';
        this.redColorText = '//button[contains(text(),"View Schedule of Charges")]';
        this.iamNotPoliticalText = '//p[@id="firstConcentNote"]';
        this.IndianCitizenText = '//p[@id="secondConcentNote"]';
        this.selectYourProductText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 lmafxf"]';
        this.supremeImage = '//strong[contains(text(),"₹25,000")]';
        this.primeImage = '//strong[contains(text(),"₹10,000")]';
        this.termsAndConditionText = '//*[text()="Terms & conditions"]';
        this.proceedBtn = '//button[@form="formName"]';
        this.companyName = '(//input[@type="text"])[11]';
        this.companyList = '//*[@class="SearchResultstyle__SearchResultWrapper-sc-2pcwfa-0 iWCzce"]';
        this.companyNameMatch = '//span[contains(text(),"COGN")]';
        this.viewScheduleRedirectPageLogo = '//*[@class = "logo"]';
        this.viewScheduleOpenBtn = '//*[@class = "btn-red"]';
        this.viewSchedule = '//button[text()="View Schedule of Charges"]';
        this.termsConditions = '//*[@class="container"]';
        this.otpBtnEnable = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.occupationDropDown ="//input[@id='selectOccupation']"; 
        this.salariedText='//input[@id="selectOccupation"]';
        this.solePropText = '//*[text()="Sole Proprietorship"]';
        this.partnershipCompanyText = '//*[text()="Partnership/Company"]';
        this.selfEmployedText= '//*[text()="Self Employed Professional"]';
        this.homeMakerText= '//*[text()="Homemaker"]';
        this.studentText = '//*[text()="Student"]';
        this.farmerText = '//*[text()="Farmer"]';
        this.retiredText = '//*[text()="Retired"]';
        this.sourceOfIncomeDropDown = '//input[@id="selectSourceOfIncome"]';
        this.salaryText = '//*[@id="selectSourceOfIncome"]';
        this.familyWealthText = '//*[text()="Family wealth"]';
        this.savingsText = '//*[text()="Savings"]';

        this.businessText = '//span[contains(text(),"Business")]';
        this.investmentsText = '//span[contains(text(),"Investments")]';
        this.professionalFeeText = '//*[@id="selectSourceOfIncome"]';
        this.vsRedirectText = '//*[@id="idfcfirstpage-3fd835df99"]';
        this.disabledProceedBtn = '//*[@form="formName"]';
        this.footer = '//*[@class="sc-ezzayL dvEEhY"]';
        this.compareCompanyList = '//*[@data-value="363349"]';
        this.compareCompanyList2 = '//*[@data-value="363350"]';
        this.compareCompanyList3 = '//*[@data-value="363351"]';
        this.acceptTermsAndConditionText = '//*[text() = "related to IDFC FIRST Bank"]';
        this.encryptData = '//*[@type="password"]';
        this.decryptData = '//*[@type="password1"]';
        this.panAadharMismatch = '//*[text() = "Hi there!"]';
        this.panAadharMismatch2 = '//*[text() = "Mobile number linked to your Aadhaar must be used to open savings account"]';
        this.grossIncomeError = '//*[@for="number_input_annual_income"]';
        this.viewScheduleCb = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 htkvKw"]';
        this.exploreOtherOptionsTexts = '//*[text()="Don’t have an"]';
        this.exploreOtherOptionsTexts2 = '//*[text()="Don’t remember your"]';
        this.downContentOfDontRememberAadharText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 jbLuoC"]';
        // this.downContentOfDontRememberAadharText2 = '//*[text() = "Visit the UIDAI site below"]';
        // this.downContentOfDontRememberAadharText3 = '//*[text() = "Enter your name and search by registered mobile number or email address"]';
        // this.downContentOfDontRememberAadharText4 = '//*[text() = "Retrieve your Aadhaar number via OTP verification"]';
        // this.downContentOfDontRememberAadharText5 = '//*[text() = "Resume your IDFC FIRST savings account portal and enter your Aadhaar number to continue your journey"]';
        this.downContentOfDontHaveAadharText = '//*[@class = "StyledTextstyle__TextItem-sc-9k2kxs-0 itaovv"]';
        this.visitUidBtn = "#visitUid";
        this.intiateOfflineProcessBtn = "#initiateOfflineProcess";
        this.dontHaveAdharEnterDetailsPan = '//label[@for="pan"]';
        this.dontHaveAdharEnterDetailsMobileNo = '//label[@for="mobile"]';
        this.dontHaveAdharEnterDetailsSendOtp = '//button[@type="submit"]';
        this.dontHaveAadharFullName = '//*[@autocomplete="fullName"]';
        this.dontHaveAadharPan = '//*[@autocomplete="pan"]';
        this.dontHaveAadharPanIcon = '//*[@class="Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa"]';
        this.dontHaveAadharMobilePlus91 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 gdaRgt"]';
        this.dontHaveAadharMobileNo = '//*[@autocomplete="mobile"]'; 
        this.dontHaveAadharMobileNo2 = '//*[@for="mobile"]' ; 
        this.dontHaveAadharEmailId = '//*[@name="email"]'  ;
        this.thankYouText = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 fsJScf"]';
        this.panIcon  = '//*[@class="Inputstyle__InputIconWrapper-sc-q7jno0-9 hZYNPa"]';
        this.dontHaveAadharEmail = '//*[@for="email"]';
        this.sendOtpBtnNotDisplayed = '//button[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 gEWFEF"]';
        this.rightArrowDisplayed = '//*[@class="IconButtonstyle__IconButtonElement-sc-1qfzwt7-2 ftqsWd"]';
        this.otpErrorMsg = '//*[@for="otp"]';
        this.timer2 = '//*[@class="Textstyle__TextWrapper-sc-fopj1k-0 dTBRgK sc-dAvZuH fLcpMZ"]'
        this.otpField = '//*[@type="password"]';
        this.thankYouPageText = '//strong[text()="We will contact you soon"]';
        this.thankYouPageText2 = '//*[@class="StyledTextstyle__TextItem-sc-9k2kxs-0 gmnkgx"]';
        this.visitBankBtn = '//*[@class="Buttonstyle__Wrapper-sc-bbdsxl-0 llmeRh"]';
        this.welcomeBanner = '//*[@alt="Welcome banner"]';
        this.expiredOtpTitle = '//*[@data-testid = "ERROR_TITLE"]';
        this.expiredOtpMsg = '//*[@data-testid = "ERROR_MESSAGE"]';
       this.mothersText = '//*[@id="motherFullName"]';
        
        this.cancel = '//*[@id="resumeModalCloseBtn"]';
        this.pan = '//*[@id="panNumber"]';
        this.aadhaar = '//*[@id="aadhaar"]';
        this.getOtp = '//*[@data-testid="VerifyAadhaarBtn"]';
        this.verifyOtp = '//*[@id="verifyAadharBtn"]';
        this.company = '(//input[@type="text"])[11]';
        this.mother = '//*[@id="motherFullName"]';
        this.gross = '//input[@id="grossAnualIncome"]';
        this.professional = '//strong[normalize-space()="professional & personal details"]';
        this.viewScheduleText = '//button[normalize-space()="View Schedule of Charges"]';
        this.eye = '//*[@data-testid = "IconEye2Off"]';
        this.explore = '//*[@id="exploreOtherOptionBtn"]';
        this.UID = '//*[@id="visitUid"]';
        this.resend = '//button[@id="resendBtn"]';
        this.sep = '//*[text()="Self Employed Professional"]';
        this.checkBox2 = '//*[@for="checkbox_comm_address"]';
        this.proceedToAadhar = '//*[@id="proceedAadharAddressBtn"]';
        this.preferredBranch = '//input[@id="select_prefered_branch"]';
        this.proceed2OpenAccount = '//*[@form="formName"]';
        this.sepDropValue = '//*[text()="Self Employed Professional"]';
        this.spValue = '//*[text()="Sole Proprietorship"]';
        this.businessVal = '//*[text()="Business"]';
        this.commCheckBox = '//*[@for="checkbox_comm_address"]';
        this.prcdButton = '//*[@id="proceedAadharAddressBtn"]';
        this.branch = '//*[text() ="WARANGAL BRANCH"]';






    }

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }
// New
   async resendButton(){
    return await $(this.resend).click();
   }
   async SelfEmployedProfessional(){
    return await $(this.sep).click();
   }
   
   async brachValueWrgl(){
    return await $(this.branch).click();
   }
   async proceedToAadharButton(){
    return await $(this.prcdButton).click();
   }

    async proceedToOpenAccountButton(){
        return await $(this.proceed2OpenAccount).click();
    }

    async mobileNumberField(){
        return await $(this.mobileNumber).click();
    }
    async emailIdField(){
        return await $(this.emailId).click();
    }
    async popUpCancel(){
        return await $(this.cancel).click();
    }
    async panNumberField(){
        return await $(this.pan).click();
    }
    async aadhaarNumField(){
        return await $(this.aadhaar).click();
    }
    async getOtpButton(){
        return await $(this.getOtp).click();
    }
    async verifyOtpBtn(){
        return await $(this.verifyOtp).click();
    }
    async comapanyNameField(){
        return await $(this.company).click();
    }
    async mothersNameField(){
        return await $(this.mother).click();
    }
    async grossIncomeField(){
        return await $(this.gross).click();
    }
    async getProfessionalDetailsText2(){
        return await $(this.professional).getText();
    }
    async viewScheduleRedirectOnlyText(){
        return await $(this.viewScheduleText).getText();
    }
    async eyeIcon(){
        return await $(this.eye).click();
    }
    async exploreOptionsButton(){
        return await $(this.explore).click();
    }
    async visitUid(){
        return await $(this.UID).click();
    }
    async checkBoxField(){
        return await $(this.checkBox2).click();
    }
    async proceedToAadharBtn(){
        return await $(this.proceedToAadhar).click();
    }
    async preferBranch(){
        return await $(this.preferredBranch).click();
    }
    async sepDropDownValue(){
        return await $(this.sepDropValue).click();
    }
    async solePropValue(){
        return await $(this.spValue).click();
    }
async businessValue(){
    return await $(this.businessVal).click();
}



    async checkBoxComm(){
        return await $(this.commCheckBox).click();
    }
    async isIdfcLogoDisplayed() {
        return await $(this.idfcLogo).isDisplayed();
    }
    async isTermsAndCondHintTextIsDisplayed() {
        return await $(this.termsAndCondHintText).isDisplayed();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isPlusNintyOneTextDispalyed() {
        return await $(this.plusNintyOneText).isDisplayed();
    }
    async setvaluetoAdharNumber(value) {
        return await $(this.adharNumber).setValue(value);
    }
    async getvalueAdharNumber(value) {
        return await $(this.adharNumber).getValue(value);
    }
    async getMobileNumberHintText(value) {
        return await $(this.mobileNumber2).getText(value);
    }

    // anand_changes

    async setValueToEmailId(value) {
        return await $(this.email).setValue(value);
    }

    async isEmailIdFeildDisplayed() {
        return await $(this.email).isDisplayed();
    }

    async isErrorTextForEmailIdDisplayed() {
        return await $(this.errorTextForEmailId).isDisplayed();
    }

    async isEmailIdHintTextDisplayed() {
        return await $(this.emailIdHintText).isDisplayed();
    }

    async getEmailId() {
        return await $(this.email).getAttribute('value');
    }

    async clearEmail() {
        const email = await $(this.email).getAttribute('value');

        for (var index = 1; index <= email.length; index++) {
            await driver.keys(['Backspace']);
        }
    }
    async clickAdharMaskedIcon() {
        return await $(this.adharMaskIcon).click();
    }
    async getplaceholderAdhaartext() {
        return await $(this.placeholderforAdhartext).getText();
    }
    async getAdharhinttext() {
        return await $(this.hinttextAdhar).getText();
    }
    async getvalueAdharNumberText() {
        return await $(this.adharNumber).getText();
    }
    async clickCancelOnEmailPopup() {
        return await $(this.cancelButtonemailpopup).click();
    }
    async EnterEmailAddress(value) {
        return await $(this.enterEmailAddress).setValue(value);
    }
    async EnterPanAddress(value) {
        return await $(this.panId).setValue(value);
    }
    async getOTPAdharbutton() {
        return await $(this.getOTPButton).isEnabled();
    }
    async errorHintTextAdhar() {
        return await $(this.errorAdharhinttext).getText();
    }
    async clickOnOTPAdharvalidatebutton() {
        return await $(this.getOTPButton).click();
    }
    async EnterOTPreceivedonMobile() {
        return await $(this.otpOnMobile).click();
    }

    async clickonverifyAdharbuttonEnabled() {
        return await $(this.verifyAdharbutton).click();
    }

    async clickonverifyAdharbuttonEnabled() {
        return await $(this.verifyAdharbutton).sendKeys();
    }
    async clickonAdharvaluefield() {
        return await $(this.adharNumber).click();
    }

// vijay_changes Start
    async getPlzEnterText() {
        return await $(this.mobileSplCharAndAlpha).getText();

    }
    async getRegAadharText() {
        return await $(this.mobileSplCharAndAlpha).getText();

    }
    async getMobileNumber() {
        return await $(this.mobileNumber).getText();
    }
    async setValueToMobileBlankNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async getMobileBlankSpace() {
        return await $(this.mobileBlankSpace).getText();
    }
    async setValueToMobileSplCharAndAlpha(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isPlzEnterMobileTxtDispalyed() {
        return await $(this.mobileSplCharAndAlpha).isDisplayed();
    }
    async getMobileSplCharAndAlpha() {
        return await $(this.mobileSplCharAndAlpha).getText();
    }

    async setValueToOnly10DigMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isRegAadharMobileNumTxtDispalyed() {
        return await $(this.tenDigMobileNum).isDisplayed();
    }
    async getOnly10DigMobileNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isTenZerosMobileNumTxtDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getTenZerosMobileNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }

    async isRegMobileNumWithAadharTxtDispalyed() {
        return await $(this.withoutAnyValue).isDisplayed();
    }
    async getWithoutAnyValue() {
        return await $(this.tenDigMobileNum2).getValue();
    }
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isLessThanTenNumDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getLessThanTenNum() {
        return await $(this.tenDigMobileNum2).getValue();
    }



    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async isZeroAsIntialDispalyed() {
        return await $(this.tenZeros).isDisplayed();
    }
    async getZeroAsIntial() {
        return await $(this.tenDigMobileNum2).getValue();
    }

   
    async setValueToMobileNum(value) {
        return await $(this.mobileNumber).setValue(value);
    }
    async istenPlzEnterMobNumDispalyed() {
        return await $(this.tenBlankSpaces).isDisplayed();
    }
    async getTenBlankSpaces() {
        return await $(this.tenDigMobileNum2).getValue();
    }


    async isPopUpDisplayed() {
        return await $(this.popUp).isDisplayed();
    }
    async isAadhaarFieldDisplayed() {
        return await $(this.aadhaarField).isDisplayed();
    }
    async setValueToAadhaarNum(value) {
        return await $(this.aadhaarField).setValue(value);
    }
    async isOtpErrorMsgDisplayed() {
        return await $(this.otpError).isDisplayed();
    }
    async isExploreOtherOptionsDisplayed() {
        return await $(this.exploreOptions).isDisplayed();
    }
    async isUidPortalDisplayed() {
        return await $(this.uidPortal).isDisplayed();
    }
    async isIdfcLogoDontHaveAadharDisplayed() {
        return await $(this.idfcDontHaveAadharPage).isDisplayed();
    }

    async getProfessionalDetailsText() {
        return await $(this.professionalDetailsText).getText();
    }
    async isDontHavePageText() {
        return await $(this.dontHaveAadharPageText).getText();
    }
    async isDontHavePageText2() {
        return await $(this.dontHaveAadharPageText2).getText();
    }
    async setValueToEmail(value) {
        return await $(this.emailId).setValue(value);
    }
    async setValueToPan(value) {
        return await $(this.panNumber).setValue(value);
    }

    async setValueToAadhaar(value) {
        return await $(this.aadharNumber).setValue(value);
    }
    async isByProceedTextDisplayed() {
        return await $(this.byProceedText).isDisplayed();
    }
    async isDontHaveAadharTextDisplayed() {
        return await $(this.dontHaveAadhar).isDisplayed();
    }
    async isTimerDisplayed() {
        return await $(this.timer).isDisplayed();
    }
    async isPanAadharDoNotMatchTextDisplayed() {
        return await $(this.panAadharDontMatch).isDisplayed();
    }
    // async isReviewAddCom() {
    //     return await $(this.reviewAddressCom).isDisplayed();
    // }
    async getReviewAddComText() {
        return await $(this.reviewAddressComText).getText();
    }
   
    async isCheckBoxPopUpDisplayed() {
        return await $(this.checkBox).isDisplayed();
    }
    async getCheckBoxPopUpText() {
        return await $(this.checkBoxPopUpText).getText();
    }
    async getByproceedText() {
        return await $(this.byProceedText).getText();
    }
    async getOccupationText() {
        return await $(this.occupationText).getText();
    }
    async getSourceOfIncome() {
        return await $(this.sourceOfIncome).getText();
    }
    async getGrossIncomeText() {
        return await $(this.grossIncomeText).getText();
    }
    async isRupeeLogoDisplayed() {
        return await $(this.rupeeIcon).isDisplayed();
    }
    async getSalariedText() {
        return await $(this.occupationPlaceHolder).getValue();
    }
    async getSalaryText(){
        return await $(this.sourceIncomePlaceHolder).getValue();
    }
    async getMothersName(){
        return await $(this.mothersErrorText).getText();
    }
    async getMotherName(){
        return await $(this.mother).getValue();
    }
    async getMothersErrorText(){
        return await $(this.mothersErrorText).getText();
    }
    async getCompanyNamesList(){
        return await $(this.companyList).isDisplayed();
    }
    async getCompanyNamesMatch(){
        return await $(this.companyNameMatch).getText();
    }
    //span[contains(text(),'COGN')]
    async getGrossIncomeErrorText(){
        return await $(this.grossIncomeErrorMsg).getText();
    }
    async setValueToGrossIncome(value) {
        return await $(this.grossIncome).setValue(value);
    }
    async isCompanyNameHintTextDisplayed() {
        return await $(this.companyNameHintText).getText();
    }
    async fiveTimesOtp() {
        return await $(this.fiveTimesOtpErrorText).getText();
    }
    async isSearchIconDisplayed() {
        return await $(this.searchIcon).isDisplayed();
    }
    async invalidAadharErrorText(){
        return await $(this.invalidAadharError).getText();
    }
    async getEmailIdResetField() {
        return await $(this.email).getValue();
    }
    async userAuthenticatedSuccessful(){
        return await $(this.userAuthenticated).getText();
    }
    async setValueToMothersName(value) {
        return await $(this.mothersText).setValue(value);
    }
    async setValueToCompanyName(value){
        return await $(this.companyName).setValue(value);
    }
    async getCompanyName(){
        return await $(this.companyName).getValue();
    }
    async disclaimerText(){
        return await $(this.disclaimer).getText();
    }
    async getColorOfTheText(){
        return await $(this.redColorText).getText();
    }
    async getIamNotPoliticalPersonText(){
        return await $(this.iamNotPoliticalText).getText();
    }
    async getIamAnIndianCitizenText(){
        return await $(this.IndianCitizenText).getText();
    }
    async selectProductText(){
        return await $(this.selectYourProductText).getText();
    }
    
    async supremeImageDisplayed(){
        return await $(this.supremeImage).isDisplayed();
    }
    async primeImageDisplayed(){
        return await $(this.primeImage).isDisplayed()
    }
    async termsAndCondition(){
        return await $(this.termsAndConditionText).getText()
    }
    async proceedButtonDisplayed(){
        return await $(this.proceedBtn).isDisplayed()
    }
    async viewScheduleRedirectPageLogoDisplayed(){
        return await $(this.viewScheduleRedirectPageLogo).isDisplayed();
    }
    async viewScheduleRedirectText(){
        return await $(this.vsRedirectText).isDisplayed();
    }
    async viewScheduleRedirectOpenBtn(){
        return await $(this.viewScheduleOpenBtn).isDisplayed();
    }

    async clickViewSchedule() {
        return await $(this.viewSchedule).click();
    }

    async termsAndConditionPoints(){
        return await $(this.termsConditions).isDisplayed()
    }
    async getGrossIncome(){
        return await $(this.grossIncome).getValue();
    }
    async getGrossIncomeError(){
        return await $(this.grossIncomeError).getText();
    }
    
    async otpButtonEnable(){
        return await $(this.otpBtnEnable).isDisplayed();
    }
    async occDropDown(){
        return await $(this.occupationDropDown).click();
    }
    async salaried(){
        return await $(this.salariedText).getValue()
    }
    async soleProprietorship(){
        return await $(this.solePropText).getText()
    }
    async partnershipCompany(){
        return await $(this.partnershipCompanyText).getText()
    }
    async selfEmployedProffesional(){
        return await $(this.selfEmployedText).getText()
    }
    async selfEmployedProffesional2(){
        return await $(this.selfEmployedText).getValue()
    }
    async soleProp(){
        return await $(this.spValue).getValue()
    }
    async homeMaker(){
        return await $(this.homeMakerText).getText()
    }
    async student(){
        return await $(this.studentText).getText()
    }
    async farmer(){
        return await $(this.farmerText).getText()
    }
    async retired(){
        return await $(this.retiredText).getText()
    }
    async sourceOfIncomeDD(){
        return await $(this.sourceOfIncomeDropDown).click();
    }
    async salary(){
        return await $(this.salaryText).getValue()
    }
    async familyWealth(){
        return await $(this.familyWealthText).getText()
    }
    async savings(){
        return await $(this.savingsText).getText()
    }
    async business(){
        return await $(this.businessText).getText()
    }
    async investments(){
        return await $(this.investmentsText).getText()
    }
    async professionalFee(){
        return await $(this.professionalFeeText).getValue()
    }
    async setValueToOccupation(){
        return await $(this.occupationPlaceHolder).setValue()
    }
    async getOccupationValue() {
        return await $(this.occupationPlaceHolder).getValue();
    }
    async isDisabledProceedToOpen() {
        return await $(this.disabledProceedBtn).isDisplayed();
    }
    async isFooterDisplayed() {
        return await $(this.footer).isDisplayed();
    }
    async compareCompanyListData(){
        return await $(this.compareCompanyList).getText()
    }
    async compareCompanyListData2(){
        return await $(this.compareCompanyList2).getText()
    }
    async compareCompanyListData3(){
        return await $(this.compareCompanyList3).getText()
    }
    async acceptTermsAndConditionTextDisplay(){
        return await $(this.acceptTermsAndConditionText).getText()
    }
    async encryptedData() {
        return await $(this.encryptData).isDisplayed();
    }
    async decryptedData() {
        return await $(this.decryptData).isDisplayed();
    }
    async panAadharMismatchCondition(){
        return await $(this.panAadharMismatch).getText()
    }
    async panAadharMismatchCondition(){
        return await $(this.panAadharMismatch2).getText()
    }
    
    async viewScheduleCheckBox() {
        return await $(this.viewScheduleCb).isDisplayed();
    }
    // Vijay_changes End


    // ExploreOtherOptions 

    async exploreOtherOptionsTwoTexts(){
        return await $(this.exploreOtherOptionsTexts).isDisplayed()
    }
    async exploreOtherOptionsTwoTexts2(){
        return await $(this.exploreOtherOptionsTexts2).isDisplayed()
    }
    async downContentOfDontRememberAadhar(){
        return await $(this.downContentOfDontRememberAadharText).getText()
    }
    
    async downContentOfDontHaveAadhar(){
        return await $(this.downContentOfDontHaveAadharText).getText()
    }
    
    async exploreOtherOptionsVisitUidBtn(){
        return await $(this.visitUidBtn).isDisplayed()
    }
     async exploreOtherOptionsintiateOfflineProcessBtn(){
        return await $(this.intiateOfflineProcessBtn).isDisplayed()
    }
    async popUpClosed() {
        return await $(this.exploreOptions).isDisplayed();
    }
    async popUpNotClosed() {
        return await $(this.exploreOptions).isDisplayed();
    }
    async uidRedirectPage() {
        return await $(this.uidLogo).isDisplayed();
    }
    async uidPageContainer() {
        return await $(this.uidContainer).isDisplayed();
    }
    async dontHaveAadharRedirectPage(){
        return await $(this.dontHaveAadharPageText3).getText()
    }
    async dontHaveAadharEnterDetailsFieldPan(){
        return await $(this.dontHaveAdharEnterDetailsPan).getText()
    }
    async dontHaveAadharEnterDetailsFieldMobileNo(){
        return await $(this.dontHaveAdharEnterDetailsMobileNo).getText()
    }
    async dontHaveAadharEnterDetailsFieldSendOtp(){
        return await $(this.dontHaveAdharEnterDetailsSendOtp).getText()
    }
    async setValueToDontHaveAadhaarFullName(value){
        return await $(this.dontHaveAadharFullName).setValue(value)
    }
    async setValueToDontHaveAadhaarPan(value){
        return await $(this.dontHaveAadharPan).setValue(value)
    }
    async isDontHaveAadharPanIconDisplayed() {
        return await $(this.dontHaveAadharPanIcon).isDisplayed();
    }
    async colorOfTheIcon(){
        return await $(this.panIcon).getValue();
    }
    async isDontHaveAadharMobilePlus91Displayed() {
        return await $(this.dontHaveAadharMobilePlus91).isDisplayed();
    }
    async dontHaveAadharMobilePlus91Text() {
        return await $(this.dontHaveAadharMobilePlus91).getText();
    }
    async setValueToDontHaveAadhaarMobileNo(value){
        return await $(this.dontHaveAadharMobileNo).setValue(value)
    }
    async dontHaveAadharMobileField() {
        return await $(this.dontHaveAadharMobileNo).getValue();
    }
    async dontHaveAadharMobile() {
        return await $(this.dontHaveAadharMobileNo2).getText();
    }
    async setValueToDontHaveAadhaarEmailId(value){
        return await $(this.dontHaveAadharEmailId).setValue(value)
    }
    async thankYouForYourDetailsText() {
        return await $(this.thankYouText).getText();
    }
    async dontHaveAadharEmailIdText() {
        return await $(this.dontHaveAadharEmail).getText();
    }
    async isSendOtpBtnNotDisplayed() {
        return await $(this.sendOtpBtnNotDisplayed).isDisplayed();
    }
    async isRightArrowDisplayed() {
        return await $(this.rightArrowDisplayed).isDisplayed();
    }
    async otpErrorMsgText() {
        return await $(this.otpErrorMsg).getText();
    }
    async otpFieldValue() {
        return await $(this.otpField).getValue();
    }
    async thankYouPageWillContactBoldText() {
        return await $(this.thankYouPageText).getText();
    }
    async thankYouPageWillContactText() {
        return await $(this.thankYouPageText2).getText();
    }
    async thankYouPageVisitBankBtn() {
        return await $(this.visitBankBtn).isDisplayed();
    }
    async isWelcomeBannerDisplayed() {
        return await $(this.welcomeBanner).isDisplayed();
    }
    async timerStartsFrom() {
        return await $(this.timer).getText();
    }
    async expiredOtpTitleText() {
        return await $(this.expiredOtpTitle).getText();
    }
    async expiredOtpMsgText() {
        return await $(this.expiredOtpMsg).getText();
    }
   
    
    
    
}

module.exports = new Homepage();
