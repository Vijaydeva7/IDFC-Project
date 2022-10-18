const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

describe("Mobile Dedupe ", function(){
    it(" Check with valid Mobile Number", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check with Invalid Mobile Number", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check with Blank details", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check without card type detail", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    
})