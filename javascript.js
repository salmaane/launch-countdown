"use strict";

let date = new Date(2022,10 ,22);

let day = document.querySelector(".day p");
let hour = document.querySelector(".hour p");
let minute = document.querySelector(".minute p");
let second = document.querySelector(".second p");

function update() {
  let timeLeft = new  Date(date - new Date());

  if(timeLeft<0) {
    return;
  }

  day.innerHTML = timeLeft.getDate()-1 < 10 ? '0' + ( timeLeft.getDate() - 1) : timeLeft.getDate()-1 +'';
  hour.innerHTML = timeLeft.getHours() < 10 ? '0' + timeLeft.getHours() : timeLeft.getHours() +'';
  minute.innerHTML = timeLeft.getMinutes() < 10 ? '0' + timeLeft.getMinutes() : timeLeft.getMinutes() +'';
  second.innerHTML = timeLeft.getSeconds() < 10 ? '0' + timeLeft.getSeconds() : timeLeft.getSeconds() +'';
}

update();
let timer = setInterval(update,1000)
