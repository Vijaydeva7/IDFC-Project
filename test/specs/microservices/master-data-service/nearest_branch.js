require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const masterData = require("../../../../test-data/microservice-data/master_data.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Nearest branch validations", function () {
    it("Validate whether getting list of nearest branches with valid pincode", async function () {
        const response = await util.getApiCall(`${process.env.NEAREST_BRANCH}?${masterData.Nearest_Branch.validPincode_request}`);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.defaultBranchDetails).to.eql(masterData.Nearest_Branch.validPincode_response.defaultBranchDetails);
    });

    it("Validate whether getting error response with empty pincode", async function () {
        const response = await util.getApiCall(`${process.env.NEAREST_BRANCH}?${masterData.Nearest_Branch.emptyPincode_request}`);
        await util.mochaAddContext(this, response);

        console.log(response);
        await expect(response.status).to.not.eql(200);
        await expect(response.data).to.equal(undefined);
    });

    it("Validate whether getting success response but not getting list of branches with invalid pincode", async function () {
        const response = await util.getApiCall(`${process.env.NEAREST_BRANCH}?${masterData.Nearest_Branch.invalidPincode_request}`);
        await util.mochaAddContext(this, response);
        
        await expect(response.status).to.be.eql(200);
        await expect(response.data.message).to.be.eql(masterData.Nearest_Branch.invalidPincode_response.message);
    });
});