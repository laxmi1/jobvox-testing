var homePage = function () {

    this.loadURL = function () {

        // browser.get('https://app.shopvox.com');
        browser.get('http://localhost:3001/');

    };

};

module.exports = new homePage();