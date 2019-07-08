var invoice = function () {

    var methods = require('./methods.js');
    var customer = require('./customer.js');
    var lineitem = require('./lineitem.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newInvoicelink = element(by.css('[ui-sref="invoices_new"]'));
    var CustomerNameDropdown = element.all(by.css('[class="caret pull-right"]')).first();
    var customerSearch = element.all(by.model('$select.search')).first();
    var CustomerNameSelect = element.all(by.css('[class="ui-select-highlight"]'));
    var title = element(by.xpath("//input[@placeholder='Title']"));
    var about = element(by.xpath("//textarea[@placeholder='About this invoice']"));
    var shippingmethod = element(by.css('[name="shippingMethodId"]'));
    var salesrep = element(by.css('[name="primarySalesRepId"]'));
    var productionmanager = element(by.css('[name="productionManagerId"]'));
    var projectmanager = element(by.css('[name="projectManagerId"]'));
    var estimator = element(by.css('[name="estimatorId"]'));
    var downpayment = element(by.xpath("//input[@placeholder='Downpayment Percent']"));
    var termcode = element(by.css('[name="termCodeId"]'));
    var paymentmethod = element(by.css('[name="paymentMethodId"]'));
    var tax = element(by.css('[name="salesTaxId"]'));
    var customerPO = element(by.xpath("//input[@placeholder='Customer PO']"));
    var customerPOdate = element(by.xpath("//input[@placeholder='Customer PO date']"));
    var shippingtracking = element(by.xpath("//input[@placeholder='Shipping Tracking']"));
    var leadsource = element(by.css('[name="leadSourceId"]'));
    var leadsourcename = element(by.xpath("//input[@placeholder='Lead Source Name']"));
    var site = element(by.xpath("//input[@placeholder='Site']"));
    var save = element(by.xpath(".//*[@id='main-section']/div/div/div[2]/form/div[3]/div/submit-button/button"));
    var addnewitem = element(by.xpath("//a[@ng_click='addNewLineItem()']"));
    var saveitem = element(by.xpath("//button[@class='button']"));
     this.create = function () {0
        plusCreateButton.click();
        newInvoicelink.click();
        var customerName = customer.name();
        CustomerNameDropdown.click();
        customerSearch.sendKeys(customerName);
        CustomerNameSelect.click();
        browser.sleep(3000);
        title.sendKeys("Invoice"+Date.now());

        about.isDisplayed().then(function (isVisible){
        if (isVisible) {
        about.sendKeys("Test description for Invoice");    
        } else {
        console.log('About this description disabled in Invoice Forms');
        }
        });

        shippingmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(shippingmethod,2);    
        }else {
        console.log('Shipping Method is disabled in Invoice Forms');    
        }    
        });
        
        salesrep.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(salesrep,2);    
        }else {
        console.log('Sales rep is disabled in Invoice Forms');    
        }    
        });
        
        productionmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(productionmanager,2);    
        }else {
        console.log('Production manager is disabled in Invoice Forms');    
        }    
        }); 

        projectmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(projectmanager,2);    
        }else {
        console.log('Project manager is disabled in Invoice Forms');    
        }    
        }); 

        estimator.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(estimator,2);    
        }else {
        console.log('Estimator is disabled in Invoice Forms');    
        }    
        }); 
        
        downpayment.isDisplayed().then(function (isVisible){
        if(isVisible){
        downpayment.clear();
        downpayment.sendKeys("50%");    
        }else {
        console.log('Downpayment Percentage is disabled in Invoice Forms');    
        }    
        });

        termcode.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(termcode,2);    
        }else {
        console.log('Term code is disabled in Invoice Forms');    
        }    
        }); 
        
        paymentmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(paymentmethod,2);    
        }else {
        console.log('Payment Method is disabled in Invoice Forms');    
        }    
        });  
        
        tax.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(tax,2);    
        }else {
        console.log('Tax is disabled in Invoice Forms');    
        }    
        }); 

        // customerPO.isDisplayed().then(function (isVisible){
        // if(isVisible){
        // customerPO.sendKeys("Customer-PO-1234");
        // }else {
        // console.log('Customer PO is disabled in Invoice Forms');
        // }
        // });


        shippingtracking.isDisplayed().then(function (isVisible){
        if(isVisible){
        shippingtracking.sendKeys("ID:"+Date.now());   
        }else {
        console.log('Shipping Tracking is disabled in Invoice Forms');    
        }    
        }); 

        leadsource.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(leadsource,2);    
        }else {
        console.log('Leadsource is disabled in Invoice Forms');    
        }    
        });

        leadsourcename.isDisplayed().then(function (isVisible){
        if(isVisible){
        leadsourcename.sendKeys("Lead from Shopvox");
        }else{
        console.log('Lead Source Name is disabled in Invoice Forms');    
        }
        });

        site.isDisplayed().then(function (isVisible){
        if(isVisible){
        site.sendKeys("www.shopvox.com");
        }else{
        console.log('Site is disabled in Invoice Forms');    
        }
        });
        
        
        save.click();
        browser.sleep(3000);

        

        // lineitem.customItem();
        
        // browser.sleep(2000);
    };

};

module.exports = new invoice();