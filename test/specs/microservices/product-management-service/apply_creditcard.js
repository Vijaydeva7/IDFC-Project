require("dotenv").config();
const { expect } = require("chai");
const util = require("../../../../utils/microservice.util");
const prodMngtServData = require("../../../../test-data/microservice-data/product_managment_service.json");

const dynamicData = require("../../../../test-data/microservice-data/dynamic_data.json");

describe("Apply Credit card validation", function () {
    it("Validate whether Credit card api is giving success response with valid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.validData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.be.eql(200);
        
    });
    
        
    it("Validate whether Credit card api is giving error with Invalid data", async function () {
        const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.InvalidData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
        
    });
   it("Validate whether Credit card api is giving error with blank data", async function () {
    const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.BlankData_request);
        await util.mochaAddContext(this, response);
        await expect(response.status).to.not.eql(200);
       
    });
   
   it("Validate whether Credit card api is giving error with empty Card Type data", async function () {
    const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.WithoutCardType_request);
    await util.mochaAddContext(this, response);
    await expect(response.status).to.not.eql(200);
    
   });
   it("Validate whether Credit card api is giving error with empty Card details data", async function () {
    const response = await util.postApiCall(process.env.APPLY_CREDITCARD, prodMngtServData.Apply_Creditcard.WithoutCardDetails_request);
    await util.mochaAddContext(this, response);
    await expect(response.status).to.not.eql(200);
    
   })

});