const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Validating PAN ", function () {
    it(" Verifying PAN using valid data", async function () {

        const response = await util.postApiCall(process.env.PAN_VALIDATION,userManageData.PAN_Validation.VerifyPANUsingValidData_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.message).to.be.eql(userManageData.PAN_Validation.VerifyPANUsingValidData_Response.message);
    });
    // it(" Verifying PAN with blank data", async function () {
    //     const response = await util.postApiCall();
    //     await util.mochaAddContext(this, response);
    // });
    it(" Verifying PAN without PAN", async function () {
        const response = await util.postApiCall(process.env.PAN_VALIDATION,userManageData.PAN_Validation.VerifyPANWithoutPAN_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.message).to.be.eql(userManageData.PAN_Validation.VerifyPANWithoutPAN_Response.message);
    });
    // it(" Verifying PAN without UserID", async function () {
    //     const response = await util.postApiCall();
    //     await util.mochaAddContext(this, response);
    // });
    it(" Verifying PAN using incomplete PAN", async function () {
        const response = await util.postApiCall(process.env.PAN_VALIDATION,userManageData.PAN_Validation.VerifyPANWithIncompletePAN_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.message).to.be.eql(userManageData.PAN_Validation.VerifyPANWithIncompletePAN_Response.message);
    });
    // it(" Verifying PAN using wrong format", async function () {
    //     const response = await util.postApiCall();
    //     await util.mochaAddContext(this, response);
    // });
    // it(" Verifying PAN using first name only", async function () {
    //     const response = await util.postApiCall();
    //     await util.mochaAddContext(this, response);
    // });
    // it(" Verifying PAN using first name and last name", async function () {
    //     const response = await util.postApiCall();
    //     await util.mochaAddContext(this, response);
    // });

});