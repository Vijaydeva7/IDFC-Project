const { default: ChromeDriverService } = require("wdio-chromedriver-service");

class Login {
    constructor() {
        this.username = "//input[@type='email']";
        this.password = "//input[@name='pw']";
        this.loginBtn = "#Login";
    }
    async setUsername(value) {
        await $(this.username).setValue(value);
    }
    async setPassword(value) {
        await $(this.password).setValue(value);
    }
    async clickLoginBtn() {
        await $(this.loginBtn).click();
    }
    async waitForLoginPageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.username).isDisplayed();
        });
        await driver.waitUntil(async () => {
            return await $(this.password).isDisplayed();
        });
        await driver.waitUntil(async () => {
            return await $(this.loginBtn).isDisplayed();
        });
    }
}
module.exports = new Login();
