const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

describe("Fraud Check ", function(){
    it("Verifying Fraud Check with Valid Customer", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it("Customer with Status As Fraud", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it("Verifying Fraud Check with Error", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it("Verifying Fraud Check with Delay", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
})