describe('Shopvox maintest', function () {

    var homePage = require('./homePage.js');
    var login = require('./login.js');
    var customer = require('./customer.js');
    var quote = require('./quote.js');

    // beforeEach(function () {
    //     console.log('*************************');
    // });
    // afterEach(function () {
    //     console.log('#########################');
    // });

    it('LoadHome Page Validation', function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        homePage.loadURL();
        expect(browser.getTitle()).toEqual('Sign in - shopVOX');
    });


    it('Login to shopvox', function () {
        browser.waitForAngularEnabled(false);
        login.signin();
        // expect(browser.getTitle()).toEqual('My VOX - shopVOX');
        // expect(browser.getCurrentUrl()).toEqual('https://app.shopvox.com/app/#/dashboards/myvox');
    });

    it('Create Customer', function () {
        browser.waitForAngularEnabled(true);
        customer.create();

    });

    it('Create Quote', function () {
        browser.waitForAngularEnabled(true);
        quote.create();

    });

    it('Create Invoice', function () {
        browser.waitForAngularEnabled(true);
        invoice.create();

    });

});
