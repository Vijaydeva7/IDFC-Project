const { expect } = require("chai");
require("dotenv").config();
const util = require("../../../../utils/microservice.util");
const customerSerData = require("../../../../test-data/microservice-data/customer_service.json");

describe("Connectnow service validation", function () {
    it("Verify whether customer connected before 9 am", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/3230`); 

        await util.mochaAddContext(this, response);

       
    });

    it("Verify whether customer connected after 9 pm", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/107`);

        await util.mochaAddContext(this, response);

       
    });

    it("Verify whether customer connected with valid timings", async function () {
        const response = await util.getApiCall(`${process.env.CONNECT_NOW}/107`);

        await util.mochaAddContext(this, response);

    });
   
   
});

