/* events
版本: 1.0.0.0
2019/4/7
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
  console.log('convert');
}

function button2_Clicked(){

}
