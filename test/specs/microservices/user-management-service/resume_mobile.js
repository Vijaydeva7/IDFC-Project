const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");


describe("Mobile Verification", function () {
    it("Check if mobile number is valid", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.validMobileNumber_Request);
        await util.mochaAddContext(this, response);

        console.log(response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.validMobileNumber_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.validMobileNumber_Response.message);
    });

    it("Check if mobile number is having more than 10 digits", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.MobileNumberMoreThanTenDigit_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.MobileNumberMoreThanTenDigit_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.MobileNumberMoreThanTenDigit_Response.message);
    });

    it("Check if we get TRUE response for customer dropped journey with help of mobile number", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.WhenDroppedJourneyTrue_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.WhenDroppedJourneyTrue_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.WhenDroppedJourneyTrue_Response.message);
    });

    it("Check if we get FALSE response for customer dropped journey with help of mobile number", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.WhenDroppedJourneyFalse_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.WhenDroppedJourneyFalse_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.WhenDroppedJourneyFalse_Response.message);
    });

    it("Verifying without mobile number", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.WithoutMobileNumber_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.WithoutMobileNumber_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.WithoutMobileNumber_Response.message);
    });

    it("Check if mobile number contains Character", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.MobileWithCharcters_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.MobileWithCharcters_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.MobileWithCharcters_Response.message);
    });

    it("Check if mobile number has all digits zero", async function () {
        const response = await util.postApiCall(process.env.MOBILE_VERIFY, userManageData.Mobile_Verification.MobileAsAllZeroNumbers_Request);
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
        await expect(response.data.status).to.be.eql(userManageData.Mobile_Verification.MobileAsAllZeroNumbers_Response.status);
        await expect(response.data.message).to.be.eql(userManageData.Mobile_Verification.MobileAsAllZeroNumbers_Response.message);
    });
});
