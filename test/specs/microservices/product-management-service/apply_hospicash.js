require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const prodMngtServData = require("../../../../test-data/microservice-data/product_managment_service.json");
const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");

describe("Apply HospiCash validation", function () {
    it("Validate whether hospi cash api is giving success response with valid data", async function () {
        prodMngtServData.Apply_Hospicash.validHospicash_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.HOSPI_CASH, prodMngtServData.Apply_Hospicash.validHospicash_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.refNum).to.be.not.empty;
    });
    it("Validate whether hospi cash api is giving error without userid", async function () {
        prodMngtServData.Apply_Hospicash.hospicash_withoutuserid_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.HOSPI_CASH, prodMngtServData.Apply_Hospicash.hospicash_withoutuserid_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
        await expect(response.data.refNum).to.be.empty;
    });
    it("Validate whether hospi cash api is giving error without hospicash details", async function () {
        prodMngtServData.Apply_Hospicash.without_hospicashdetails_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.HOSPI_CASH, prodMngtServData.Apply_Hospicash.without_hospicashdetails_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
        await expect(response.data.refNum).to.be.empty;
    });
    it("Validate whether hospi cash api is giving error with invalid details", async function () {
        prodMngtServData.Apply_Hospicash.invalid_hospicashdetails_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.HOSPI_CASH, prodMngtServData.Apply_Hospicash.invalid_hospicashdetails_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
        await expect(response.data.refNum).to.be.empty;
    });
    it("Validate whether hospi cash api is giving error with blank details", async function () {
        prodMngtServData.Apply_Hospicash.Blank_hospicashdetails_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.HOSPI_CASH, prodMngtServData.Apply_Hospicash.Blank_hospicashdetails_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
        await expect(response.data.refNum).to.be.empty;
    });
});