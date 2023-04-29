const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const expLayerData = require("../../../../test-data/microservice-data/experience_layer_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Aadhar authentication validation", function () {
    it("Verify whether aadhar authentictication is successful with valid data", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationValidData_request);

        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);

        await expect(response.data.status).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationValidData_response.status);

        await expect(response.data.message).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationValidData_response.message);
    });
    it("Verify whether error response is received with VID", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationVid_request);

        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Verify whether error response is received with incomplete data given as input", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationIncompleteData_request);

        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);

        await expect(response.data.status).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationIncompleteData_response.status);
    });
    it("Verify whether error response is received without client_id data given as input", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationWithoutclient_id_request);

        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationWithoutclient_id_response.status);
    });
    it("Verify whether error response is received with wrong data given as input", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationWrongData_request);

        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationWithoutUid_response.status);
    });
    it("Verify whether error response is received with empty UID given as input", async function () {
        const response = await util.postApiCall(process.env.AADHAR_AUTHENTICATION, expLayerData.Aadhar_Authentication.aadharAuthenticationWithoutUid_request);

        await util.mochaAddContext(this, response);

        console.log(response);

        await expect(response.status).to.be.not.eql(200);
        await expect(response.data.status).to.be.eql(expLayerData.Aadhar_Authentication.aadharAuthenticationWithoutUid_response.status);
    });
});

