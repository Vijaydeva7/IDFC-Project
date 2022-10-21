const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Shedule later Service validation", function () {
    it("Verify whether shedule later with valid data", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithValidData_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether shedule later without timing", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithoutTiming_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether shedule later without date", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithoutDate_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether shedule later with blank data", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithBlankData_request);
        await util.mochaAddContext(this, response);
    });
    it("Verify whether shedule later with previous date", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithPreviousDate_request);
        await util.mochaAddContext(this, response);
    });

    it("Verify whether shedule later with slot after two days", async function () {
        const response = await util.postApiCall(process.env.SHEDULE_LATER, customerSerData.Shedule_Later.sheduleLaterwithSlotAfterTwodays_request);
        await util.mochaAddContext(this, response);
    });
});

