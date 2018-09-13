var methods = function () {
this.selectDropdownbyNum = function ( element, optionNum ) {
	if (optionNum){
		var options = element.all(by.tagName('option')).then(function(options){
        	options[optionNum].click();
        	});
    };
 };
};  

module.exports = new methods();