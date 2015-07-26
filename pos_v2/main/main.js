function  printReceipt(barcodes) {
  var cart=new Cart();
  var scanner=new Scanner();
  var pos=new Pos(scanner,cart);
  barcodes.forEach(function(barcode){
    pos.scan(barcode);
  });
    
  var cartItems=cart.cartItems;
	
  var promotion=new Promotion();
  var discount=promotion.getPromotion(cartItems);

  

  var time = new Time();

  var receipt ='***<没钱赚商店>收据***\n' +'打印时间：' + 
  time.timer()+ '\n' + '----------------------\n'+
  pos.getItemString(cartItems) +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  discount.discountString +
  '----------------------\n' +
  '总计：' + Utils.formatPrice(cart.getTotalPrice()) + '(元)\n' +
  '节省：' + Utils.formatPrice(discount.saveTotal) + '(元)\n' +
  '**********************';
  console.log(receipt);
}










