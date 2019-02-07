var product = function (){
	var methods = require('./methods.js');
	var accountdropdown = element(by.xpath(".//*[@id='account-name']/a"));
	var POSsettings = element(by.xpath(".//*[@id='account-name']/ul/li[2]/a"));
	var pricing = element(by.xpath("//div[@class='account-name dropdown open']/ul/li[2]/ul/li[2]/a"));
	var products = element(by.css('[href="#/products"]'));
	var newproduct = element(by.css('[ng-click="addNewProduct()"]'));
	var name = element(by.xpath("//input[@placeholder='Name']"));
	var podescription = element(by.xpath("//textarea[@placeholder='PO Description']"));
	var type = element(by.xpath("//select[@name='productTypeId']"));
	var category = element(by.xpath("//select[@name='categoryId']"));
	var template = element(by.xpath("//select[@name='uiTemplate']"));
	var buyingcost = element(by.xpath("//span[@label='Buying Cost']//following::div[1]//input"));
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
        methods.selectDropdownbyNum(type,3);
		methods.selectDropdownbyNum(category,1);
		methods.selectDropdownbyNum(template,1);
		buyingcost.sendKeys(40.00);
		methods.selectDropdownbyNum(incomeaccount,1);
		methods.selectDropdownbyNum(cogaccount,1);
		browser.sleep(4000);

		save.click();
		browser.sleep(8000);
	};
	    this.name = function() {
	    return ProductName;
	};

};
module.exports = new product();