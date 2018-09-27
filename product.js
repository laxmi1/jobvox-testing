var product = function (){
    var methods = require('./methods.js');
    var accountdropdown = element(by.xpath(".//*[@id='account-name']/a"));
    var POSsettings = element(by.xpath(".//*[@id='account-name']/ul/li[2]/a"));
    var pricing = element(by.xpath("//div[@class='account-name dropdown open']/ul/li[2]/ul/li[2]/a"));
    var products = element(by.css('[href="#/products"]'));
    var newproduct = element(by.partialLinkText('New Product'));
    var name = element(by.xpath("//input[@placeholder='Name']"));
    

    this.create = function (){
        accountdropdown.click();
        POSsettings.click();
        pricing.click();
        products.click();
        browser.sleep(3000);
        // newproduct.click();
        browser.manage().window().setSize(1600, 1024);
        browser.actions().mouseMove(newproduct).click().perform();
        browser.sleep(8000);
        name.sendKeys("ProductName");
    };
};
module.exports = new product();