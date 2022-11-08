
const loginPage = require("../../pages/web/login.page");
describe("Login Page",function () {
    it("Set Username", async() => {
        await driver.url("/");
        await loginPage.waitForLoginPageLoad();
        await loginPage.setusername("shraddha@gmail.com");
    });

    it("Set Password", async() => {
       await loginPage.setpassword("abcd123")
    });


    it("Click Login Button", async() => {
        await loginPage.setloginBtn();
    });
});

