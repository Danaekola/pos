function  printReceipt(barcodes){
  var cartItems = getCartItems(barcodes);
  var promotion = getPromotion(cartItems);
  var receipt ='***<没钱赚商店>收据***\n' +
      getItemString(cartItems) +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      promotion.string +
      '----------------------\n' +
      '总计：' + formatPrice(getTotalPrice(cartItems) - promotion.reduce) + '(元)\n' +
      '节省：' + formatPrice(promotion.reduce) + '(元)\n' +
      '**********************';
 console.log(receipt);
}

function getTotalPrice(cartItems){
  var totalPrice = 0;
  cartItems.forEach(function(cartItem){
  totalPrice += getSubtotal(cartItem.count,cartItem.item.price);
});
  return totalPrice;
}

function getItemString(cartItems){
  var itemString = '';
  cartItems.forEach(function(cartItem){
  itemString += '名称' + '：'+ cartItem.item.name + '，'+
  '数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
  '单价' + '：' + formatPrice(cartItem.item.price) + '(元)' + '，' +
  '小计' + '：' + formatPrice(getSubtotal(cartItem.count-Math.floor(cartItem.count/3),cartItem.item.price))+ '(元)' +'\n';
});
  return itemString;
}

function formatPrice(price) {
  return price.toFixed(2);
}
function getSubtotal(count,price){
  return count*price;
}
function promotionItem(cartItem) {
  var promotions = loadPromotions();
  var promotionPrice = 0;
  var item;
  var barcodes = promotions[0].barcodes;
  for (var i = 0; i < barcodes.length; i++) {
     var barcode = barcodes[i];
     if (cartItem.item.barcode === barcode && cartItem.count >= 2) {
       item = cartItem.item;
       promotionPrice = item.price;
       break;
     }
     }
  return {price: promotionPrice, item: item};
}
function getPromotion(cartItems) {
  var promotionString = '';
  var reduce = 0;
  cartItems.forEach(function (cartItem) {
    var promotion = promotionItem(cartItem);
    if (promotion.item) {
      promotionString +='名称：' + promotion.item.name +
      '，数量：1' + promotion.item.unit + '\n';
      reduce += cartItem.item.price;
    }
});
  return {string: promotionString, reduce: reduce};
}
function getCartItems(barcodes){
  var cartItems = [];
  var item;
  var  allItems = loadAllItems();
  barcodes.forEach(function(barcode){
    if(barcode.length>10){
		var object=getItem(barcode.substr(0,10),allItems);
		var count=parseFloat(barcode.substr(11));
        cartItems.push({item:object,count:count});
	    return false;
	}
	var cartItem = findCartItem(cartItems,barcode);
    item=getItem(barcode,allItems);
	if(cartItem){
      cartItem.count++;
	}
	else {
	  cartItems.push({item:item,count:1});
	}
  });
    return cartItems;
}

function findCartItem(cartItems,barcode){
  for(var x=0;x<cartItems.length;x++){
   if(cartItems[x].item.barcode === barcode)
   return cartItems[x];
  }
}

function getItem(element,allItems){
  for(var x = 0; x < allItems.length; x++)
    if(element == allItems[x].barcode)
		return allItems[x];
}
