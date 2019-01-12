var lineitem = function () {

    var addnewitem = element(by.xpath("//a[@ng_click='addNewLineItem()']"));
    var saveitem = element(by.xpath("//button[@class='button']"));
    
     this.customItem = function () {

        browser.sleep(3000); 
        addnewitem.click();
        element(by.xpath("//input[@placeholder='Name']")).sendKeys("Custom Product"+Date.now());
        element(by.xpath("//textarea[@placeholder='Internal Notes']")).sendKeys("Automation Test Internal Notes");
        element(by.xpath("//input[@placeholder='Total price']")).sendKeys(50);
        saveitem.click();
        element(by.xpath("//a[@class='close']")).click();
        browser.sleep(2000);
    };

    this.productItem = function () {
        
    };

};

module.exports = new lineitem();