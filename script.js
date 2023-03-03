function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = "Clock: " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
};

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//gain access to the timer values
function time(){  
  const day = new Date();
  let s = day.getSeconds();
  let m = day.getMinutes();
  let h = h24;

  let h24 = day.getHours();
  let daynight = "PM";

//attempt to update website with new information
  document.getElementById('updater').innerHTML = h + ":" + m + ":" + s + daynight;
};

//attempt to create AM and PM difference
function timeset(){
  if(h24 <= 12){
    daynight = "AM";
    return daynight;
  }
  else{
    h = h24 - 12;
    return h;
  }
};

function hour(){
  if(h < 10){
    h = "0" + h;
  }
};
  if(m < 10){
    m = "0" + m;
  }
  if(s < 10){
    s = "0" + s;
  }