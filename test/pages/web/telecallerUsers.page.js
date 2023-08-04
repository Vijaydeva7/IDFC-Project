class telecaller{
    constructor(){
        this.basicDetailHeading = "//*[@class='StyledTextstyle__TextItem-sc-9k2kxs-0 jgbEbn']";
        this.mobileNumber = "#mobileNumber";
        this.idExecutive = '(//input)[1]';
        this.mobile = '//*[@id="mobileNumber"]';
        this.mobile2 = '//*[@for="mobileNumber"]';

        this.email = '//*[@id="formName"]/div[2]/div[2]/div/div/div/input';
        this.email2 = '(//input)[3]';
        this.occupation = '//*[@id="selectOccupation"]';
        this.sourceIncome = '//*[@id="selectSourceOfIncome"]';
        this.income = '//*[@id="grossAnualIncome"]';
        this.mother = '//*[@id="motherFullName"]';
        this.textMobile = '';
        this.salaried = '(//*[@id="selectOccupation-list"]/li[1]/div)';
        this.sps = '(//*[@id="selectOccupation-list"]/li[2]/div)';
        this.partnCompany = '(//*[@data-value="Partnership/Company"])';
        this.sep = '(//*[@data-value="Self Employed Professional"])';
        this.home = '(//*[@data-value="Homemaker"])';
        this.student = '(//*[@data-value="Student"])';
        this.farmer = '(//*[@data-value="Farmer"])';
        this.retired = '(//*[@data-value="Retired"])';
        this.saveButton = '//span[text()="Save Details"]';
        this.popup = '//*[@class="Modalstyle__ModalWrapper-sc-16wugpy-5 ggwxTM"]';
        this.mainHeadingPopUP = '//*[text()="Save details before abandoning"]';
        this.subHeadingPopUP = '//*[text()="Select the reason for abandoning the journey"]';
        this.FirstRadioBtn = '(//span)[23]';
        this.secondRadioBtn = '(//span)[24]';
        this.thirdRadioBtn = '(//span)[25]';
        this.fourthRadioBtn = '(//span)[26]';
        this.fifthRadioBtn = '(//span)[27]';
        this.cancelBtn = '//*[@data-testid="cancel-button"]';
        this.submitBtn = '//*[@data-testid="submit-button"]';



        this.inputGross = '(//input)[6]';
        this.inputCompany = '(//input)[7]';
        this.inputMother = '(//input)[8]';
        this.inputMothersN = '//*[@id="motherFullName"]';
    }
    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }
    async executiveId(){
        return await $(this.idExecutive).getValue();
    }
    async executiveId2(){
        return await $(this.idExecutive).isClickable() == false;
    }
    async mobileField(){
        return await $(this.mobile).getValue() == "9561787645";
    }
    async mobileField2(){
        return await $(this.mobile).isClickable() == false;
    }
    async emailField(){
        return await $(this.email).click();
    }
    async occupationField(){
        return await $(this.occupation).click();
    }
    async sourceOfIncomeField(){
        return await $(this.sourceIncome).click();
    }
    async incomeField(){
        return await $(this.income).click();
    }
    async motherNameField(){
        return await $(this.mother).click();
    }
    async emailFieldInput(value){
        return await $(this.email).setValue(value);
    }
    async emailFieldInput2(){
        return await $(this.email2).getValue();
    }
    async mobileText(){
        return await $(this.mobile2).getText();
    }
    async salariedOption(){
        return await $(this.salaried).click();
    }
    async spsOption(){
        return await $(this.sps).click();
    }
    async sepOption(){
        return await $(this.sep).click();
    }
    async partnershipCompanyOption(){
        return await $(this.partnCompany).click();
    }
    async Homemaker(){
        return await $(this.home).click();
    }
    async studentOption(){
        return await $(this.student).click();
    }
    async farmerOption(){
        return await $(this.farmer).click();
    }
    async retiredOption(){
        return await $(this.retired).click();
    }
    async sourceIncomeOptions(){
        return await $(this.sourceIncome).getValue();
    }
    async saveDetailsButton(){
        return await $(this.saveButton).isDisplayed() == true;
    }
    async saveDetailsButtonIsClickable(){
        return await $(this.saveButton).isClickable() == true;
    }
    async saveDetailsPopUP(){
        return await $(this.popup).isDisplayed() == true;
    }
    async saveDetailsButtonClick(){
        return await $(this.saveButton).click();
    }
    async mainHeadingInPopUp(){
        return await $(this.mainHeadingPopUP).getText();
    }
    async subHeadingInPopup(){
        return await $(this.subHeadingPopUP).getText();
    }

    async FirstRadio(){
        return await $(this.FirstRadioBtn).isDisplayed() == true;
    }
    async secondRadio(){
        return await $(this.secondRadioBtn).isDisplayed() == true;
    }
    async thirdRadio(){
        return await $(this.thirdRadioBtn).isDisplayed() == true;
    }
    async fourthRadio(){
        return await $(this.fourthRadioBtn).isDisplayed() == true;
    }
    async fifthRadio(){
        return await $(this.fifthRadioBtn).isDisplayed() == true;
    }
    async FirstRadioIsSelected(){
        return await $(this.FirstRadioBtn).isSelected() == true;
    }

    async secondRadioClick(){
        return await $(this.secondRadioBtn).click();
    }
    async thirdRadioClick(){
        return await $(this.thirdRadioBtn).click();
    }
    async fourthRadioClick(){
        return await $(this.fourthRadioBtn).click();
    }
    async fifthRadioClick(){
        return await $(this.fifthRadioBtn).click();
    }
    async cancelButton(){
        return await $(this.cancelBtn).isDisplayed() == true;
    }
    async submitButton(){
        return await $(this.submitBtn).isDisplayed() == true;
    }
    async submitBtnClickable(){
        return await $(this.submitBtn).isClickable() == true;
    }
    
    async grossInputReader(){
        return await $(this.inputGross).getValue();
    }
    async grossClick(){
        return await $(this.inputGross).click();
    }
    async motherClick(){
        return await $(this.inputMothersN).click();
    }

    async companyInputReader(){
        return await $(this.inputCompany).getValue();
    }
    async companyClick(){
        return await $(this.inputCompany).click();
    }

    async mothersInputReader(){
        return await $(this.inputMothersN).getValue();
    }
    async setValueToGross(value){
        return await $(this.inputGross).setValue(value)
    }
    async setValueToCompanyName(value){
        return await $(this.inputCompany).setValue(value)
    }
    async setValueToMotherName(value){
        return await $(this.inputMother).setValue(value);
    }
    async setValueToMotherName2(value){
        return await $(this.inputMothersN).setValue(value);
    }
    

    
    
    


}
module.exports=new telecaller()