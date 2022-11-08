require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const masterData = require("../../../../test-data/microservice-data/master_data.json");


describe("Master Branch of State", function () {
    it("Get Master branch of respective state", async function () {
        const response = await util.getApiCall(process.env.STATE_MASTER);
        await util.mochaAddContext(this, response);

        console.log(response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data).to.eql(masterData.State_Master.state_master_response);
    });
});