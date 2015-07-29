function Scanner() {
  
}

Scanner.prototype.scan = function(tag){
  var item;
  var allItems = loadAllItems();
  var barcode = tag.split('-')[0];
  var count = parseFloat(tag.split('-')[1]) || 1;
  
  item= this.getItem(barcode,allItems);
  return {item:item,count:count};
 }

Scanner.prototype.getItem = function(tag,allItems){
  for(var x = 0; x < allItems.length; x++){
    if(tag == allItems[x].barcode){
	    return allItems[x];
	}
  }
}



