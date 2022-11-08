require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const prodMngtServData = require("../../../../test-data/microservice-data/product_managment_service.json");

describe("Apply Creditcard validation", function () {
    it("Validate whether credit card with valid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.creditcardWithValidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
    });

    it("Validate whether credit card without valid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.creditcardWithoutValidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether credit card with blank data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.creditcardWithBlankData_response);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether credit card without credit type", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.creditcardWithoutCreditType_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether credit card without card details", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.creditcardWithoutCardDetails_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
});