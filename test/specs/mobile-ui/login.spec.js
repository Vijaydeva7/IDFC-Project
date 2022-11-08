
const loginPage = require("../../pages/mobile-ui/login.page");

describe("Login Page", function () {
    it("Set Username", async function () {
        await loginPage.setUsername("");
    });
    it("Set Password", async function () {
        await loginPage.setUsername("");
    });
    it("Click Login Btn", async function () {
        await loginPage.clickLoginBtn();
    });
});