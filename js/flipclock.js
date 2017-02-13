var stopp = 1;
var endtime = 60*60;
var stopbutton = document.getElementById("stopb");
var startbutton = document.getElementById("startb");
var jiashi = document.getElementById("inch");
var jiafen = document.getElementById("incm");
var jiamiao = document.getElementById("incs");
var jianshi = document.getElementById("dech");
var jianfen = document.getElementById("decm");
var jianmiao = document.getElementById("decs");
var clock = document.getElementById("clockdiv");
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');



function getTimeRemaining(endtime) {
  var t = endtime;
  var seconds = Math.floor((t ) % 60);
  var minutes = Math.floor((t / 60) % 60);
  var hours = Math.floor((t / ( 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}



function initializeClock() {


  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  function updateClock() {
    if (stopp == 0) {

      var t = getTimeRemaining(endtime);

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }

      endtime = endtime - 1;
    }
    }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);

}

jiashi.onclick =function() {
  if (Math.floor((endtime/ ( 60 * 60)) % 24)>22){
    endtime = endtime - 23*60*60;
  }
  else {
    endtime = endtime + 60*60;
  }
  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}

jiafen.onclick =function() {
  if (Math.floor((endtime/ 60) % 60)>58){
    endtime = endtime - 59*60;
  }
  else {
    endtime = endtime + 60;
  }
  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}

jiamiao.onclick =function() {
  if (Math.floor(endtime % 60)>58) {
    endtime = endtime - 59;
  }
  else {
    endtime = endtime +1;
  }
  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

}

jianshi.onclick =function() {
  if (Math.floor((endtime/ ( 60 * 60)) % 24)<1){
    endtime = endtime + 23*60*60;
  }
  else {
    endtime = endtime - 60*60;
  }
  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}

jianfen.onclick =function() {
  if (Math.floor((endtime/ 60) % 60)<1){
    endtime = endtime + 59*60;
  }
  else {
    endtime = endtime - 60;
  }
  var t = getTimeRemaining(endtime);

  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}

jianmiao.onclick =function() {
  if (Math.floor((endtime ) % 60)<1){
    endtime = endtime + 59;
  }
  else {
    endtime = endtime - 1;
  }
  var t = getTimeRemaining(endtime);
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}



stopbutton.onclick = function() {stopp=1};
startbutton.onclick = function() {stopp=0};
initializeClock();