const { default: ChromeDriverService } = require("wdio-chromedriver-service");
const welcomePage = require("../../pages/mobile-ui/welcome.page");

describe("Welcome Screen", function () {
    it("Click On Login Btn", async function () {
        await welcomePage.clickStaffLoginBtn();
        await driver.pause(5000);
    });
});