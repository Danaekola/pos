function Pos(){

}

Pos.prototype.getItemString=function(cart) {
  var itemString = '';
  for(var y = 0; y< cart.length; y++) {

    itemString += '名称' + '：'+ cart[y].name + '，'+
    '数量' + '：' +cart[y].count +cart[y].unit + '，'+
    '单价' + '：' + this.formatPrice(cart[y].price) + '(元)' + '，' +
    '小计' + '：' + this.formatPrice(this.getSubtotal(cart[y].count-Math.floor(cart[y].count/3),cart[y].price))+
	'(元)' +'\n';
  }
  return itemString;
};

Pos.prototype.formatPrice = function(price) {
  return price.toFixed(2);
};

Pos.prototype.getSubtotal = function(count,price) {
  return count*price;
};

Pos.prototype.discount = function(cart) {
  var promotion = loadPromotions();

  if(promotion[0].type == 'BUY_TWO_GET_ONE_FREE') {

	return this.getDiscountItemString(promotion[0].barcodes,cart);
  }
};

Pos.prototype.getDiscountItemString = function(barcodes,cart) {
  var itemString = '' ;

  cart.forEach(function(cartItem){
	if(barcodes.indexOf(cartItem.barcode) != -1) {
	  itemString += '名称' + '：'+ cartItem.name + '，'+
      '数量' + '：' + Math.floor(cartItem.count/3)+cartItem.unit+'\n' ;
	}
  });
  return itemString;
};

Pos.prototype.getTotal=function(cart) {

  var total = 0;
  for(var y = 0; y < cart.length; y++) {
   total += this.getSubtotal(cart[y].count-Math.floor(cart[y].count/3),cart[y].price);
  }
  return total;
};

Pos.prototype.getSave=function(cart) {

  var promotion = loadPromotions();
  if(promotion[0].type == 'BUY_TWO_GET_ONE_FREE'){

	return this.getSaveMoney(promotion[0].barcodes,cart);
  }
};

Pos.prototype.getSaveMoney=function(barcodes,cart) {
  var total = 0;

  for(var x = 0; x < cart.length; x++){

	if(barcodes.indexOf(cart[x].barcode) != -1){
		 total += this.getSubtotal(Math.floor(cart[x].count/3),cart[x].price);
	}
  }


  return total;
};