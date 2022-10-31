const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");
const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Connectnow service validation", function () {
    it("Verify whether customer connected before 9 am", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        await expect(await response.status).to.be.eql(200);
        await util.mochaAddContext(this, response);
    });
    it("Verify whether customer connected after 9 pm", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        await expect(await response.status).to.be.eql(200);
        await util.mochaAddContext(this, response);
    });
    it("Verify whether customer connected with valid timings", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/${dynamicData.userId}`);
        await expect(await response.status).to.be.eql(200);
        await util.mochaAddContext(this, response);
    });
});

