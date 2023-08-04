const telecaller = require("../../pages/web/telecaller.page");
const { expect } = require("chai");
const telecallerUser = require("../../pages/web/telecallerUsers.page")
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
const onhc5362Page = require("../../pages/web/onhc5362.page");

describe("Error Messages Validation in Tele caller: ", () => {
it("Verify the Error Message in Email field when user enter invalid email address",async() => {

    await telecaller.emailFieldInput(invalidTestData.teleInvalidEmail);
    await telecaller.emailLabelReader();
    await expect(await telecaller.emailLabelReader()).to.be.eql(labelConstants.emailErrorMessage);
  
    
  });
  it("Verify the Error Message in Gross Anual Income field when user enter invalid income",async() => {
  
    await telecaller.grossIncomeInput(invalidTestData.teleGrossInvalidIncome);
    await telecaller.grossErrorMessage();
    await expect(await telecaller.grossErrorMessage()).to.be.eql(labelConstants.grossErrorMsg);
  
    
  }); 
  
  it("Verify the Error Message in Mother Name field when user enter invalid mother's name",async() => {
  
    await telecaller.motherInput(invalidTestData.teleMothersInvalidName);
    await telecaller.mothersErrorMessage();
    await expect(await telecaller.mothersErrorMessage()).to.be.eql(labelConstants.motherErrorMsg);
  
    
  }); 
  it("Verify the Error Message in pincode field when user enter invalid Pincode",async() => {
  
    await telecaller.pincodeInput(invalidTestData.telePincode);
    await telecaller.pincodeErrorMsg();
    await expect(await telecaller.pincodeErrorMsg()).to.be.eql(labelConstants.pincodeErrorMsg);
  
    
  }); 
    
});