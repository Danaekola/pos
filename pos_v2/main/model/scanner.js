function Scanner() {
  
}

Scanner.prototype.scan = function(barcode){
  var item;
  var  allItems = loadAllItems();
  var _this = this;

  if(barcode.length>10){
    var object = _this.getItem(barcode.substr(0,10),allItems);
	  var count = parseFloat(barcode.substr(11));
    return {item:object,count:count};
  };

  item = _this.getItem(barcode,allItems);
  return {item:item,count:1};
}

Scanner.prototype.getItem = function(barcode,allItems){
  for(var x = 0; x < allItems.length; x++){
    if(barcode == allItems[x].barcode){
	    return allItems[x];
	}
  }
}


