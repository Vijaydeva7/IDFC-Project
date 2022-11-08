const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");
const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Connectnow service validation", function () {
    it("Verify whether customer connected before 9 am", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        
        await util.mochaAddContext(this, response);

        await expect(await response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(dynamicData.Connect_Now.connectNowBefore9am_response.status);
        await expect(response.data.message).to.be.eql(dynamicData.Connect_Now.connectNowBefore9am_response.message);
        
    });
    it("Verify whether customer connected after 9 pm", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        
        await util.mochaAddContext(this, response);

        await expect(await response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(dynamicData.Connect_Now.connectNowAfter9pm_reresponse.status);
        await expect(response.data.message).to.be.eql(dynamicData.Connect_Now.connectNowAfter9pm_reresponse.message);
        
    });
    it("Verify whether customer connected with valid timings", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        
        await util.mochaAddContext(this, response);

        await expect(await response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(dynamicData.Connect_Now.connectNowValidTiming_response.status);
        await expect(response.data.message).to.be.eql(dynamicData.Connect_Now.connectNowValidTiming_response.message);
        
    });
});

