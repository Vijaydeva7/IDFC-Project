const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Cheque Pickup Service validation", function () {
    it("Validate whether Cheque Pickup is giving success response with valid data", async function () {
        customerSerData.CHEQUE_PICKUP.ChequePickUpWithValidUserId_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.CHEQUE_PICKUP.ChequePickUpWithValidUserId_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
    });
    it("Validate whether Cheque Pickup is giving error response with session expired user id", async function () {
        customerSerData.CHEQUE_PICKUP.ChequePickUpWithsessionexpiredUserId_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.CHEQUE_PICKUP.ChequePickUpWithsessionexpiredUserId_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
    it("Validate whether Cheque Pickup is giving error response without user id", async function () {
        customerSerData.CHEQUE_PICKUP.ChequePickUpWithoutUserId_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.CHEQUE_PICKUP.ChequePickUpWithoutUserId_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
    } 

    )

