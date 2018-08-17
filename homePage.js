var homePage = function () {

    this.loadURL = function () {

        browser.get('https://app.shopvox.com');

    };

};

module.exports = new homePage();