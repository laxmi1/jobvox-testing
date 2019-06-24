var materialreq = function (){
	var methods = require('./methods.js');
	
	var materialreq = element(by.css('[ui-sref="material_requisitions"]'));
	var newmaterialreq = element(by.xpath("//a[@ng_click='addMaterialRequisition()']"));
    var materialname = element(by.xpath("//input[@placeholder='Name']"));
    var materialdescription = element(by.xpath("//input[@placeholder='Description']"));
    var uom = element(by.css('[name="uomName"]'));
    var cost = element(by.xpath("//input[@placeholder='eg. 5.00']"));
    var save = element(by.xpath("//i[@class='submit-button-icon ng-scope fa fa-save']"));

    this.create = function (){
		browser.executeScript("document.body.style.zoom='90%'");
		materialreq.click();
		materialname.sendKeys("Material"+Date.now());
		materialdescription.sendKeys("Test Description of Material req");
		methods.selectDropdownbyNum(uom,2);
		cost.sendKeys(20);
        save.click();
        
	};
	    
};
module.exports = new materialreq();