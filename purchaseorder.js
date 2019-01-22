var purchaseorder = function () {

    var methods = require('./methods.js');
    var vendor = require('./vendor.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newPurchaseorderlink = element(by.css('[ui-sref="purchase_orders_new"]'));
    var title = element(by.xpath("//input[@placeholder='Title']"));
    var aboutthispo = element(by.xpath("//textarea[@placeholder='About this PO']"));
    var VendorNameDropdown = element.all(by.css('[class="caret pull-right"]')).first();
    var vendorSearch = element.all(by.model('$select.search')).first();
    var VendorrNameSelect = element.all(by.css('[class="ui-select-highlight"]'));
    var paymentmethod = element(by.css('[name="paymentMethodId"]'));
    var termcode = element(by.css('[name="termCodeId"]'));
    var tax = element(by.css('[name="salesTaxId"]'));
    var shippingmethod = element(by.css('[name="shippingMethodId"]'));
    var save = element(by.xpath("//button[@role='button']"));
     this.create = function () {0
        plusCreateButton.click();
        newPurchaseorderlink.click();
        title.sendKeys("purchaseorder"+Date.now());

        aboutthispo.isDisplayed().then(function (isVisible){
        if (isVisible) {
        aboutthispo.sendKeys("Test about purchaseorder");    
        }
        });

        paymentmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(paymentmethod,2);    
        }else {
        console.log('Payment Method is disabled in purchaseorder Forms');    
        }    
        });

        termcode.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(termcode,2);    
        }else {
        console.log('Term code is disabled in Quote Forms');    
        }    
        });

        tax.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(tax,2);    
        }else {
        console.log('Tax is disabled in purchaseorder Forms');    
        }    
        });

        var vendorName = vendor.name();
        VendorNameDropdown.click();
        vendorSearch.sendKeys(vendorName);
        VendorrNameSelect.click();
        browser.sleep(4000);

        shippingmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(shippingmethod,2);    
        }else {
        console.log('Shipping Method is disabled in purchaseorder Forms');    
        }    
        });
        
        
        save.click();
        browser.sleep(12000);
    };

};

module.exports = new purchaseorder();