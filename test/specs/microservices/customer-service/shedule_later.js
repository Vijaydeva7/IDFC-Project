const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");
const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Shedule later Service validation", function () {
    it("Verify whether shedule later with valid data", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithValidData_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithValidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.not.empty;
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithValidData_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithValidData_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithValidData_response.responseCd);

    });

    it("Verify whether shedule later without timing", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithoutTiming_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithoutTiming_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutTiming_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutTiming_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutTiming_response.responseCd);
    });

    it("Verify whether shedule later without date", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithoutDate_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithoutDate_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutDate_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutDate_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithoutDate_response.responseCd);
    });

    it("Verify whether shedule later with blank data", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithBlankData_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithBlankData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithBlankData_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithBlankData_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithBlankData_response.responseCd);
    });
    it("Verify whether shedule later with previous date", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_response.responseCd);
    });

    it("Verify whether shedule later with slot after two days", async function () {
        customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_request.userId = dynamicData.userId;
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_response.status);
        await expect(response.data.message).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_response.message);
        await expect(response.data.responseCd).to.be.eql(customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_response.responseCd);
    });
});

