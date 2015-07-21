function printReceipt(inputs) {
  var str = '***<没钱赚商店>收据***'+'\n';
  var temp = 0,number;
  var result = [];
  inputs.forEach(function(input){
     if(0 == ecape(input.barcode,result))
     return false;
    number = getCount(input.barcode,inputs);

    str += '名称：'+input.name+'，数量：'+number+input.unit+'，单价：'+input.price.toFixed(2)+'(元)，小计：'+(number*input.price).toFixed(2)+'(元)'+'\n';
    temp += number*input.price;
  })

  str += '----------------------'+'\n' +'总计：'+temp.toFixed(2)+'(元)'+'\n' +'**********************';
  console.log(str);

  
}

function getCount(element,inputs){
  var count = 0;
  for(var y = 0;y < inputs.length; y++)
    if(element == inputs[y].barcode)
      count++;
  return count;
}

function ecape(element,result){
  for(var x = 0; x < result.length; x++)
    if(element == result[x])
      return 0;
  result.push(element);
  return 1;
}
