/* events
版本: 1.0.0.0
2019/4/9
*/

/* Timed Events */
function sendOnline(){ // send a message to show you are online to the server

}

/* Click Events */
function button1_Clicked(){
  year = parseInt(textBox1.value());
  month = parseInt(textBox2.value());
  day = parseInt(textBox3.value());
  hour = parseInt(textBox4.value());
  min = parseInt(textBox5.value());
  console.log(year);
  console.log(month);
  console.log(day);
  console.log(hour);
  console.log(min);
  if(isNaN(year)){
    alert('請輸入年');
    return;
  }
  if(isNaN(month)){
    alert('請輸入月');
    return;
  }
  if(isNaN(day)){
    alert('請輸入日');
    return;
  }
  if(isNaN(hour)){
    alert('請輸入時');
    return;
  }
  if(isNaN(min)){
    alert('請輸入分');
    return;
  }
  s = calculate();
  label7.html(s);

  h = Math.floor((hour+3)/2);
  s = "農曆: " + apparentYear() + "年" + apparentMonth() + "月" + Math.round(lunarDay()) + "日" + Zhi[h%12];
  if(hour%2 == 1){
    s += "初";
  }else{
    s += "正";
  }
  if(min < 15){
    s += "初";
  }else{
    s += Math.floor(min/15);
  }
  s += "刻" + (min%15) + "分";
  p1.html(s);
}

function button2_Clicked(){
  var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var y = today.getFullYear();
    var mo = today.getMonth() + 1;
    var d = today.getDate();
    textBox1.value(y);
    textBox2.value(mo);
    textBox3.value(d);
    textBox4.value(h);
    textBox5.value(m);
}
