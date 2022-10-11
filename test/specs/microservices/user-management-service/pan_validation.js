const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const userManageData = require("../../../../test-data/microservice-data/user_management_service.json");

describe("Validating PAN ", function(){
    it(" Verifying PAN using valid data", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN with blank data", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN without PAN", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN without UserID", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN using incomplete PAN", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN using wrong format", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN using first name only", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    it(" Verifying PAN using first name and last name", async function(){
        const response = await util.postApiCall();
        await util.mochaAddContext(this, response);
    })
    
})