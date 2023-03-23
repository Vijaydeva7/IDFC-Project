const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const expLayerData = require("../../../../test-data/microservice-data/experience_layer_service.json");


const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Aadhar OTP Validation", function () {
    it("Validating Aadhar by OTP with Valid Data", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.AOVWithValidData_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Validating Aadhar by OTP with Blank Data", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.BlankData_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Validating Aadhar with Wrong OTP", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.AadhaarWithWrongOTP_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Validating Aadhar by without Mobile", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.WithoutMobile_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Validating Aadhar by OTP without OTP TxnID", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.WithoutOtpTxnId_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
    it("Validating Aadhar by OTP without OTP and UID", async function () {
        const response = await util.postApiCall(process.env.AADHAR_VALIDATE, expLayerData.Aadhar_Otp_Validation.WithoutUid_request);
        console.log(response);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
});