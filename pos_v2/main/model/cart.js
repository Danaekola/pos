function Cart(cartItems) {

  this.cartItems=cartItems;
}

Cart.prototype.allCart=function() {
   var cart = [];

  for(var y = 0; y < this.cartItems.length; y++) {
    cart.push(this.getAllCart(this.cartItems[y]));
  }
  return cart;
};

Cart.prototype.getAllCart=function(item) {
  var allItems = loadAllItems();

  for(var y = 0; y < allItems.length; y++) {
    if(item.barcode == allItems[y].barcode) {

     return (new Count(allItems[y].barcode,item.count,allItems[y].name,allItems[y].unit,allItems[y]. price));
    }
  }
};
