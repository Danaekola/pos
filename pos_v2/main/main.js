function printReceipt(barcodes){
  
  var objectCartItems = new CartItems(barcodes);
  var cartItems=objectCartItems.getCartItems();
  
  var objectCart=new Cart(cartItems);
  var cart = objectCart.allCart();

  var objectPos = new Pos();
  
  var time = new Time();

  var receipt = '***<没钱赚商店>收据***\n' +'打印时间：' + 
	 time.timer() + '\n' + '----------------------\n' +
     objectPos.getItemString(cart) +'----------------------\n' +
	  '挥泪赠送商品：\n'+objectPos.discount(cart)+
    '----------------------\n' +
    '总计：' + objectPos.formatPrice(objectPos.getTotal(cart)) + '(元)\n' +
    '节省：' + objectPos.formatPrice(objectPos.getSave(cart)) + '(元)\n' +
    '**********************';
   console.log(receipt);
}





