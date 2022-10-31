const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

describe("Cheque pickup validation", function () {
    it("Verify whether cheque pickup with valid user id", async function () {
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.Cheque_pickup.chequePickupWithValidUserId_request);

        await util.mochaAddContext(this, response);

       
    });

    it("Verify whether cheque pickup expired user id", async function () {
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.Cheque_pickup.chequePickupWithExpiredUserId_request);

        await util.mochaAddContext(this, response);

       
    });

    it("Verify whether cheque pickup without user id", async function () {
        const response = await util.postApiCall(process.env.CHEQUE_PICKUP, customerSerData.Cheque_pickup.chequePickupWithoutUserId_request);

        await util.mochaAddContext(this, response);

    });
   
   
});

