var product = function (){
var methods = require('./methods.js');
var accountdropdown = element(by.xpath(".//*[@id='account-name']/a"));
var POSsettings = element(by.xpath(".//*[@id='account-name']/ul/li[2]/a"));
var pricing = element(by.xpath("//div[@class='account-name dropdown open']/ul/li[2]/ul/li[2]/a"));
var products = element(by.css('[href="#/products"]'));
var newproduct = element(by.css('[ng-click="addNewProduct()"]'));
var name = element(by.xpath("//input[@placeholder='Name']"));
var podescription = element(by.xpath("//textarea[@placeholder='PO Description']"));
var type = element(by.css('[name="productTypeId"]'));
var category = element(by.css('[name="categoryId"]'));
var template = element(by.css('[name="uiTemplate"]'));
var buyingcost = element(by.xpath("//span[@label='Buying Cost']//following::div[1]"));
var cost = element(by.xpath("//span[@label='Cost']//following::div[1]"));
var price = element(by.xpath("//span[@label='Price']//following::div[1]"));
var minimumlineprice = element(by.xpath("//span[@label='Minimum Line Price']//following::div[1]"));
var minimumunitprice = element(by.xpath("//span[@label='Minimum Unit Price']//following::div[1]"));
var volumediscount = element(by.css('[name="volumeDiscountId"]'));
var rangediscount = element(by.css('[name="rangeDiscountId"]'));
var incomeaccount = element(by.css('[name="incomeCoaAccountId"]'));
var cogaccount = element(by.css('[name="cogCoaAccountId"]'));
var inhousecommission = element(by.xpath("//span[@label='In House Commission']//following::input[1]"));
var outsourcedcommission = element(by.xpath("//span[@label='Outsourced Commission']//following::input[1]"));
var save = element(by.xpath("//button[@class='submit-button button']"));
var ProductName = "Product "+Date.now();    


this.create = function (){
 browser.executeScript("document.body.style.zoom='90%'");
 accountdropdown.click();
 POSsettings.click();
 pricing.click();
 products.click();
 browser.sleep(3000);
 browser.manage().window().setSize(1600, 1024);
 browser.actions().mouseMove(newproduct).click().perform();
 browser.sleep(8000);
 name.sendKeys(ProductName);

 podescription.isDisplayed().then(function (isVisibled){
 if (isVisibled){
 podescription.sendKeys("Product PO Description for Test Automation");
 } else {
 consol.log("PO Description disabled in forms");	
 }
 });

 methods.selectDropdownbyNum(type,1);
 methods.selectDropdownbyNum(category,1);
 methods.selectDropdownbyNum(template,2);

 buyingcost.clear();
 buyingcost.sendKeys(40);

 cost.clear();
 cost.sendKeys(40);

 price.clear();
 price.sendKeys(40);

 minimumlineprice.isDisplayed().then(function (isVisible){
 if(isVisible){
 minimumlineprice.clear();
 minimumlineprice.sendKeys(10);
 }else{
 console.log('Minimum Line price is disabled in Product Forms');
 }
 });

 minimumunitprice.isDisplayed().then(function (isVisible){
 if(isVisible){
 minimumunitprice.clear();
 minimumunitprice.sendKeys(20);
 }else{
 console.log('Minimum Unit price is disabled in Product Forms');
 }
 });

 volumediscount.isDisplayed().then(function (isVisible){
 if(isVisible){
 methods.selectDropdownbyNum(volumediscount,1);    
 }else {
 console.log('Volume Discount is disabled in Product Forms');    
 }    
 });

 rangediscount.isDisplayed().then(function (isVisible){
 if(isVisible){
 methods.selectDropdownbyNum(rangediscount,1);    
 }else {
 console.log('Range Discount is disabled in Product Forms');    
 }    
 });

 
 methods.selectDropdownbyNum(incomeaccount,1); 
 methods.selectDropdownbyNum(cogaccount,1);

 inhousecommission.isDisplayed().then(function (isVisible){
 if(isVisible){
 inhousecommission.clear();
 inhousecommission.sendKeys("5%");
 }else {
 console.log('In House Commission is disabled in Product Forms');    
 }    
 });

 outsourcedcommission.isDisplayed().then(function (isVisible){
 if(isVisible){
 outsourcedcommission.clear();
 outsourcedcommission("5%");
 }else {
 console.log('In House Commission is disabled in Product Forms');    
 }    
 });

 save.click();
 browser.sleep(3000);
 
}
 this.name = function() {
        return ProductName;
    };
};
module.exports = new product();