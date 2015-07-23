function printReceipt(barcodes){
  var cartItems = getCartItems(barcodes);
  var cart = allCart(cartItems);
  var time = new Time();
  var receipt = '***<没钱赚商店>收据***\n' +'打印时间：' +
	 time.timer() + '\n' + '----------------------\n' +
     getItemString(cart) +'----------------------\n' +
	  '挥泪赠送商品：\n'+discount(cart)+
    '----------------------\n' +
    '总计：' + formatPrice(getTotal(cart)) + '(元)\n' +
    '节省：' + formatPrice(getSave(cart)) + '(元)\n' +
    '**********************';
  console.log(receipt);
}

function getCartItems(barcodes){
  var cartItems = [];
  for(var x = 0 ; x < barcodes.length ; x++){
    cartItems.push(getCount(barcodes[x],barcodes));
  }

  return deleteSameItem(cartItems);
}

function deleteSameItem(cartItems){
	var result = [];
	for(var i = 0; i < cartItems.length-1; i++) {
	  if(cartItems[i].barcode !== cartItems[i+1].barcode) {
	    result.push(cartItems[i]);
	  }
	}
	result.push(cartItems[cartItems.length-1]);
	return result;
}

function allCart(cartItems){
  var cart = [];
  for(var y = 0; y < cartItems.length; y++){
    cart.push(getAllCart(cartItems[y]));
  }
  return cart;
}

function getAllCart(item){
  var allItems = loadAllItems();
  for(var y = 0; y < allItems.length; y++){
    if(item.barcode == allItems[y].barcode){
     return (new Count(allItems[y].barcode,item.count,allItems[y].name,allItems[y].unit,allItems[y]. price));
    }
  }
}

function getCount(barcode,barcodes){
    var count = 0;
    for(var y = 0; y < barcodes.length; y++){
      if(barcode.length > 10){
        return (new Count(barcode.substr(0,10),parseFloat(barcode.substr(11))));
      }
      else if(barcodes[y] == barcode) {
             count++;
      }
    }
    return (new Count(barcode,count));
}

function getItemString(cart){
  var itemString = '';
  for(var y = 0; y< cart.length; y++){
    itemString += '名称' + '：'+ cart[y].name + '，'+
    '数量' + '：' +cart[y].count +cart[y].unit + '，'+
    '单价' + '：' + formatPrice(cart[y].price) + '(元)' + '，' +
    '小计' + '：' + formatPrice(getSubtotal(cart[y].count-Math.floor(cart[y].count/3),cart[y].price))+
	'(元)' +'\n';
  }
  return itemString;
}

function discount(cart){
  var promotion = loadPromotions();
  if(promotion[0].type == 'BUY_TWO_GET_ONE_FREE'){
	return getDiscountItemString(promotion[0].barcodes,cart);
  }
}
function getDiscountItemString(barcodes,cart){
  var itemString = '' ;
  cart.forEach(function(cartItem){
	if(barcodes.indexOf(cartItem.barcode) != -1){
	  itemString += '名称' + '：'+ cartItem.name + '，'+
      '数量' + '：' +Math.floor(cartItem.count/3)+cartItem.unit+'\n' ;
	}
  });
  return itemString;
}

function getTotal(cart){
  var total = 0;
  for(var y = 0; y < cart.length; y++){
   total += getSubtotal(cart[y].count-Math.floor(cart[y].count/3),cart[y].price);
  }
  return total;
}

function getSave(cart){
  var promotion = loadPromotions();
  if(promotion[0].type == 'BUY_TWO_GET_ONE_FREE'){
	return getSaveMoney(promotion[0].barcodes,cart);
  }
}

function getSaveMoney(barcodes,cart) {
  var total = 0;
  cart.forEach(function(cartItem){
	if(barcodes.indexOf(cartItem.barcode) != -1){
		 total += getSubtotal(Math.floor(cartItem.count/3),cartItem.price);
	}
  });
  return total;
}

function formatPrice(price) {
  return price.toFixed(2);
}
function getSubtotal(count,price){
  return count*price;
}
