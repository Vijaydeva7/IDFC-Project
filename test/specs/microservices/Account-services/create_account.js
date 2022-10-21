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
   });
   it("Verify whether account create with fraud not passeddata ", async function () {
      accServiceData.Create_Account.createAccountWithfraudnotPassedData_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithfraudnotPassedData_request);
      await util.mochaAddContext(this, response);
   });
   it("Verify whether account create with self serviceable ", async function () {
      accServiceData.Create_Account.createAccountWithSelfServiceable_request_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithSelfServiceable_request);
      await util.mochaAddContext(this, response);

   });
   it("Verify whether account create with preferred branch  ", async function () {
      accServiceData.Create_Account.createAccountWithPreferredBranch_request_request.userId = dynamicData.userId;
      const response = await util.postApiCall(process.env.ACCOUNT_SERVICE, accServiceData.Create_Account.createAccountWithPreferredBranch_request);
      await util.mochaAddContext(this, response);
   });
});