const telecaller = require("../../pages/web/telecaller.page");
const { expect } = require("chai");
const telecallerUser = require("../../pages/web/telecallerUsers.page")
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const onhc5362Page = require("../../pages/web/onhc5362.page");

// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const { on } = require("npm");


describe(" telecaller page validation : ", () => {
    it("IDFC window open", async () => {
       
        await driver.url("/apply/savings/agent-form?utm_tele_param=RtC9HePFfzeAgdo29JeSPoUw7RV4K2+4YIbgK1LNi0jFv5sDo6P76yWgp1DsOzlUSl32CF+oizhTCLGh0g6JiTJo9kFFwcAo7Q9ostIByOWW6r/3Wm/m4h2edR1UAc5pMv1Wd9XqhMMuTSnBUWLG3A==");
        await driver.maximizeWindow();
        await telecaller.waitUntilHomepageLoad();
       
       
    });
    it("verify the Executive ID presented", async() => {
       
        await driver.refresh();
        await driver.pause(15000);
        await telecaller.executiveId();
        await expect(await telecaller.executiveId()).to.be.eql("1234567");

    })

    it("verify the Execute ID is not Editable", async() => {

        await telecaller.executiveId2();
        // await expect(await telecaller.executiveId2()).to.be.eql(false);


    })
    it("validate Mobile field is prefilled with mobile number", async() => {

        // await telecaller.mobileField();
        if(await telecaller.mobileField() == true){
            await expect(await telecaller.mobileField()).to.be.eql(true);


        } else{
       await telecaller.mobileText();
       await expect(await telecaller.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }
        // await expect(await telecaller.mobileField()).to.be.eql("9561787645");


    })
    it("validate Mobile field is not Editable", async() => {

        await telecaller.mobileField2();
        // await expect(await telecaller.mobileField2()).to.be.eql(false);

    })
    /*
    it("Agent tries to access any field other than Customer mobile no", async() => {
       
        await telecaller.emailField();
        await driver.pause(2000);
        await telecaller.occupationField();
        await driver.pause(2000);
        await telecaller.sourceOfIncomeField();
        await driver.pause(2000);
        await telecaller.incomeField();
        await driver.pause(2000);
        await telecaller.motherNameField();
        await driver.pause(2000);
        await telecaller.mobileField2();

    })

    it("Agent can input email ID", async() => {
       
       // await telecaller.emailField();
        await driver.pause(2000);
        await telecaller.emailFieldInput(labelConstants.telecallerEmail);
        await driver.pause(3000);
        await expect(await telecaller.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail);
        
        
    });
    */
    
   it("Verify When user select saried occupation, source of income field should be salary", async() => {
   
    await driver.pause(5000);
     await telecaller.occupationField();
     await driver.pause(3000);
     await telecaller.salariedOption();
     await driver.pause(2000);
     await telecaller.sourceIncomeOptions();
     await driver.pause(3000);
     await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.salaryTele);

   });

   it("Verify When User select SPS & Parnership/Company in Occupation field, source of income field should be Business ", async() => {
   
    await driver.pause(5000);
     await telecaller.occupationField();
     await driver.pause(3000);
     await telecaller.spsOption();
     await driver.pause(2000);
     await telecaller.sourceIncomeOptions();
     await driver.pause(3000);
     await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.BusinessTele);
     await driver.pause(5000);
     await telecaller.occupationField();
     await driver.pause(3000);
     await telecaller.partnershipCompanyOption();
     await driver.pause(2000);
     await telecaller.sourceIncomeOptions();
     await driver.pause(3000);
     await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.BusinessTele);

   });

   it("verify when user select SEP in Occupation, source of income should be Professional Fee", async() => {
   
     await driver.pause(5000);
     await telecaller.occupationField();
     await driver.pause(3000);
     await telecaller.sepOption();
     await driver.pause(2000);
     await telecaller.sourceIncomeOptions();
     await driver.pause(3000);
     await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.ProfessionalTele);
     

   });
   it("verify when user select Homemaker, student, source of income should be savings", async() => {
   
    await driver.pause(5000);
    await telecaller.occupationField();
    await driver.pause(3000);
    await telecaller.Homemaker();
    await driver.pause(2000);
    await telecaller.sourceIncomeOptions();
    await driver.pause(3000);
    await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
    await driver.pause(5000);
    await telecaller.occupationField();
    await driver.pause(3000);
    await telecaller.studentOption();
    await driver.pause(2000);
    await telecaller.sourceIncomeOptions();
    await driver.pause(3000);
    await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
    

  });

  it("Verify when user select Farmer in Occupation field, source of income should be Agriculture", async() => {
   
    await driver.pause(5000);
    await telecaller.occupationField();
    await driver.pause(3000);
    await telecaller.farmerOption();
    await driver.pause(2000);
    await telecaller.sourceIncomeOptions();
    await driver.pause(3000);
    await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.farmerTele);
    

  });
  it("Verify When user select Retired in Occupation, source of income should be Savings", async() => {
   
    await driver.pause(5000);
    await telecaller.occupationField();
    await driver.pause(3000);
    await telecaller.retiredOption();
    await driver.pause(2000);
    await telecaller.sourceIncomeOptions();
    await driver.pause(3000);
    await expect(await telecaller.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
    

  });

  it("Verify Save details button is Available", async() => {
   
    await telecaller.saveDetailsButton();

  });

  it("Verify Save details button should be clickable", async() => {
   
    await telecaller.saveDetailsButtonIsClickable();

  });
  it("when Agent clicks on Save details button agent should get one pop-up", async() => {
   
    await telecaller.saveDetailsButtonClick();
    await driver.pause(3000);
    await telecaller.saveDetailsPopUP();

  });
  it("Verify In pop-up 'Save details before abandoning' heading should be available", async() => {
   
    await telecaller.mainHeadingInPopUp();
    await driver.pause(3000);
    await expect(await telecaller.mainHeadingInPopUp()).to.be.eql(labelConstants.mainHeadingTelePopUp)
  });
  it("Verify In pop-up 'Select the reason for abandoning the journey' Sub-heading should be available.", async() => {
   
    await telecaller.subHeadingInPopup();
    await driver.pause(3000);
    await expect(await telecaller.subHeadingInPopup()).to.be.eql(labelConstants.subHeadingInPopupTele)
  });

it("Verify In pop-up there is 5 radio Button should be available", async() => {
   
    await telecaller.FirstRadio();
    await telecaller.secondRadio();
    await telecaller.thirdRadio();
    await telecaller.fourthRadio();
    await telecaller.fifthRadio();


    // await expect(await telecaller.subHeadingInPopup()).to.be.eql(labelConstants.subHeadingInPopupTele)
  });

  it("Verify in Pop-up first option should be selected by default", async() => {
    await telecaller.FirstRadioIsSelected();
    await driver.pause(2000);
  })

  it("Verify In pop-up there is 5 radio Button should be Clickable", async() => {
   
    await telecaller.secondRadioClick();
    await driver.pause(2000);
    await telecaller.thirdRadioClick();
    await driver.pause(2000);
    await telecaller.fourthRadioClick();
    await driver.pause(2000);
    await telecaller.fifthRadioClick();

  });

  it("Verify in pop-up there is one Cancel button is Available",async() => {

     await telecaller.cancelButton();
     await driver.pause(2000);

  }) 
  it("VErify in pop-up there is one Submit button is Available",async() => {

    await telecaller.submitButton();
    await driver.pause(2000);
    
 }) 

 it("Verify in pop-up there is one Submit button is Should be clickable",async() => {

    await telecaller.submitBtnClickable();
    await driver.pause(2000);
    
 }) 
 
 it("Verify in pop-up there is one Submit button is Should be clickable",async() => {

    await telecaller.submitBtnClickable();
    await driver.pause(2000);
    
 });

 it("Verify When user clicks on cancel Button user lands on telecaller landing page again", async () => {

  await telecaller.cancelButton2();
  await driver.pause(2000);

 })



 it("Verify the Gross anual income field input reader",async() => {
   
    await telecaller.setValueToGross(labelConstants.grossTeleIncome);
    await telecaller.grossInputReader();
    await expect(await telecaller.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
    await driver.pause(2000);
    
 });
//  it("Company name field input reader",async() => {
   
//     await telecaller.setValueToCompanyName(labelConstants.companyTele);
//     await telecaller.companyInputReader();
//     await expect(await telecaller.companyInputReader()).to.be.eql(labelConstants.companyTele);
//     await driver.pause(2000);
    
//  });
 it("Verify the Mother's name input field reader",async() => {

    await telecaller.setValueToMotherName(labelConstants.mothersTele);
    await telecaller.mothersInputReader();
    await expect(await telecaller.mothersInputReader()).to.be.eql(labelConstants.mothersTele);
    await driver.pause(20000);
    
 }) 


 

// Please enter the full name separated by spaces.
// Please enter valid pincode.
// //*[@for="number_input_monther_name"]
//*[@for="number_input_annual_income"]
//*[@for="emailId"]
  

});