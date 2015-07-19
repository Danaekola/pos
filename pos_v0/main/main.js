function printReceipt(inputs) {
  var str = '***<没钱赚商店>收据***'+'\n';
  var temp = 0;
  for( var x = 0; x < inputs.length; x++){
    str += '名称：'+inputs[x].name+'，数量：'+inputs[x].count+inputs[x].unit+'，单价：'+inputs[x].price.toFixed(2)+'(元)，小计：'+(inputs[x].count*inputs[x].price).toFixed(2)+'(元)'+'\n';
    temp += inputs[x].count*inputs[x].price;
  }
  str += '----------------------'+'\n' +'总计：'+temp.toFixed(2)+'(元)'+'\n' +'**********************';
  console.log(str);
}
 
