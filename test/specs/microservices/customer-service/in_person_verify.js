const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("In Person validation", function () {
    it("Verify whether IPV when shedule later is done", async function () {
        customerSerData.In_Person_Verify.IPVwhenSheduleLaterisDone_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.IN_PERSON_VERIFY, customerSerData.In_Person_Verify.IPVwhenSheduleLaterisDone_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether IPV in transaction freeze", async function () {
        customerSerData.In_Person_Verify.IPVTransactionFreeze_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.IN_PERSON_VERIFY, customerSerData.In_Person_Verify.IPVTransactionFreeze_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether IPV when BOC rejected", async function () {
        customerSerData.In_Person_Verify.IPVwhenBOCrejected_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.IN_PERSON_VERIFY, customerSerData.In_Person_Verify.IPVwhenBOCrejected_request);
        await util.mochaAddContext(this, response);
    });
});

