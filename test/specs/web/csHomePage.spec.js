const cshomepage = require("../../pages/web/csHome.page.js");

const { expect } = require("chai");
//const validTestData = require("../../../test-data/web/valid_test_data.json");
const invalidTestData = require("../../../test-data/web/invalid_test_data.json");
const validTestData = require("../../../test-data/web/valid_test_data.json");
const labelConstants = require("../../../test-data/web/label_constants.json");
// const { getMobileNumber, grossIncome } = require("../../pages/web/homepage.page");

describe("corporate salary page Validation : ", () => {

    it("Validate whether To check UI of header body and footer section of landing page.", async () => {
        await driver.url("/apply/salary");
        await driver.maximizeWindow();
        // await driver.pause(10000);
        await cshomepage.waitUntilHomepageLoad();
        await driver.pause(2000);
        await expect(await cshomepage.pageHeader()).to.be.eql(true);
        await expect(await cshomepage.pageBody()).to.be.eql(true);
        await expect(await cshomepage.pageFooter()).to.be.eql(true);

    });

    it("", async () => {
        
    })



});
