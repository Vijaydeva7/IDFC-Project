require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const prodMngtServData = require("../../../../test-data/microservice-data/product_managment_service.json");

describe("Apply Hospicash validation", function () {
    it("Validate whether hospicash with valid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_HOSPICASH, prodMngtServData.Apply_Hospicash.hospicashValiddata_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
    });

    it("Validate whether hospicash without userid", async function () {
        const response = await util.postApiCall(process.env.APPLY_HOSPICASH, prodMngtServData.Apply_Hospicash.hospicashWithoutUserid_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether hospicash without hospicash details", async function () {
        const response = await util.postApiCall(process.env.APPLY_HOSPICASH, prodMngtServData.Apply_Hospicash.hospicashWithoutHospicashDetails_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether hospicash with invalid details", async function () {
        const response = await util.postApiCall(process.env.APPLY_HOSPICASH, prodMngtServData.Apply_Hospicash.hospicashWithInvalidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });

    it("Validate whether apply hospicash with blank details", async function () {
        const response = await util.postApiCall(process.env.APPLY_HOSPICASH, prodMngtServData.Apply_Hospicash.hospicashWithBlankData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
});