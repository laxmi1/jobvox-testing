var saleslead = function () {

    var methods = require('./methods.js');
    var customer = require('./customer.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newSalesleadlink = element(by.css('[ui-sref="sales_leads.new"]'));
    var title = element(by.xpath("//input[@placeholder='Title']"));
    var details = element(by.xpath("//textarea[@placeholder='Details']"));
    var CustomerNameDropdown = element.all(by.css('[class="caret pull-right"]')).first();
    var customerSearch = element.all(by.model('$select.search')).first();
    var CustomerNameSelect = element.all(by.css('[class="ui-select-highlight"]'));
    var salesrep = element(by.xpath("//select[@name='salesRepId']"));
    var assignedto = element(by.css('[name="assignedToId"]'));
    var projectmanager = element(by.css('[name="projectManagerId"]'));
    var dealvalue = element(by.xpath("//input[@placeholder='Deal value']"));
    var state = element(by.css('[name="workflowState"]'));
    var leadsource = element(by.css('[name="leadSourceId"]'));
    var leadsourcename = element(by.xpath("//input[@placeholder='Lead Source Name']"));
    var connection = element(by.xpath("//select[@name='pipelineId']"));
    var save = element(by.xpath("//button[@role='button']"));
     this.create = function () {0
        plusCreateButton.click();
        newSalesleadlink.click();
        title.sendKeys("Saleslead"+Date.now());

        details.isDisplayed().then(function (isVisible){
        if (isVisible) {
        details.sendKeys("Test details for saleslead");    
        }
        });
        var customerName = customer.name();
        CustomerNameDropdown.click();
        customerSearch.sendKeys(customerName);
        CustomerNameSelect.click();
        browser.sleep(6000);
        
        salesrep.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(salesrep,2);    
        }   
        });
        
        assignedto.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(assignedto,2);    
        }    
        }); 

        projectmanager.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(projectmanager,2);    
        }    
        }); 

        dealvalue.isDisplayed().then(function (isVisible){
        if(isVisible){
        dealvalue.sendKeys("deal from Shopvox");
        }
        }); 
         

        state.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(state,2);    
        }    
        });

        leadsource.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(leadsource,2);    
        }    
        });

        leadsourcename.isDisplayed().then(function (isVisible){
        if(isVisible){
        leadsourcename.sendKeys("Lead from Shopvox");
        }
        });

        connection.isDisplayed().then(function (isVisible){
        if(isVisible){
        methods.selectDropdownbyNum(connection,2);    
        }    
        });
        
        
        save.click();
        browser.sleep(9000);
    };

};

module.exports = new saleslead();