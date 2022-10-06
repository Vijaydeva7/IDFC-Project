const util=require("../../../../utils/microservice.util")
const companyListData=require("../../../../test-data/microservice-data/Company_list.json")
const {expect}=require("chai")
require("dotenv").config()

describe("Verify Company List",()=>{
it("Verify whether status code is 200",async function() {
        const response=await util.getApiCall(process.env.ALL_COMPANIES);
        await util.mochaAddContext(this,response);
        await expect(response.status).to.be.eql(200); 
    })

it("Verify the company count",async function() {
        const response=await util.getApiCall(process.env.ALL_COMPANIES);
        await util.mochaAddContext(this,response);
        await expect(response.data.length).to.be.eql(companyListData.companyCount);
    })
})