require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const prodMngtServData = require("../../../../test-data/microservice-data/product_managment_service.json");

describe("Apply Cross sell validation", function () {
    it("Validate whether cross sell api is giving success response with valid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CROSSSELL, prodMngtServData.Apply_Crosssell.validData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
    });
    it("Validate whether cross sell api is giving error with empty userid", async function () {
        const response = await util.postApiCall(process.env.APPLY_CROSSSELL, prodMngtServData.Apply_Crosssell.withoutUserId_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
    it("Validate whether cross sell api is giving error with empty product code", async function () {
        const response = await util.postApiCall(process.env.APPLY_CROSSSELL, prodMngtServData.Apply_Crosssell.withoutProductType_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
    it("Validate whether cross sell api is giving error with invalid input", async function () {
        const response = await util.postApiCall(process.env.APPLY_CROSSSELL, prodMngtServData.Apply_Crosssell.invalidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
    it("Validate whether cross sell api is giving error with black data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CROSSSELL, prodMngtServData.Apply_Crosssell.blankData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
    });
});