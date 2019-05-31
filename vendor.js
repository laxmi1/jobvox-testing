var vendor = function () {
    var methods = require('./methods.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newVendorLink = element(by.css('[ui-sref="vendors.new"]'));
    var name = element.all(by.xpath("//input[@placeholder='Name']")).first();
    var legalName = element.all(by.xpath("//input[@placeholder='Legal name']")).first();
    var licensenumber = element(by.xpath("//input[@placeholder='License #']"));
    var taxid = element(by.xpath("//input[@placeholder='Vendor tax']"));
    var terms = element(by.css('[name="termCodeId"]'));
    var youraccountid = element(by.xpath("//input[@placeholder='Your account ID with vendor']"));
    var weblogin = element(by.xpath("//input[@placeholder='Web login']"));
    var webpassword = element(by.xpath("//input[@placeholder='Web password']"));
    var website = element(by.xpath("//input[@placeholder='Website']"));
    var primarycontact = element.all(by.xpath("//div[1][@class='col-sm-6']/vox-text-field/div/div/input")).first();
    var primarycontactemail = element(by.xpath("//input[@placeholder='E-mail']"));
    var customeremail = element(by.xpath("//input[@placeholder='jsmith@acme.com']"));
    var save = element(by.xpath("//button[@class='submit-button button']"));
    var VendorName = "Vendor "+Date.now();    

    this.create = function () {
        plusCreateButton.click();
        newVendorLink.click();
        name.sendKeys(VendorName);

        legalName.isDisplayed().then(function (isVisible) {
        if (isVisible) {
        legalName.sendKeys("Legal Name for vendor ");
        }
        });

        licensenumber.isDisplayed().then(function (isVisible){
        if (isVisible) {
        licensenumber.sendKeys("336699"); 
        }    
        });

        taxid.isDisplayed().then(function (isVisible){
        if (isVisible) {
        taxid.sendKeys("BJBR-TAX"); 
        }   
        });
        
        terms.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(terms,2);    
        }
        });

        youraccountid.isDisplayed().then(function (isVisible){
        if (isVisible) {
        youraccountid.sendKeys("9");
        }   
        });

        weblogin.isDisplayed().then(function (isVisible){
        if (isVisible) {
        weblogin.sendKeys("www.shopvox.com");
        }
        });

        webpassword.isDisplayed().then(function (isVisible){
        if (isVisible) {
        webpassword.sendKeys("www.twitter.com");
        }
        });

        website.isDisplayed().then(function (isVisible){
        if (isVisible) {
        website.sendKeys("www.google.com");
        }
        });
        
        primarycontact.isDisplayed().then(function (isVisible){
        if (isVisible) {
        primarycontact.sendKeys("Contact"+Date.now());    
        }
        });

        primarycontactemail.isDisplayed().then(function (isVisible){
        if (isVisible) {
        primarycontactemail.sendKeys("primary@shopvox.com"); 
        }    
        });
          
        
        customeremail.isDisplayed().then(function (isVisible){
        if (isVisible) {
        customeremail.sendKeys("automation@techvoxinc.com"); 
        }    
        });        

        save.click();
        browser.sleep(5000);
    };
    
    this.name = function() {
        return VendorName;
    };


};

module.exports = new vendor();