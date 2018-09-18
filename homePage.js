var homePage = function () {

    this.loadURL = function () {

        browser.get('https://app.shopvox.com');
        // browser.get('http://localhost:3001/');
        // browser.get('https://app.shopvox-staging.com/');

    };

};

module.exports = new homePage();