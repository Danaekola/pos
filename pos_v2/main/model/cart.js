function Cart(cartItems){
  
  this.cartItems = cartItems || [];
}

Cart.prototype.findCartItems = function(cartItem){
   
    var _findCartItem = this.findCartItem(cartItem);
	  if(_findCartItem){
	    _findCartItem.count += cartItem.count;
	  }
	  else{

		  this.cartItems.push(cartItem);
	  }
}
Cart.prototype.findCartItem = function(cartItem){
  for(var x = 0;x < this.cartItems.length; x++){
    if(this.cartItems[x].item.barcode === cartItem.item.barcode){
      return this.cartItems[x];
    }
  }
}

Cart.prototype.getTotalPrice = function(){
  var totalPrice = 0;
  var _this = this;
  _this.cartItems.forEach(function(cartItem){

    totalPrice += Utils.getSubtotal((cartItem.count-Math.floor(cartItem.count/3)),cartItem.item.price)
  });
  return totalPrice;
}






