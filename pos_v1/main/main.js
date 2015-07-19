function  printReceipt(inputs){
  var  allItems = loadAllItems();
  var p,temp,sum = 0,total = 0,num = 1;
  var str =  '***<没钱赚商店>收据***\n';
  var str1 = '挥泪赠送商品：\n';
  for(var i = 0; i < inputs.length; i++) {
    if( inputs[i].length>10 ){
	  p = parseInt(inputs[i].substr(11));
      temp = outPut(inputs[i].substr(0,10),allItems);
	  str += '名称：'+temp.name +'，数量：'+p+temp.unit+'，单价：'+temp.price.toFixed(2)+'(元)，小计：'+(p*temp.price).toFixed(2)+'(元)'+'\n';
      total += p*temp.price;
	  continue;
	}
    else if(inputs[i] == inputs[i+1]) {
          num++;
    }
    else{
        temp = outPut(inputs[i],allItems);
        str += '名称：'+temp.name+'，数量：'+num+temp.unit+'，单价：'+temp.price.toFixed(2)+'(元)，小计：'+((num-1)*temp.price).toFixed(2)+'(元)'+'\n';
        total += (num-1)*temp.price;
        str1 += '名称：'+temp.name+'，数量：'+1+temp.unit+'\n';
	    sum += temp.price;
        num = 1;
	}
  }
  str +='----------------------\n'+str1+'----------------------\n'+'总计：'+total.toFixed(2)+'(元)'+'\n'+'节省：'+sum.toFixed(2)+'(元)'+'\n'+'**********************';
  console.log(str);
}
function outPut(element,allItems){
  for(var x = 0; x < allItems.length; x++)
    if(element == allItems[x].barcode)
		return allItems[x];
}
