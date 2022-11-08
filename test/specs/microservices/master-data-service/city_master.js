require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const masterData = require("../../../../test-data/microservice-data/master_data.json");


describe("Master Branch of City", function () {
    it("Get Master branch of City with valid name", async function () {
        const response = await util.getApiCall(`${process.env.CITY_MASTER}?${masterData.City_Master.validStateNameRequest}`);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.length).to.eql(masterData.City_Master.validStateNameResponse.length);
    });

    it("Get Master branch of City without state name", async function () {
        const response = await util.getApiCall(process.env.CITY_MASTER + "?state=");
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(500);
    });

    // it("Get Master branch of City with Two state names", async function () {
    //     const response = await util.getApiCall(process.env.CITY_MASTER + "MAHARASHTRA&KARNATAKA");
    //     await util.mochaAddContext(this, response);

    //     console.log(response);

    //     await expect(response.status).to.be.eql(200);
    //     // await expect(response.data).to.eql(masterData.State_Master.state_master_response);
    // });

    it("Get Master branch of City with invalid state name", async function () {
        const response = await util.getApiCall(`${process.env.CITY_MASTER}?${masterData.City_Master.InvalidStateNameRequest}`);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });
});