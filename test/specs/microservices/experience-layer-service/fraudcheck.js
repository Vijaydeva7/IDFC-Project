const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const expLayerData = require("../../../../test-data/microservice-data/experience_layer_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Fraudcheck validation", function () {

   it("Verify whether error responde with valid customer", async function () {
      const response = await util.postApiCall(process.env.FRAUD_CHECK, expLayerData.Fraud_Check.fraudcheckwithvalidcustomer_request);
      await util.mochaAddContext(this, response);

      await expect(response.status).to.be.eql(200);

      await expect(response.data.status).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithvalidcustomer_response.status);
      await expect(response.data.message).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithvalidcustomer_response.message);


   });

   it("Verify whether error responde with customer status as fraud", async function () {
      const response = await util.postApiCall(process.env.FRAUD_CHECK, expLayerData.Fraud_Check.fraudcheckwithvalidstatusfraud_request);

      await util.mochaAddContext(this, response);

      await expect(response.status).to.be.not.eql(200);

       await expect(response.data.status).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithvalidstatusfraud_response.status);
       await expect(response.data.message).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithvalidstatusfraud_response.message);

   });

   it("Verify whether fraud check with error", async function () {

      const response = await util.postApiCall(process.env.FRAUD_CHECK, expLayerData.Fraud_Check.fraudcheckwitherror_request);

      await util.mochaAddContext(this, response);

      await expect(response.status).to.be.not.eql(200);

      await expect(response.data.status).to.be.eql(expLayerData.Fraud_Check.fraudcheckwitherror_response.status);
      await expect(response.data.message).to.be.eql(expLayerData.Fraud_Check.fraudcheckwitherror_response.message);

   });

   it("Verify whether error responde fraud check with delayed", async function () {

      const response = await util.postApiCall(process.env.FRAUD_CHECK, expLayerData.Fraud_Check.fraudcheckwithdelayed_request);

      await util.mochaAddContext(this, response);

      await expect(response.status).to.be.not.eql(200);

      await expect(response.data.status).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithdelayed_response.status);
      await expect(response.data.message).to.be.eql(expLayerData.Fraud_Check.fraudcheckwithdelayed_response.message);

   });

});