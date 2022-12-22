const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Mobile Dedupe ", function () {
    it(" Check with valid Mobile Number", async function () {
        const response = await util.postApiCall(process.env.MOBILE_DEDUPE,userManageData.Mobile_Dedupe.ValidMobile_Request);
        await util.mochaAddContext(this, response);

        console.log(response)

        await expect(response.status).to.be.eql(200);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Dedupe.ValidMobile_Response.message)
    });
    it(" Check with Invalid Mobile Number", async function () {
        const response = await util.postApiCall(process.env.MOBILE_DEDUPE,userManageData.Mobile_Dedupe.InvalidMobile_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Dedupe.InvalidMobile_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Dedupe.InvalidMobile_Response.message);
    });
    it(" Check with Blank details", async function () {
        const response = await util.postApiCall(process.env.MOBILE_DEDUPE,userManageData.Mobile_Dedupe.BlankDetails_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });

    it(" Check without card type detail", async function () {
        const response = await util.postApiCall(process.env.MOBILE_DEDUPE,userManageData.Mobile_Dedupe.WithoutCardType_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });

    it(" Check without Refferal Code", async function () {
        const response = await util.postApiCall(process.env.MOBILE_DEDUPE,userManageData.Mobile_Dedupe.WithoutCardType_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    });

});