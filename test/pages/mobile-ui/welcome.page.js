class Welcome {
    constructor() {
        this.staffLoginBtn = "~staff_login";
    }

    async clickStaffLoginBtn() {
        await $(this.staffLoginBtn).click();
    }
}
module.exports = new Welcome();