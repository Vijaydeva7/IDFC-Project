const { default: ChromeDriverService } = require("wdio-chromedriver-service");

class CreateAccount {
    constructor() {
        this.mobilenumber = "";
        this.emailid = "";
        this.pannumber = "";
        this.aadharnumber = "";
    }
    async setMobileNumber(value) {
        await $(this.mobilenumber).setValue();
    }
    async setEmailId(value) {
        await $(this.emailid).setValue();
    }
    async setPanNumber(value) {
        await $(this.pannumber).setValue();
    }
    async setAadharNumber(value) {
        await $(this.aadharnumber).setValue();
    }

    async waitForCreateAccountLoad() {
        await driver.waitUntil(async () => {
            return await $(this.mobilenumber).isDisplayed();
        });
        await driver.waitUntil(async () => {
            return await $(this.emailid).isDisplayed();
        });
        await driver.waitUntil(async () => {
            return await $(this.pannumber).isDisplayed();
        });
        await driver.waitUntil(async () => {
            return await $(this.aadharnumber).isDisplayed();
        });
    }
}
module.exports = new CreateAccount();
