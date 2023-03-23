class Cshomepage {
    constructor(){
        this.basicDetailHeading = "//*[text()='Open a zero balance salary account to unlock power-packed benefits']";
        this.mobileNumber = '//*[@name="mobileNumber"]';
        this.header = '//*[@class="sc-hMYwuu dphcip"]';
        this.body = '//*[@class="sc-bIXA-dS QjUFe"]';
        this.footer = '//*[@class="sc-gVOZWk dzQtON"]';







      
    }

    async waitUntilHomepageLoad() {
        await driver.waitUntil(async () => {
            return await $(this.basicDetailHeading).isDisplayed() == true;
        });
        await driver.waitUntil(async () => {
            return await $(this.mobileNumber).isDisplayed() == true;
        });
    }

    async pageHeader(){
        return await $(this.header).isDisplayed();
    }
    async pageBody(){
        return await $(this.body).isDisplayed();
    }
    async pageFooter(){
    return await $(this.footer).isDisplayed();
    }

}
module.exports = new Cshomepage();       