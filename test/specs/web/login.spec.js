const loginPage = require("../../pages/web/login.page");

describe("Login Page", function () {
    it("Set Username", async () => {
        await driver.url("/");
        await loginPage.waitForLoginPageLoad();
        await loginPage.setUsername("manju_n@persistent.com.ca.qa");
    });
    it("Set Password", async () => {
        await loginPage.setPassword("idfc@123");
    });
    it("Click Login Button", async () => {
        await loginPage.clickLoginBtn();
    });
});
