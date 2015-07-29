function Pos( scanner,cart){
  
  this.scanner = scanner || new Scanner();
  this.cart = cart || new Cart();
}

Pos.prototype.scan = function(tag) {
  var cartItem = this.scanner.scan(tag);
  this.cart.findCartItems(cartItem);
};

Pos.prototype.getItemString = function(cartItems) {
  var receipt = new Receipt(cartItems);
   
  return receipt.itemString();
};






