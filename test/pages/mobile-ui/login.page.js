class Login {
    constructor() {
        this.username = "";
        this.password = "";
        this.loginBtn = "";
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
}
module.exports = new Login();