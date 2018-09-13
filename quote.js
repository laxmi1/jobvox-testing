var quote = function () {

	var methods = require('./methods.js');
    var customer = require('./customer.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newQuotelink = element(by.css('[ui-sref="quotes_new"]'));
    var CustomerNameDropdown = element(by.css('[class="caret pull-right"]'));
    var customerSearch = element(by.model('$select.search'));
    var CustomerNameSelect = element(by.css('[class="ui-select-highlight"]'));
    var title = element(by.xpath("//input[@placeholder='Title']"));
    var about = element(by.xpath("//textarea[@placeholder='About this quote']"));
    // var save = element(by.xpath("//button[@class='submit-button button']"));
    this.create = function () {
        plusCreateButton.click();
        newQuotelink.click();
        var customerName = customer.name();
        CustomerNameDropdown.click();
        customerSearch.sendKeys("Customer");
        CustomerNameSelect.click();
        browser.sleep(3000);
        title.sendKeys("Quote"+Date.now());

        about.isDisplayed().then(function (isVisible){
        if (isVisible) {
        about.sendKeys("Test description for Quote");    
        } else {
        console.log('About this description disabled in Quote Forms');
        }
        });
         
        // save.click();
        browser.sleep(3000);

        
    };

};

module.exports = new quote();