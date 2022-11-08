require("dotenv").config();
const { expect } = require("chai");
const util = require("./../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

describe("Get User Info", function(){
    it("Get User Info with valid Data", async function(){
        const response = util.getApiCall(`${process.env.USER_INFO}/3230`);
        await util.mochaAddContext(this,response);
        await expect(response.status).to.be.eql(200);
    })
    it("Get User Info without User ID", async function(){
        const response = util.getApiCall(`${process.env.USER_INFO}/`);
        await util.mochaAddContext(this,response);
        await expect(response.status).to.be.eql(200);
    })
    it("Get User Info with String Data", async function(){
        const response = util.getApiCall(`${process.env.USER_INFO}/Anand`);
        await util.mochaAddContext(this,response);
        await expect(response.status).to.be.eql(200);
    })
    it("Get User Info with Blank Data", async function(){
        const response = util.getApiCall(`${process.env.USER_INFO}/`);
        await util.mochaAddContext(this,response);
        await expect(response.status).to.be.eql(200);
    })
})