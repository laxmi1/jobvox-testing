var project = function () {

    var methods = require('./methods.js');
    var customer = require('./customer.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newProjectlink = element(by.xpath("//*[@id='main-header']/div/div[2]/div[2]/ul/li[11]/a"));
    var CustomerNameDropdown = element.all(by.css('[class="caret pull-right"]')).first();
    var customerSearch = element.all(by.model('$select.search')).first();
    var CustomerNameSelect = element.all(by.css('[class="ui-select-highlight"]'));
    var title = element(by.xpath("//input[@placeholder='Name']"));
    var about = element(by.xpath("//textarea[@placeholder='About this Project']"));
    var leadsource = element(by.css('[name="leadSourceId"]'));
    var salesrep = element(by.css('[name="primarySalesRepId"]'));
    var productionmanager = element(by.css('[name="productionManagerId"]'));
    var projectmanager = element(by.css('[name="projectManagerId"]'));
    var save = element(by.xpath(".//*[@id='main-section']/div/div/div[2]/form/div[3]/div/submit-button/button"));
     this.create = function () {0
        plusCreateButton.click();
        newProjectlink.click();
        var customerName = customer.name();
        CustomerNameDropdown.click();
        customerSearch.sendKeys(customerName);
        CustomerNameSelect.click();
        browser.sleep(3000);
        title.sendKeys("Project"+Date.now());

        about.isDisplayed().then(function (isVisible){
        if (isVisible) {
        about.sendKeys("Test description for Project");    
        }
        });

        leadsource.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(leadsource,2);    
        }    
        });
        
        salesrep.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(salesrep,1);    
        }    
        });
        
        productionmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(productionmanager,2);    
        }    
        }); 

        projectmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(projectmanager,2);    
        }    
        });
        
        
        save.click();
        browser.sleep(3000);

    };

};

module.exports = new project();