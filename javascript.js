"use strict";

let date = new Date(2022,10,9,0,0,0);

let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

update();
let timer = setInterval(update,1000)

function update() {
  let timeLeft = new  Date(date - new Date());
  day.innerHTML = timeLeft.getDate() < 10 ? '0' + timeLeft.getDate() : timeLeft.getDate() +'';
  hour.innerHTML = timeLeft.getHours() < 10 ? '0' + timeLeft.getHours() : timeLeft.getHours() +'';
  minute.innerHTML = timeLeft.getMinutes() < 10 ? '0' + timeLeft.getMinutes() : timeLeft.getMinutes() +'';
  second.innerHTML = timeLeft.getSeconds() < 10 ? '0' + timeLeft.getSeconds() : timeLeft.getSeconds() +'';
}
