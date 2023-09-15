var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
/**
    var progress = document.querySelector(".progress");
    var progressSpan = document.querySelector("span");
    => neu de thanh dang nhu vay thi su kien e.stopPropagation();
    se khong hoat dong duoc do ...
 */

//lay duoc vi tri click tren timer
//chuyen doi het thanh %
// tinh do dai cua progressBar
var isDrag = false; //cam co
var progressBarWidth = progressBar.clientWidth;
var initialClientX; //khoang cach giua timer va body
var initialValue = 0; //khoang cach cua lan keo truoc tren timer
var value = 0; //gia tri de set width cho progress

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handlerUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});

var handlerUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};
progressSpan.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
  e.stopPropagation();
});
document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX; //khoang keo theo
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;
    if (value <= 0) {
      value = 0;
    }
    if (value >= 100) {
      value = 100;
    }
    handlerUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currentTime);
    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});
document.addEventListener("mouseup", function () {
  if (isDrag) {
    initialValue = value;
    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
  isDrag = false;
});
//xay dung trinh phat nhac
var audio = document.querySelector(".audio");
// console.log(audio.duration);=>khong chay duoc vi chua load xong nhac

var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".play-btn");
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var timePreview = document.querySelector(".time-preview");

var getTime = function (seconds) {
  // giay=>phut va giay
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);
  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

//lang nghe su kien load xong nhac
audio.addEventListener("loadeddata", function () {
  //   console.log(getTime(audio.duration));
  durationEl.innerText = getTime(audio.duration);
});
//phat nhac
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});
audio.addEventListener("timeupdate", function () {
  //lay ra ti le % dua vao currentTime
  var value = (audio.currentTime * 100) / audio.duration;
  //   console.log(audio.currentTime);
  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);
    handlerUpdateValue(value);
  }
});
//hover lay time

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = e.offsetX + "px";
});
progressBar.addEventListener("mouseout", function (e) {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});
audio.addEventListener("ended", function (e) {
  playBtn.innerHTML = playBtnIcon;
  audio.currentTime = 0;
  handlerUpdateValue(0);
});
//dong bo voi control
audio.addEventListener("play", function (e) {
  playBtn.innerHTML = pauseBtnIcon; //khong co thi khong the dong bo voi control
});
audio.addEventListener("pause", function (e) {
  playBtn.innerHTML = playBtnIcon;
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
