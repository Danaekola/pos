function Count(barcode,count,name,unit, price){
  this.barcode=barcode;
  this.count=count;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
}
