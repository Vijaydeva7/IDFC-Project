require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const masterData = require("../../../../test-data/microservice-data/master_data.json");

describe("State master validations", function () {
    it("Validate whether state copy", async function () {
        const response = await util.getApiCall(`${process.env.STATE_MASTER}?${masterData.State_Master.StateCopy_request}`);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);

        });
   
});