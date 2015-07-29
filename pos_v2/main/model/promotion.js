function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.promotionItem = function(cartItem) {
  var promotions = loadPromotions();
  for(var x = 0; x < promotions.length; x++){
    if(promotions[x].type == 'BUY_TWO_GET_ONE_FREE'){
       return this.getPromotionItem(cartItem,promotions[x]);
    }
  }
}
Promotion.prototype.getPromotionItem = function(cartItem,promotionsItem) {
  var barcodes = promotionsItem.barcodes;
  for(var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    if(cartItem.item.barcode === barcode) {
      return cartItem;
	  }
  }
  
}

Promotion.prototype.getPromotion=function(cartItems) {
  var promotionPrint = '';
  var saveMoney = 0;
  var _this = this;
  
  cartItems.forEach(function (cartItem) {
    var promotion = _this.promotionItem(cartItem);
	  if(promotion) {

      promotionPrint +='名称：' + promotion.item.name +
      '，数量：' + Math.floor(promotion.count/3)+ promotion.item.unit + '\n';
      saveMoney += promotion.item.price*(Math.floor(promotion.count/3));
    }
  });
  return {discountString: promotionPrint, saveTotal: saveMoney};
}

