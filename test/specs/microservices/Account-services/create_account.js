const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const accServiceData = require("../../../../test-data/microservice-data/account_service.json");
const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Account Service Validation", function () {  

   it("Verify whether account create with vannilaFlow", async function () {
      accServiceData.Create_Account.createAccountWithVannilaFlow_request.userId = dynamicData.userId;

      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithVannilaFlow_request);
      await util.mochaAddContext(this, response);

      console.log(response);

      await expect(await response.status).to.be.eql(200);
      await expect(response.data.status).to.be.eql(accServiceData.Create_Account.createAccountWithVannilaFlow_response.status);
      // await expect(response.data.message).to.be.eql(accServiceData.Create_Account.createAccountWithVannilaFlow_response.responseCd);
      
   });
   it("Verify whether account create with fraud not passed data ", async function () {
      accServiceData.Create_Account.createAccountWithfraudnotPassedData_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithfraudnotPassedData_request);
      await util.mochaAddContext(this, response);

      await expect(await response.status).to.be.eql(200);
      await expect(response.data.status).to.be.eql(accServiceData.Create_Account.createAccountWithfraudnotPassedData_response.status);
      // await expect(response.data.responseCd).to.be.eql(accServiceData.Create_Account.createAccountWithfraudnotPassedData_response.responseCd);
      
   });
   it("Verify whether account create with self serviceable ", async function () {
      accServiceData.Create_Account.createAccountWithSelfServiceable_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithSelfServiceable_request);
      await util.mochaAddContext(this, response);

      await expect(await response.status).to.be.eql(200);
      await expect(response.data.status).to.be.eql(accServiceData.Create_Account.createAccountWithSelfServiceable_response.status);
      // await expect(response.data.responseCd).to.be.eql(accServiceData.Create_Account.createAccountWithSelfServiceable_response.responseCd);
      

   });
   it("Verify whether account create with preferred branch  ", async function () {
      accServiceData.Create_Account.createAccountWithPreferredBranch_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithPreferredBranch_request);
      await util.mochaAddContext(this, response);

      await expect(await response.status).to.be.eql(200);
      await expect(response.data.status).to.be.eql(accServiceData.Create_Account.createAccountWithPreferredBranch_response.status);
      // await expect(response.data.responseCd).to.be.eql(accServiceData.Create_Account.createAccountWithPreferredBranch_response.responseCd);
      
   });
});