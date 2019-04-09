/*
感謝您觀看這份程式碼
作品名稱: 萬年曆
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2019/4/9
版本: 1.0.0.0
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var year = 2019;
var month = 4;
var day = 7;
var hour = 0;
var min = 0;

var label1; // 西元 (Label)
var label2; // 年 (Label)
var label3; // 月 (Label)
var label4; // 日 (Label)
var label5; // 時 (Label)
var label6; // 分 (Label)
var textBox1; // 年 (textarea)
var textBox2; // 月 (textarea)
var textBox3; // 日 (textarea)
var textBox4; // 時 (textarea)
var textBox5; // 分 (textarea)
var button1; // 轉換 (button)
var button2; // Now (button)
var label7; // Output (label)
var p1; // Output (p)

var Gan = "癸甲乙丙丁戊己庚辛壬"; // 天干 (string)
var Zhi = "亥子丑寅卯辰巳午未申酉戌"; // 地支 (string)

/* p5 functions */
function setup(){
  label1 = createElement('label', '西元');
  label1.parent(document.body);
  textBox1 = createInput('');
  label2 = createElement('label', '年');
  label2.parent(document.body);
  textBox2 = createInput('');
  label3 = createElement('label', '月');
  label3.parent(document.body);
  textBox3 = createInput('');
  label4 = createElement('label', '日');
  label4.parent(document.body);
  textBox4 = createInput('');
  label5 = createElement('label', '時');
  label5.parent(document.body);
  textBox5 = createInput('');
  label6 = createElement('label', '分');
  label6.parent(document.body);
  button1 = createButton('轉換');
  button1.mousePressed(button1_Clicked);
  createP('');
  button2 = createButton('Now');
  button2.mousePressed(button2_Clicked);
  createP('');
  label7 = createElement('label', '請輸入日期，然後按「轉換」。');
  label7.parent(document.body);
  p1 = createP('');
}

function draw(){

}

function calculate(){ // (string)
  y = (apparentYear()+57) % 60;
  console.log(y);
  NianZhu = Gan[y%10] + Zhi[y%12]; // 年柱
  m = apparentMonth() + ((y+4)%5)*12 + 2;
  YueZhu = Gan[m%10] + Zhi[m%12]; // 月柱
  output = "生辰八字: " + NianZhu + YueZhu;
  var i = 0;
  if(month%2 == 0){
    i = 6;
  }
  C = Math.floor(year/100);
  y = year % 100;
  M = month;
  if(M <= 2){
    y -= 1;
    M += 12;
  }
  d = day;
  console.log("C="+C+", y="+y+", M="+M+", d="+d);
  g = 4*C + Math.floor(C/4) + 5*y + Math.floor(y/4) + Math.floor(3*(M+1)/5) + d - 3;
  z = 8*C + Math.floor(C/4) + 5*y + Math.floor(y/4) + Math.floor(3*(M+1)/5) + d + 7 + i;
  RiZhu = Gan[g%10] + Zhi[z%12]; // 日柱
  output += RiZhu;
  h = Math.floor((hour+3)/2);
  h2 = h + ((g+4)%5)*12;
  ShiZhu = Gan[h2%10] + Zhi[h%12]; // 時柱
  output += ShiZhu;
  return output;
}

function apparentMonth(){
  var Jie = [0, 5, 4, 5, 5, 5, 5, 7, 8, 7, 8, 7, 7]; // 節
  if(Jie[month] > day){
    m = month - 2;
  }else{
    m = month - 1;
  }
  if(m <= 0){
    m += 12;
  }
  return m;
}

function apparentYear(){
  if (apparentMonth() == 12 || month == 1){
    return year - 1;
  }else{
    return year;
  }
}
