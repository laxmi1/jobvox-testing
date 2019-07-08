var job = function () {

    var methods = require('./methods.js');
    var customer = require('./customer.js');
    var plusCreateButton = element(by.partialButtonText('Create'));    
    var newJoblink = element(by.xpath("//a[@ui-sref='jobs_new']"));   
    var CustomerNameDropdown = element.all(by.css('[class="caret pull-right"]')).first();
    var customerSearch=element.all(by.xpath("//input[@placeholder='Select customer...']")).first();
    var CustomerNameSelect = element.all(by.css('[class="ui-select-highlight"]'));
    var name = element(by.xpath("//input[@placeholder='Name']"));    
    var description = element(by.xpath("//textarea[@placeholder='Description']"));    
    var quantity = element(by.xpath("//input[@placeholder='Quantity']"));
    var qtycompleted = element(by.xpath("//input[@placeholder='Qty Completed']"));
    var design = element(by.xpath("//textarea[@placeholder='Design']"));
    var production  = element(by.xpath("//textarea[@placeholder='Production']"));
    var shipping  = element(by.xpath("//textarea[@placeholder='Shipping']"));
    var install  = element(by.xpath("//textarea[@placeholder='Install']"));
    var productionmanager = element(by.css('[name="productionManagerId"]'));
    var projectmanager = element(by.css('[name="projectManagerId"]'));
    var salesrep = element(by.css('[name="salesRepId"]'));
    var shippingmethod = element(by.css('[name="shippingMethodId"]'));
    var save = element(by.xpath("//button[@class='submit-button button']"));

    var createjobsoli = element(by.xpath("//a[@ng_click='addNewLineItem()']//following::a[6]"));
    var saveandshow = element(by.xpath("//submit-button[@label='Save & Show Job']"));
    var closeshowjob = element(by.xpath("//i[@name='close']"));

     this.create = function () {
        plusCreateButton.click();
        newJoblink.click();
        var customerName = customer.name();
        CustomerNameDropdown.click();
        customerSearch.sendKeys(customerName);
        CustomerNameSelect.click();
        browser.sleep(3000);
        name.sendKeys("Job"+Date.now());

        description.isDisplayed().then(function (isVisible){
        if (isVisible) {
        description.sendKeys("Test description for Job");    
        } else {
        console.log('Description is disabled in Job Forms');
        }
        });

        // po#.isDisplayed().then(function (isVisible){
        // if(isVisible){
        // po#.sendKeys("PO Number");
        // }else {
        // console.log('PO# is disabled in Job Forms');    
        // }    
        // });

        quantity.isDisplayed().then(function (isVisible){
        if(isVisible){
        quantity.sendKeys("66");   
        }else {
        console.log('quantity is disabled in Job Forms');    
        }    
        });

        qtycompleted.isDisplayed().then(function (isVisible){
        if(isVisible){
        qtycompleted.sendKeys("1");   
        }else {
        console.log('qtycompleted is disabled in Job Forms');    
        }    
        });

        design.isDisplayed().then(function (isVisible){
        if(isVisible){
        design.sendKeys("Test design details");   
        }else {
        console.log('design is disabled in Job Forms');    
        }    
        });

        production.isDisplayed().then(function (isVisible){
        if(isVisible){
        production.sendKeys("Test production details");   
        }else {
        console.log('production is disabled in Job Forms');    
        }    
        });

        shipping.isDisplayed().then(function (isVisible){
        if(isVisible){
        shipping.sendKeys("Test shipping details");   
        }else {
        console.log('shipping is disabled in Job Forms');    
        }    
        });

        install.isDisplayed().then(function (isVisible){
        if(isVisible){
        install.sendKeys("Test install details");   
        }else {
        console.log('install is disabled in Job Forms');    
        }    
        });
        
        productionmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(productionmanager,2);    
        }else {
        console.log('Production manager is disabled in Job Forms');    
        }    
        }); 

        projectmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(projectmanager,2);    
        }else {
        console.log('Project manager is disabled in Job Forms');    
        }    
        }); 

        salesrep.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(salesrep,2);    
        }else {
        console.log('Sales rep is disabled in Job Forms');    
        }    
        }); 
        
        shippingmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(shippingmethod,2);    
        }else {
        console.log('Shipping Method is disabled in job Forms');    
        }    
        });
        
        
        save.click();
        browser.sleep(8000);
    };

    this.createjobli = function() {

        createjobsoli.click();
        browser.sleep(2000);
        qtycompleted.isDisplayed().then(function (isVisible){
        if(isVisible){
        qtycompleted.sendKeys("1");   
        }else {
        console.log('qtycompleted is disabled in Job Forms');    
        }    
        });

        design.isDisplayed().then(function (isVisible){
        if(isVisible){
        design.sendKeys("Test design details");   
        }else {
        console.log('design is disabled in Job Forms');    
        }    
        });

        production.isDisplayed().then(function (isVisible){
        if(isVisible){
        production.sendKeys("Test production details");   
        }else {
        console.log('production is disabled in Job Forms');    
        }    
        });

        shipping.isDisplayed().then(function (isVisible){
        if(isVisible){
        shipping.sendKeys("Test shipping details");   
        }else {
        console.log('shipping is disabled in Job Forms');    
        }    
        });

        install.isDisplayed().then(function (isVisible){
        if(isVisible){
        install.sendKeys("Test install details");   
        }else {
        console.log('install is disabled in Job Forms');    
        }    
        });
        
        productionmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(productionmanager,2);    
        }else {
        console.log('Production manager is disabled in Job Forms');    
        }    
        }); 

        projectmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(projectmanager,2);    
        }else {
        console.log('Project manager is disabled in Job Forms');    
        }    
        }); 

        salesrep.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(salesrep,2);    
        }else {
        console.log('Sales rep is disabled in Job Forms');    
        }    
        }); 
        
        shippingmethod.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(shippingmethod,2);    
        }else {
        console.log('Shipping Method is disabled in job Forms');    
        }    
        });
            
        saveandshow.click();
        browser.sleep(3000);
        closeshowjob.click();
    };

};

module.exports = new job();