function lunarDay(){
  y = year - 1977;
  while(y < 0){
    y += 76;
  }
  Q = Math.floor((y) / 4);
  R = (y) % 4;
  console.log(Q, R)
  console.log(14*Q + 10.6*(R+1) + dayOfYear());
  console.log((14*Q + 10.6*(R+1) + dayOfYear()) % 29.5);
  r = (14*Q + 10.6*(R+1) + dayOfYear()) % 29.5;//305888531;
  r += 29.5;
  r %= 29.5;
  return r;
}

function dayOfYear(){
  var d = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if(year%4 == 0 && year%100 != 0){
    d[2] = 29;
  }
  if(year%400 == 0){
    d[2] = 29;
  }
  var sum = 0;
  for(var i=0; i<month; i++){
    sum += d[i];
  }
  sum += day;
  return sum;
}
