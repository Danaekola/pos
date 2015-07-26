function Utils(){

}

Utils.formatPrice = function(price) {
  return price.toFixed(2);
};

Utils.getSubtotal = function(count,price) {
  return count*price;
};