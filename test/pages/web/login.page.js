const { default: ChromeDriverService } = require("wdio-chromedriver-service");

class login {
    constructor(){
        this.username = "#username";
        this.password = "#password";
        this.loginBtn = "#Login";
    }
async setusername(value){
    $(this.username).setValue(value);
}
async setpassword(value){
    $(this.password).setValue(value);
}
async setloginBtn(value){
    $(this.loginBtn).click();
}
async waitForLoginPageLoad(){
    driver.waitUntil(async()=>{
        return await $(this.username).isDisplayed();
    });
    driver.waitUntil(async()=>{
        return await $(this.password).isDisplayed();
    });
    driver.waitUntil(async()=>{
        return await $(this.loginBtn).isDisplayed();
    });
}
}
module.exports = new login();