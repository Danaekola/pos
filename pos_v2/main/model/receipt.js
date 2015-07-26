function Receipt(cartItems){
  this.cartItems = cartItems;
}

Receipt.prototype.itemString = function() {
  var itemString = '';
  var _this = this;
  _this.cartItems.forEach(function(cartItem){

  itemString += '名称' + '：'+ cartItem.item.name + '，'+
  '数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
  '单价' + '：' + Utils.formatPrice(cartItem.item.price) + '(元)' + '，' +
  '小计' + '：' + Utils.formatPrice(Utils.getSubtotal(cartItem.count-Math.floor(cartItem.count/3),cartItem.item.price))+ '(元)' +'\n';
});
  return itemString;
};
