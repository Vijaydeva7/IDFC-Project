const telecallerUser = require("../../pages/web/telecallerUsers.page");
const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const onhc5362Page = require("../../pages/web/onhc5362.page");

// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");
//const { on } = require("npm");


describe(" telecaller page validation : ", () => {
    it.only("IDFC window open", async () => {
       
        await driver.url("/apply/savings/agent-form?utm_tele_param=RtC9HePFfzeAgdo29JeSPoUw7RV4K2+4YIbgK1LNi0jFv5sDo6P76yWgp1DsOzlUSl32CF+oizhTCLGh0g6JiTJo9kFFwcAo7Q9ostIByOWW6r/3Wm/m4h2edR1UAc5pMv1Wd9XqhMMuTSnBUWLG3A==");
        await driver.maximizeWindow();
        await telecallerUser.waitUntilHomepageLoad();
       
       
    });

    it.only("User1 salaried and their input details", async () => {
        await driver.pause(10000);
        await telecallerUser.executiveId();
        await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
        if(await telecallerUser.mobileField() == "9561787645"){
            await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


        } else{
       await telecallerUser.mobileText();
       await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }

        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail);
        await telecallerUser.occupationField();
        await driver.pause(3000);
        await telecallerUser.salariedOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.salaryTele);
        
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        await telecallerUser.setValueToCompanyName(labelConstants.companyTele);
        await telecallerUser.companyInputReader();
        await expect(await telecallerUser.companyInputReader()).to.be.eql(labelConstants.companyTele);
        await driver.pause(2000);
        await telecallerUser.setValueToMotherName(labelConstants.mothersTele);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele);
        await driver.pause(2000);
        ////
        await telecallerUser.emailField();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail2);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail2);
        await telecallerUser.occupationField();
        await driver.pause(3000);
        await telecallerUser.spsOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.BusinessTele);
        await driver.pause(5000);
        await telecallerUser.grossClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        await telecallerUser.motherClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele2);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele2);
        await driver.pause(2000);

        await telecallerUser.emailField();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail3);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail3);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.sepOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.ProfessionalTele);
        await telecallerUser.grossClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        await telecallerUser.motherClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);


        await telecallerUser.emailField();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail4);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail4);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.Homemaker();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
        await telecallerUser.grossClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        await telecallerUser.motherClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

        await telecallerUser.emailField();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail5);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail5);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.farmerOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.farmerTele);
        await telecallerUser.grossClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        await telecallerUser.motherClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
        await telecallerUser.emailField();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail5);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail5);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.retiredOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
        await telecallerUser.grossClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);

        await telecallerUser.motherClick();
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        for (var index = 1; index <= 10; index++) 
        {
            await driver.keys(['Backspace']);
        }
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
    });


    // it("User2 sole proprietorship and their input details", async () => {
    //     // await driver.refresh();
    //     await driver.pause(10000);
    //     await telecallerUser.executiveId();
    //     await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
    //     if(await telecallerUser.mobileField() == "9561787645"){
    //         await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


    //     } else{
    //    await telecallerUser.mobileText();
    //    await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
    //     }
    //     await telecallerUser.emailFieldInput(labelConstants.telecallerEmail2);
    //     await driver.pause(2000);
    //     await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail2);
    //     await telecallerUser.occupationField();
    //     await driver.pause(3000);
    //     await telecallerUser.spsOption();
    //     await driver.pause(2000);
    //     await telecallerUser.sourceIncomeOptions();
    //     await driver.pause(3000);
    //     await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.BusinessTele);
    //     await driver.pause(5000);
    //     await telecallerUser.setValueToGross(labelConstants.grossTele);
    //     await telecallerUser.grossInputReader();
    //     await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
    //     await driver.pause(2000);
        
    //     await telecallerUser.setValueToMotherName2(labelConstants.mothersTele2);
    //     await driver.pause(4000);
    //     await telecallerUser.mothersInputReader();
    //     await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele2);
    //     await driver.pause(2000);

  
    // });

    
    it("User3 SEP and their input details", async () => {
        // await driver.refresh();
        await driver.pause(10000);
        await telecallerUser.executiveId();
        await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
        if(await telecallerUser.mobileField() == "9561787645"){
            await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


        } else{
       await telecallerUser.mobileText();
       await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }

        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail4);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail4);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.sepOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.ProfessionalTele);
     
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        // await telecallerUser.setValueToCompanyName(labelConstants.companyTele);
        // await telecallerUser.companyInputReader();
        // await expect(await telecallerUser.companyInputReader()).to.be.eql(labelConstants.companyTele);
        // await driver.pause(2000);
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
    });

 
    it("User4 Homemaker and their input details", async () => {
        // await driver.refresh();
        await driver.pause(10000);
        await telecallerUser.executiveId();
        await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
        if(await telecallerUser.mobileField() == "9561787645"){
            await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


        } else{
       await telecallerUser.mobileText();
       await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }

        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail4);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail4);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.Homemaker();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.savingsTele);
   
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        // await telecallerUser.setValueToCompanyName(labelConstants.companyTele);
        // await telecallerUser.companyInputReader();
        // await expect(await telecallerUser.companyInputReader()).to.be.eql(labelConstants.companyTele);
        // await driver.pause(2000);
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
    });

    it("User5 Farmer and their input details", async () => {
        // await driver.refresh();
        await driver.pause(10000);
        await telecallerUser.executiveId();
        await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
        if(await telecallerUser.mobileField() == "9561787645"){
            await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


        } else{
       await telecallerUser.mobileText();
       await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }

        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail5);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail5);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.farmerOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.farmerTele);
        
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        // await telecallerUser.setValueToCompanyName(labelConstants.companyTele);
        // await telecallerUser.companyInputReader();
        // await expect(await telecallerUser.companyInputReader()).to.be.eql(labelConstants.companyTele);
        // await driver.pause(2000);
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
    });

    it("User6 Farmer and their input details", async () => {
        // await driver.refresh();
        await driver.pause(10000);
        await telecallerUser.executiveId();
        await expect(await telecallerUser.executiveId()).to.be.eql("1234567");
        if(await telecallerUser.mobileField() == "9561787645"){
            await expect(await telecallerUser.mobileField()).to.be.eql("9561787645");


        } else{
       await telecallerUser.mobileText();
       await expect(await telecallerUser.mobileText()).to.be.eql(labelConstants.mobileTextTelecaller)
        }

        await telecallerUser.emailFieldInput(labelConstants.telecallerEmail5);
        await driver.pause(2000);
        await expect(await telecallerUser.emailFieldInput2()).to.be.eql(labelConstants.telecallerEmail5);
        await telecallerUser.occupationField();
        await driver.pause(3000);
       
        await telecallerUser.retiredOption();
        await driver.pause(2000);
        await telecallerUser.sourceIncomeOptions();
        await driver.pause(3000);
        await expect(await telecallerUser.sourceIncomeOptions()).to.be.eql(labelConstants.farmerTele);
        
        await telecallerUser.setValueToGross(labelConstants.grossTele);
        await telecallerUser.grossInputReader();
        await expect(await telecallerUser.grossInputReader()).to.be.eql(labelConstants.grossTeleIncome)
        await driver.pause(2000);
        // await telecallerUser.setValueToCompanyName(labelConstants.companyTele);
        // await telecallerUser.companyInputReader();
        // await expect(await telecallerUser.companyInputReader()).to.be.eql(labelConstants.companyTele);
        // await driver.pause(2000);
        await telecallerUser.setValueToMotherName2(labelConstants.mothersTele3);
        await driver.pause(4000);
        await telecallerUser.mothersInputReader();
        await expect(await telecallerUser.mothersInputReader()).to.be.eql(labelConstants.mothersTele3);
        await driver.pause(2000);

  
    });


    
   

    
    });