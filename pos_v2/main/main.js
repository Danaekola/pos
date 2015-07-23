function printReceipt(barcodes){

  var items = new CartItem(barcodes);
  var cartItems=items.getCartItems();

  var item=new Cart(cartItems);
  var cart = item.allCart();

  var pos = new Pos();

  var time = new Time();

  var receipt = '***<没钱赚商店>收据***\n' +'打印时间：' +
	 time.timer() + '\n' + '----------------------\n' +
     pos.getItemString(cart) +'----------------------\n' +
	  '挥泪赠送商品：\n'+pos.discount(cart)+
    '----------------------\n' +
    '总计：' + pos.formatPrice(pos.getTotal(cart)) + '(元)\n' +
    '节省：' + pos.formatPrice(pos.getSave(cart)) + '(元)\n' +
    '**********************';
   console.log(receipt);
}
