function CartItems(barcodes) {
  this.barcodes=barcodes;
}
CartItems.prototype.getCartItems=function (){
  var cartItems = [];
  for(var x = 0 ; x < this.barcodes.length ; x++){
    cartItems.push(this.getCount(this.barcodes[x],this.barcodes));
  }

  return this.deleteSameItem(cartItems);
}

CartItems.prototype.getCount=function(barcode,barcodes){
    var count = 0;
    for( var y = 0; y < barcodes.length; y++){
      if( barcode.length > 10){
        return (new Count(barcode.substr(0,10),parseFloat(barcode.substr(11))));
      }
      else if(barcodes[y] == barcode) {
             count++;
      }
    }
    return (new Count(barcode,count));
}

CartItems.prototype.deleteSameItem=function(cartItems){
	var result = [];
	for(var i = 0; i < cartItems.length-1; i++) {
	  if(cartItems[i].barcode !== cartItems[i+1].barcode) {
	    result.push(cartItems[i]);
	  }
	}
	result.push(cartItems[cartItems.length-1]);
	return result;
}
