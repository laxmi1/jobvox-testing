var customer = function () {
    var methods = require('./methods.js');
    var plusCreateButton = element(by.partialButtonText('Create'));
    var newCustomerLink = element(by.css('[ui-sref="companies.new"]'));
    var name = element.all(by.xpath("//input[@placeholder='Name']")).first();
    var legalName = element(by.xpath("//input[@placeholder='Legal Name']"));
    var tax = element(by.css('[name="salesTaxId"]'));
    var terms = element(by.css('[name="termCodeId"]'));
    var marketingArea = element(by.css('[name="marketingAreaId"]'));
    var primarycontact = element.all(by.xpath("//div[1][@class='col-sm-6']/vox-text-field/div/div/input")).first();
    var primarycontactemail = element(by.xpath("//input[@placeholder='E-mail']"));
    // var contactphone = element(by.xpath(".//*[@id='main-section']/div/div[2]/div/div/div[2]/div/form/div[1]/div/section[6]/div/div[3]/div[1]/div[1]/phone-field/div/div/div"));
    var customeremail = element(by.xpath("//input[@placeholder='jsmith@acme.com']"));
    // var customerphone = element(by.xpath("//div[1][@class='col-sm-9']/phone-field/div/div/div"));
    var address = element(by.css('[name="addresses[0].addressType"]'));
    var industry = element.all(by.xpath("//span[@label='Industry']//following::select")).first();
    var leadsource = element.all(by.xpath("//span[@label='Lead source']//following::select")).first();
    var creditlimit = element(by.xpath("//input[@placeholder='Credit limit']"));
    var discount = element(by.xpath("//input[@placeholder='Discount']"));
    var group = element(by.css('[name="groupId"]'));
    var vatnumber = element(by.xpath("//input[@placeholder='VAT Number']"));
    var moreinfo = element(by.css('[ng-click="onClick()"]'));
    var taxexemptcode = element(by.xpath("//input[@placeholder='Tax Exempt Code']"));
    var accountnumber = element(by.xpath("//input[@placeholder='Account Number']"));
    var legacy = element(by.css('[name="legacyType"]'));
    var facebook = element(by.xpath("//input[@placeholder='Facebook']"));
    var twitter = element(by.xpath("//input[@placeholder='Twitter']"));
    var website = element(by.xpath("//input[@placeholder='Website']"));
    var lisencenumber = element(by.xpath("//input[@placeholder='License Number']"));
    var tollfreenumber = element(by.xpath("//input[@placeholder='Toll Free Number']"));
    var pricingLevel = element(by.css('[name="pricingLevelId"]'));
    var taxid = element(by.xpath("//input[@placeholder='Tax ID']"));
    var localfile = element(by.xpath("//input[@placeholder='eg /Users/joe/Acme Inc. Folder']"));
    var background = element(by.xpath("//textarea[@placeholder='Background Info']"));
    var otherinfo = element(by.xpath("//textarea[@placeholder='Other Info']"));
    var specialinfo = element(by.xpath("//div[@placeholder='Special Info']"));
    var save = element(by.xpath("//button[@class='submit-button button']"));
    var specialinfook = element(by.xpath("//button[@class='button']"));
    var CustomerName = "Customer "+Date.now();    

    this.create = function () {
        plusCreateButton.click();
        newCustomerLink.click();
        name.sendKeys(CustomerName);

        legalName.isDisplayed().then(function (isVisible) {
        if (isVisible) {
        legalName.sendKeys("Legal Name ");
        } else {
        // element is not visible
        console.log('Legal Name is disabled in Customer Forms');
        }
        });
         
        tax.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(tax,2);   
        } else {
        console.log('terms disabled in customer Forms');
        }
        });
        

        terms.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(terms,2);    
        } else {
        console.log('terms disabled in customer Forms');
        }
        });

        marketingArea.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(marketingArea,2);    
        } else {
        console.log('MarketingArea disabled in customer Forms');
        }
        });
        
        primarycontact.isDisplayed().then(function (isVisible){
        if (isVisible) {
        primarycontact.sendKeys("Contact"+Date.now());    
        } else {
        console.log('Primary contact disabled in customer Forms');
        }
        });

        primarycontactemail.isDisplayed().then(function (isVisible){
        if (isVisible) {
        primarycontactemail.sendKeys("testing@shopvox.com");
        } else {
        console.log('Primary Contact email disabled in customer Forms');    
        }    
        });
          
        // contactphone.isDisplayed().then(function (isVisible){
        // if (isVisible) {
        // contactphone.sendKeys("9999999999"); 
        // } else {
        // console.log('Contact phone disabled in customer Forms');    
        // }    
        // });

        customeremail.isDisplayed().then(function (isVisible){
        if (isVisible) {
        customeremail.sendKeys("automation@techvoxinc.com");
        } else {
        console.log('Customermail disabled in customer Forms');    
        }    
        });

    
        methods.selectDropdownbyNum(address,2);
        element(by.xpath("//input[@placeholder='Address Name']")).sendKeys("Shopvox");
        element(by.xpath("//input[@placeholder='Attention to']")).sendKeys("201");
        element(by.xpath("//div[1][@class='col-sm-8']/vox-text-field/div/div/input")).sendKeys("Vox rox");
        element(by.xpath("//input[@placeholder='Attention to']//following::input[2]")).sendKeys("Techvox");
        element(by.xpath("//input[@placeholder='Suburb']")).sendKeys("201-Suburb");
        element(by.xpath("//input[@placeholder='Suburb']//following::input[1]")).sendKeys("Palo Alto");
        element(by.xpath("//input[@placeholder='Suburb']//following::input[2]")).sendKeys("CA");
        element(by.xpath("//input[@placeholder='Suburb']//following::input[3]")).sendKeys(94301);
        element(by.xpath("//input[@placeholder='Country']")).clear();
        element(by.xpath("//input[@placeholder='Country']")).sendKeys("USA");
        
        
        // customerphone.isDisplayed().then(function (isVisible){
        // if (isVisible) {
        // customerphone.sendKeys("8888888888"); 
        // } else {                                                         
        // console.log('Customer phone disabled in customer Forms');    
        // }    
        // });

        industry.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(industry,3);
        } else {
        console.log('industry disabled in customer Forms');
        }
        });

        leadsource.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(leadsource,1);
        } else {
        console.log('leadsource disabled in customer Forms');
        }
        });


        pricingLevel.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(pricingLevel,2); 
        } else {
        console.log('pricingLevel disabled in customer Forms');    
        }    
        });

        creditlimit.isDisplayed().then(function (isVisible){
        if (isVisible) {
        creditlimit.sendKeys("1000"); 
        } else {
        console.log('Credit Limit disabled in customer Forms');    
        }    
        });
        
        discount.isDisplayed().then(function (isVisible){
        if (isVisible) {
        discount.sendKeys("10%"); 
        } else {
        console.log('Discount disabled in customer Forms');    
        }    
        });

        group.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(group,2);    
        } else {
        console.log('group disabled in customer Forms');
        }
        });
        
        vatnumber.isDisplayed().then(function (isVisible){
        if (isVisible) {
        vatnumber.sendKeys("12345"); 
        } else {
        console.log('VAT Number disabled in customer Forms');    
        }    
        });

        moreinfo.click();

        taxexemptcode.isDisplayed().then(function (isVisible){
        if (isVisible) {
        taxexemptcode.sendKeys("4321"); 
        } else {
        console.log('Tax Exempt Code disabled in customer Forms');    
        }    
        });

      
        accountnumber.isDisplayed().then(function (isVisible){
        if (isVisible) {
        accountnumber.sendKeys("12345678"); 
        } else {
        console.log('Account Number disabled in customer Forms');    
        }    
        });

        legacy.isDisplayed().then(function (isVisible){
        if (isVisible) {
        methods.selectDropdownbyNum(legacy,2);
        } else {
        console.log('Account Number disabled in customer Forms');    
        }    
        });
        
        facebook.isDisplayed().then(function (isVisible){
        if (isVisible) {
        facebook.sendKeys("www.facebook.com"); 
        } else {
        console.log('Facebook disabled in customer Forms');    
        }    
        });

        twitter.isDisplayed().then(function (isVisible){
        if (isVisible) {
        twitter.sendKeys("www.twitter.com"); 
        } else {
        console.log('Twitter disabled in customer Forms');    
        }    
        });

        website.isDisplayed().then(function (isVisible){
        if (isVisible) {
        website.sendKeys("www.google.com"); 
        } else {
        console.log('Website disabled in customer Forms');    
        }    
        });
        
        lisencenumber.isDisplayed().then(function (isVisible){
        if (isVisible) {
        lisencenumber.sendKeys("12345678"); 
        } else {
        console.log('License Number disabled in customer Forms');    
        }    
        });

        tollfreenumber.isDisplayed().then(function (isVisible){
        if (isVisible) {
        tollfreenumber.sendKeys("9999999999"); 
        } else {
        console.log('Toll Free Number disabled in customer Forms');    
        }    
        });

        taxid.isDisplayed().then(function (isVisible){
        if (isVisible) {
        taxid.sendKeys("GST-1234"); 
        } else {
        console.log('TaxID disabled in customer Forms');    
        }    
        });

        localfile.isDisplayed().then(function (isVisible){
        if (isVisible) {
        localfile.sendKeys("/home/shopvox/Desktop/Images.jpg");
        } else {
        console.log('TaxID disabled in customer Forms');    
        }    
        });

        background.isDisplayed().then(function (isVisible){
        if (isVisible) {
        background.sendKeys("Test Background details of customer"); 
        } else {
        console.log('Background disabled in customer Forms');    
        }    
        });
        
        otherinfo.isDisplayed().then(function (isVisible){
        if (isVisible){
        otherinfo.sendKeys("Test Other info details");    
        } else {
        console.log('Other info disabled in customer Forms') 
        }    
        });

        // specialinfo.isDisplayed().then(function (isVisible){
        // if (isVisible) {
        // specialinfo.sendKeys("Test Special info details of customer"); 
        // } else {
        // console.log('Special info disabled in customer Forms');    
        // }    
        // });
        save.click();
        
        // browser.sleep(3000);

        // specialinfook.isDisplayed().then(function (isVisible){
        // if (isVisible) {
        // specialinfook.click();
        // } else {
        // console.log('Special info disabled in customer Forms');    
        // }    
        // });
        browser.sleep(5000);
    };
       this.name = function() {
        return CustomerName;
    };


};

module.exports = new customer();