function Time( year,month,date,hour,minute,second ) {
  this.year = year;
  this.month = month;
  this.date = date;
  this.hour = hour;
  this.minute=minute;
  this.second=second;
}
Time.prototype.dateDigitToString = function(num){
  return num < 10 ? '0' + num : num;
}
Time.prototype.timer=function(){
  var date = new Date();
  var temp = new Time();
  var time = new Time(date.getFullYear(),temp.dateDigitToString(date.getMonth()+1),temp.dateDigitToString(date.getDate()),temp.dateDigitToString(date.getHours()),temp.dateDigitToString(date.getMinutes()),temp.dateDigitToString(date.getSeconds()));
  return time.year + '年' + time.month + '月' + time.date + '日 ' + time.hour + ':' + time.minute + ':' + time.second;
}
