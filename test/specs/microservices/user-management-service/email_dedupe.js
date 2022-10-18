const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

describe("Email Dedupe ", function(){
    it(" Check with valid Email ID", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check with Email ID without domain", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check with duplicate Email ID", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check without mobile number", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check without Email ID", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check without Referal Code", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    it(" Check with incorrect Referal Code", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);

        await expect(response.status).to.be.eql(200);
    })
    
})