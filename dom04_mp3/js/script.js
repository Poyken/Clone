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

var lyrics = `{
  "err": 0,
  "msg": "Success",
  "data": {
    "sentences": [
      {
        "words": [
          {
            "startTime": 20420,
            "endTime": 20710,
            "data": "Tại"
          },
          {
            "startTime": 20710,
            "endTime": 20970,
            "data": "vì"
          },
          {
            "startTime": 20970,
            "endTime": 20970,
            "data": "thích"
          },
          {
            "startTime": 20970,
            "endTime": 21240,
            "data": "em"
          },
          {
            "startTime": 21240,
            "endTime": 21500,
            "data": "nhiều"
          },
          {
            "startTime": 21500,
            "endTime": 21500,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 21500,
            "endTime": 21770,
            "data": "Nhưng"
          },
          {
            "startTime": 21770,
            "endTime": 22030,
            "data": "em"
          },
          {
            "startTime": 22030,
            "endTime": 22030,
            "data": "lại"
          },
          {
            "startTime": 22030,
            "endTime": 22290,
            "data": "nói"
          },
          {
            "startTime": 22290,
            "endTime": 22290,
            "data": "là"
          },
          {
            "startTime": 22290,
            "endTime": 22570,
            "data": "à"
          },
          {
            "startTime": 22570,
            "endTime": 23050,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 23050,
            "endTime": 23330,
            "data": "Cũng"
          },
          {
            "startTime": 23330,
            "endTime": 23590,
            "data": "định"
          },
          {
            "startTime": 23590,
            "endTime": 23850,
            "data": "solo"
          },
          {
            "startTime": 23850,
            "endTime": 23850,
            "data": "Hip"
          },
          {
            "startTime": 23850,
            "endTime": 24130,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 24130,
            "endTime": 24390,
            "data": "Cùng"
          },
          {
            "startTime": 24390,
            "endTime": 24390,
            "data": "với"
          },
          {
            "startTime": 24390,
            "endTime": 24650,
            "data": "trai"
          },
          {
            "startTime": 24650,
            "endTime": 24920,
            "data": "bản"
          },
          {
            "startTime": 24920,
            "endTime": 24920,
            "data": "nhưng"
          },
          {
            "startTime": 24920,
            "endTime": 25180,
            "data": "mà"
          },
          {
            "startTime": 25180,
            "endTime": 25670,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 25670,
            "endTime": 25970,
            "data": "Anh"
          },
          {
            "startTime": 25970,
            "endTime": 26210,
            "data": "gửi"
          },
          {
            "startTime": 26210,
            "endTime": 26210,
            "data": "vào"
          },
          {
            "startTime": 26210,
            "endTime": 26480,
            "data": "trong"
          },
          {
            "startTime": 26480,
            "endTime": 26750,
            "data": "câu"
          },
          {
            "startTime": 26750,
            "endTime": 26750,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 26750,
            "endTime": 27040,
            "data": "Cho"
          },
          {
            "startTime": 27040,
            "endTime": 27290,
            "data": "em"
          },
          {
            "startTime": 27290,
            "endTime": 27290,
            "data": "dính"
          },
          {
            "startTime": 27290,
            "endTime": 27570,
            "data": "cả"
          },
          {
            "startTime": 27570,
            "endTime": 27570,
            "data": "thính"
          },
          {
            "startTime": 27570,
            "endTime": 27850,
            "data": "cả"
          },
          {
            "startTime": 27850,
            "endTime": 28370,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 28370,
            "endTime": 28500,
            "data": "Nhà"
          },
          {
            "startTime": 28500,
            "endTime": 28630,
            "data": "em"
          },
          {
            "startTime": 28630,
            "endTime": 28770,
            "data": "có"
          },
          {
            "startTime": 28770,
            "endTime": 29030,
            "data": "mấy"
          },
          {
            "startTime": 29030,
            "endTime": 29300,
            "data": "quả"
          },
          {
            "startTime": 29300,
            "endTime": 29430,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 29430,
            "endTime": 29560,
            "data": "Ừ"
          },
          {
            "startTime": 29560,
            "endTime": 29830,
            "data": "thì"
          },
          {
            "startTime": 29830,
            "endTime": 29960,
            "data": "anh"
          },
          {
            "startTime": 29960,
            "endTime": 30100,
            "data": "cũng"
          },
          {
            "startTime": 30100,
            "endTime": 30360,
            "data": "tính"
          },
          {
            "startTime": 30360,
            "endTime": 30630,
            "data": "cả"
          },
          {
            "startTime": 30630,
            "endTime": 31160,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 31160,
            "endTime": 31290,
            "data": "Tại"
          },
          {
            "startTime": 31290,
            "endTime": 31420,
            "data": "vì"
          },
          {
            "startTime": 31420,
            "endTime": 31560,
            "data": "thích"
          },
          {
            "startTime": 31560,
            "endTime": 31820,
            "data": "em"
          },
          {
            "startTime": 31820,
            "endTime": 31950,
            "data": "nhiều"
          },
          {
            "startTime": 31950,
            "endTime": 32090,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 32090,
            "endTime": 32350,
            "data": "Nhưng"
          },
          {
            "startTime": 32350,
            "endTime": 32480,
            "data": "em"
          },
          {
            "startTime": 32480,
            "endTime": 32620,
            "data": "lại"
          },
          {
            "startTime": 32620,
            "endTime": 32750,
            "data": "nói"
          },
          {
            "startTime": 32750,
            "endTime": 33020,
            "data": "là"
          },
          {
            "startTime": 33020,
            "endTime": 33280,
            "data": "à"
          },
          {
            "startTime": 33280,
            "endTime": 33810,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 33810,
            "endTime": 33950,
            "data": "Cũng"
          },
          {
            "startTime": 33950,
            "endTime": 34080,
            "data": "định"
          },
          {
            "startTime": 34080,
            "endTime": 34480,
            "data": "solo"
          },
          {
            "startTime": 34480,
            "endTime": 34610,
            "data": "Hip"
          },
          {
            "startTime": 34610,
            "endTime": 34750,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 34750,
            "endTime": 34880,
            "data": "Cùng"
          },
          {
            "startTime": 34880,
            "endTime": 35150,
            "data": "với"
          },
          {
            "startTime": 35150,
            "endTime": 35280,
            "data": "trai"
          },
          {
            "startTime": 35280,
            "endTime": 35410,
            "data": "bản"
          },
          {
            "startTime": 35410,
            "endTime": 35670,
            "data": "nhưng"
          },
          {
            "startTime": 35670,
            "endTime": 35940,
            "data": "mà"
          },
          {
            "startTime": 35940,
            "endTime": 36470,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 36470,
            "endTime": 36600,
            "data": "Anh"
          },
          {
            "startTime": 36600,
            "endTime": 36730,
            "data": "gửi"
          },
          {
            "startTime": 36730,
            "endTime": 37000,
            "data": "vào"
          },
          {
            "startTime": 37000,
            "endTime": 37130,
            "data": "trong"
          },
          {
            "startTime": 37130,
            "endTime": 37270,
            "data": "câu"
          },
          {
            "startTime": 37270,
            "endTime": 37400,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 37400,
            "endTime": 37530,
            "data": "Cho"
          },
          {
            "startTime": 37530,
            "endTime": 37800,
            "data": "em"
          },
          {
            "startTime": 37800,
            "endTime": 37930,
            "data": "dính"
          },
          {
            "startTime": 37930,
            "endTime": 38070,
            "data": "cả"
          },
          {
            "startTime": 38070,
            "endTime": 38330,
            "data": "thính"
          },
          {
            "startTime": 38330,
            "endTime": 38600,
            "data": "cả"
          },
          {
            "startTime": 38600,
            "endTime": 38830,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 38830,
            "endTime": 38960,
            "data": "Nhà"
          },
          {
            "startTime": 38960,
            "endTime": 39090,
            "data": "em"
          },
          {
            "startTime": 39090,
            "endTime": 39360,
            "data": "có"
          },
          {
            "startTime": 39360,
            "endTime": 39490,
            "data": "tới"
          },
          {
            "startTime": 39490,
            "endTime": 39620,
            "data": "mấy"
          },
          {
            "startTime": 39620,
            "endTime": 40020,
            "data": "quả"
          },
          {
            "startTime": 40020,
            "endTime": 40160,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 40160,
            "endTime": 40290,
            "data": "Ừ"
          },
          {
            "startTime": 40290,
            "endTime": 40420,
            "data": "thì"
          },
          {
            "startTime": 40420,
            "endTime": 40690,
            "data": "anh"
          },
          {
            "startTime": 40690,
            "endTime": 40820,
            "data": "cũng"
          },
          {
            "startTime": 40820,
            "endTime": 40950,
            "data": "tính"
          },
          {
            "startTime": 40950,
            "endTime": 41210,
            "data": "cả"
          },
          {
            "startTime": 41210,
            "endTime": 41610,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 41610,
            "endTime": 41880,
            "data": "À"
          },
          {
            "startTime": 41880,
            "endTime": 42150,
            "data": "lôi"
          },
          {
            "startTime": 42150,
            "endTime": 42650,
            "data": "nó"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 42650,
            "endTime": 42780,
            "data": "Gặp"
          },
          {
            "startTime": 42780,
            "endTime": 42910,
            "data": "em"
          },
          {
            "startTime": 42910,
            "endTime": 43180,
            "data": "ở"
          },
          {
            "startTime": 43180,
            "endTime": 43310,
            "data": "thung"
          },
          {
            "startTime": 43310,
            "endTime": 43710,
            "data": "lũng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 43710,
            "endTime": 43840,
            "data": "Ném"
          },
          {
            "startTime": 43840,
            "endTime": 43980,
            "data": "quả"
          },
          {
            "startTime": 43980,
            "endTime": 44110,
            "data": "còn"
          },
          {
            "startTime": 44110,
            "endTime": 44240,
            "data": "lên"
          },
          {
            "startTime": 44240,
            "endTime": 44640,
            "data": "không"
          },
          {
            "startTime": 44640,
            "endTime": 45310,
            "data": "trung"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 45310,
            "endTime": 45440,
            "data": "Anh"
          },
          {
            "startTime": 45440,
            "endTime": 45570,
            "data": "bận"
          },
          {
            "startTime": 45570,
            "endTime": 45700,
            "data": "đi"
          },
          {
            "startTime": 45700,
            "endTime": 45840,
            "data": "tìm"
          },
          {
            "startTime": 45840,
            "endTime": 45970,
            "data": "cảm"
          },
          {
            "startTime": 45970,
            "endTime": 46360,
            "data": "hứng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 46360,
            "endTime": 46500,
            "data": "Trong"
          },
          {
            "startTime": 46500,
            "endTime": 46630,
            "data": "chuỗi"
          },
          {
            "startTime": 46630,
            "endTime": 46760,
            "data": "ngày"
          },
          {
            "startTime": 46760,
            "endTime": 46900,
            "data": "bị"
          },
          {
            "startTime": 46900,
            "endTime": 47300,
            "data": "mông"
          },
          {
            "startTime": 47300,
            "endTime": 47830,
            "data": "lung"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 47830,
            "endTime": 47960,
            "data": "Anh"
          },
          {
            "startTime": 47960,
            "endTime": 48090,
            "data": "cầm"
          },
          {
            "startTime": 48090,
            "endTime": 48360,
            "data": "trên"
          },
          {
            "startTime": 48360,
            "endTime": 48490,
            "data": "tay"
          },
          {
            "startTime": 48490,
            "endTime": 48630,
            "data": "cây"
          },
          {
            "startTime": 48630,
            "endTime": 49030,
            "data": "nỏ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 49030,
            "endTime": 49160,
            "data": "Ngắm"
          },
          {
            "startTime": 49160,
            "endTime": 49290,
            "data": "vào"
          },
          {
            "startTime": 49290,
            "endTime": 49420,
            "data": "tâm"
          },
          {
            "startTime": 49420,
            "endTime": 49690,
            "data": "nhưng"
          },
          {
            "startTime": 49690,
            "endTime": 49950,
            "data": "không"
          },
          {
            "startTime": 49950,
            "endTime": 50220,
            "data": "trúng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 50220,
            "endTime": 50350,
            "data": "Nhưng"
          },
          {
            "startTime": 50350,
            "endTime": 50480,
            "data": "mà"
          },
          {
            "startTime": 50480,
            "endTime": 50620,
            "data": "lỡ"
          },
          {
            "startTime": 50620,
            "endTime": 50750,
            "data": "bị"
          },
          {
            "startTime": 50750,
            "endTime": 51010,
            "data": "em"
          },
          {
            "startTime": 51010,
            "endTime": 51150,
            "data": "gây"
          },
          {
            "startTime": 51150,
            "endTime": 51280,
            "data": "thương"
          },
          {
            "startTime": 51280,
            "endTime": 51550,
            "data": "nhớ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 51550,
            "endTime": 51810,
            "data": "Bắn"
          },
          {
            "startTime": 51810,
            "endTime": 51950,
            "data": "vào"
          },
          {
            "startTime": 51950,
            "endTime": 52080,
            "data": "tim"
          },
          {
            "startTime": 52080,
            "endTime": 52350,
            "data": "mà"
          },
          {
            "startTime": 52350,
            "endTime": 52610,
            "data": "không"
          },
          {
            "startTime": 52610,
            "endTime": 53140,
            "data": "súng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 53140,
            "endTime": 53270,
            "data": "Trai"
          },
          {
            "startTime": 53270,
            "endTime": 53400,
            "data": "bản"
          },
          {
            "startTime": 53400,
            "endTime": 53670,
            "data": "em"
          },
          {
            "startTime": 53670,
            "endTime": 53800,
            "data": "chơi"
          },
          {
            "startTime": 53800,
            "endTime": 53940,
            "data": "đàn"
          },
          {
            "startTime": 53940,
            "endTime": 54200,
            "data": "tính"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 54200,
            "endTime": 54330,
            "data": "Còn"
          },
          {
            "startTime": 54330,
            "endTime": 54470,
            "data": "anh"
          },
          {
            "startTime": 54470,
            "endTime": 54600,
            "data": "thì"
          },
          {
            "startTime": 54600,
            "endTime": 54870,
            "data": "gảy"
          },
          {
            "startTime": 54870,
            "endTime": 55810,
            "data": "guitar"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 55810,
            "endTime": 55940,
            "data": "Anh"
          },
          {
            "startTime": 55940,
            "endTime": 56070,
            "data": "thì"
          },
          {
            "startTime": 56070,
            "endTime": 56340,
            "data": "không"
          },
          {
            "startTime": 56340,
            "endTime": 56470,
            "data": "biết"
          },
          {
            "startTime": 56470,
            "endTime": 56600,
            "data": "múa"
          },
          {
            "startTime": 56600,
            "endTime": 56740,
            "data": "khèn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 56740,
            "endTime": 57000,
            "data": "Nhưng"
          },
          {
            "startTime": 57000,
            "endTime": 57130,
            "data": "mà"
          },
          {
            "startTime": 57130,
            "endTime": 57260,
            "data": "giỏi"
          },
          {
            "startTime": 57260,
            "endTime": 57660,
            "data": "quẩy"
          },
          {
            "startTime": 57660,
            "endTime": 58460,
            "data": "Vina"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 58460,
            "endTime": 58590,
            "data": "Yêu"
          },
          {
            "startTime": 58590,
            "endTime": 58860,
            "data": "em"
          },
          {
            "startTime": 58860,
            "endTime": 58990,
            "data": "mấy"
          },
          {
            "startTime": 58990,
            "endTime": 59130,
            "data": "núi"
          },
          {
            "startTime": 59130,
            "endTime": 59260,
            "data": "cũng"
          },
          {
            "startTime": 59260,
            "endTime": 59530,
            "data": "trèo"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 59530,
            "endTime": 59670,
            "data": "Mặc"
          },
          {
            "startTime": 59670,
            "endTime": 59800,
            "data": "dù"
          },
          {
            "startTime": 59800,
            "endTime": 59930,
            "data": "không"
          },
          {
            "startTime": 59930,
            "endTime": 60330,
            "data": "giỏi"
          },
          {
            "startTime": 60330,
            "endTime": 60590,
            "data": "đi"
          },
          {
            "startTime": 60590,
            "endTime": 60860,
            "data": "xa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 60860,
            "endTime": 60990,
            "data": "Anh"
          },
          {
            "startTime": 60990,
            "endTime": 61120,
            "data": "lại"
          },
          {
            "startTime": 61120,
            "endTime": 61260,
            "data": "còn"
          },
          {
            "startTime": 61260,
            "endTime": 61520,
            "data": "giỏi"
          },
          {
            "startTime": 61520,
            "endTime": 61650,
            "data": "cả"
          },
          {
            "startTime": 61650,
            "endTime": 61920,
            "data": "thi"
          },
          {
            "startTime": 61920,
            "endTime": 62190,
            "data": "ca"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 62190,
            "endTime": 62330,
            "data": "Biến"
          },
          {
            "startTime": 62330,
            "endTime": 62590,
            "data": "homestay"
          },
          {
            "startTime": 62590,
            "endTime": 62730,
            "data": "bản"
          },
          {
            "startTime": 62730,
            "endTime": 62990,
            "data": "thành"
          },
          {
            "startTime": 62990,
            "endTime": 63790,
            "data": "villa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 63790,
            "endTime": 64060,
            "data": "Tấm"
          },
          {
            "startTime": 64060,
            "endTime": 64190,
            "data": "lòng"
          },
          {
            "startTime": 64190,
            "endTime": 64320,
            "data": "anh"
          },
          {
            "startTime": 64320,
            "endTime": 64320,
            "data": "không"
          },
          {
            "startTime": 64320,
            "endTime": 64460,
            "data": "phải"
          },
          {
            "startTime": 64460,
            "endTime": 64720,
            "data": "thú"
          },
          {
            "startTime": 64720,
            "endTime": 64860,
            "data": "dữ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 64860,
            "endTime": 64990,
            "data": "Không"
          },
          {
            "startTime": 64990,
            "endTime": 65120,
            "data": "cần"
          },
          {
            "startTime": 65120,
            "endTime": 65260,
            "data": "mổ"
          },
          {
            "startTime": 65260,
            "endTime": 65520,
            "data": "bụng"
          },
          {
            "startTime": 65520,
            "endTime": 65650,
            "data": "thì"
          },
          {
            "startTime": 65650,
            "endTime": 65790,
            "data": "mới"
          },
          {
            "startTime": 65790,
            "endTime": 65920,
            "data": "được"
          },
          {
            "startTime": 65920,
            "endTime": 66450,
            "data": "xem"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 66450,
            "endTime": 66720,
            "data": "Mấy"
          },
          {
            "startTime": 66720,
            "endTime": 66850,
            "data": "anh"
          },
          {
            "startTime": 66850,
            "endTime": 66990,
            "data": "thanh"
          },
          {
            "startTime": 66990,
            "endTime": 67120,
            "data": "niên"
          },
          {
            "startTime": 67120,
            "endTime": 67250,
            "data": "trong"
          },
          {
            "startTime": 67250,
            "endTime": 67530,
            "data": "bản"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 67530,
            "endTime": 67660,
            "data": "Phải"
          },
          {
            "startTime": 67660,
            "endTime": 67790,
            "data": "biết"
          },
          {
            "startTime": 67790,
            "endTime": 67920,
            "data": "uống"
          },
          {
            "startTime": 67920,
            "endTime": 68190,
            "data": "rượu"
          },
          {
            "startTime": 68190,
            "endTime": 68320,
            "data": "mới"
          },
          {
            "startTime": 68320,
            "endTime": 68450,
            "data": "tán"
          },
          {
            "startTime": 68450,
            "endTime": 68580,
            "data": "được"
          },
          {
            "startTime": 68580,
            "endTime": 69110,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 69110,
            "endTime": 69250,
            "data": "Nhà"
          },
          {
            "startTime": 69250,
            "endTime": 69520,
            "data": "sàn"
          },
          {
            "startTime": 69520,
            "endTime": 69660,
            "data": "của"
          },
          {
            "startTime": 69660,
            "endTime": 69790,
            "data": "em"
          },
          {
            "startTime": 69790,
            "endTime": 69920,
            "data": "sẵn"
          },
          {
            "startTime": 69920,
            "endTime": 70190,
            "data": "bậc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 70190,
            "endTime": 70320,
            "data": "Nhưng"
          },
          {
            "startTime": 70320,
            "endTime": 70450,
            "data": "nàng"
          },
          {
            "startTime": 70450,
            "endTime": 70590,
            "data": "đồng"
          },
          {
            "startTime": 70590,
            "endTime": 70850,
            "data": "ý"
          },
          {
            "startTime": 70850,
            "endTime": 70990,
            "data": "mới"
          },
          {
            "startTime": 70990,
            "endTime": 71120,
            "data": "có"
          },
          {
            "startTime": 71120,
            "endTime": 71250,
            "data": "đường"
          },
          {
            "startTime": 71250,
            "endTime": 71900,
            "data": "lên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 71900,
            "endTime": 72030,
            "data": "Anh"
          },
          {
            "startTime": 72030,
            "endTime": 72170,
            "data": "thì"
          },
          {
            "startTime": 72170,
            "endTime": 72300,
            "data": "số"
          },
          {
            "startTime": 72300,
            "endTime": 72430,
            "data": "vốn"
          },
          {
            "startTime": 72430,
            "endTime": 72570,
            "data": "đen"
          },
          {
            "startTime": 72570,
            "endTime": 72830,
            "data": "đủi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 72830,
            "endTime": 72960,
            "data": "Không"
          },
          {
            "startTime": 72960,
            "endTime": 73100,
            "data": "biết"
          },
          {
            "startTime": 73100,
            "endTime": 73360,
            "data": "lần"
          },
          {
            "startTime": 73360,
            "endTime": 73490,
            "data": "này"
          },
          {
            "startTime": 73490,
            "endTime": 73620,
            "data": "liệu"
          },
          {
            "startTime": 73620,
            "endTime": 73760,
            "data": "có"
          },
          {
            "startTime": 73760,
            "endTime": 73890,
            "data": "được"
          },
          {
            "startTime": 73890,
            "endTime": 74370,
            "data": "hên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 74370,
            "endTime": 74370,
            "data": "Ừ"
          },
          {
            "startTime": 74370,
            "endTime": 74650,
            "data": "thì"
          },
          {
            "startTime": 74650,
            "endTime": 74910,
            "data": "Noọng"
          },
          {
            "startTime": 74910,
            "endTime": 75710,
            "data": "ơi,"
          },
          {
            "startTime": 75710,
            "endTime": 75970,
            "data": "à"
          },
          {
            "startTime": 75970,
            "endTime": 76500,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 76500,
            "endTime": 76770,
            "data": "Hai"
          },
          {
            "startTime": 76770,
            "endTime": 76770,
            "data": "chúng"
          },
          {
            "startTime": 76770,
            "endTime": 77040,
            "data": "mình"
          },
          {
            "startTime": 77040,
            "endTime": 77040,
            "data": "thì"
          },
          {
            "startTime": 77040,
            "endTime": 77320,
            "data": "cùng"
          },
          {
            "startTime": 77320,
            "endTime": 77570,
            "data": "đẹp"
          },
          {
            "startTime": 77570,
            "endTime": 78030,
            "data": "nết"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 78030,
            "endTime": 78310,
            "data": "Đẹp"
          },
          {
            "startTime": 78310,
            "endTime": 78570,
            "data": "cả"
          },
          {
            "startTime": 78570,
            "endTime": 79100,
            "data": "đôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 79100,
            "endTime": 79370,
            "data": "Hội"
          },
          {
            "startTime": 79370,
            "endTime": 79370,
            "data": "trai"
          },
          {
            "startTime": 79370,
            "endTime": 79650,
            "data": "bản"
          },
          {
            "startTime": 79650,
            "endTime": 79920,
            "data": "để"
          },
          {
            "startTime": 79920,
            "endTime": 79920,
            "data": "anh"
          },
          {
            "startTime": 79920,
            "endTime": 80190,
            "data": "dẹp"
          },
          {
            "startTime": 80190,
            "endTime": 80720,
            "data": "hết"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 80720,
            "endTime": 80980,
            "data": "Chấp"
          },
          {
            "startTime": 80980,
            "endTime": 81240,
            "data": "cả"
          },
          {
            "startTime": 81240,
            "endTime": 81720,
            "data": "hội"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 81720,
            "endTime": 81720,
            "data": "Trồng"
          },
          {
            "startTime": 81720,
            "endTime": 81980,
            "data": "cây"
          },
          {
            "startTime": 81980,
            "endTime": 82240,
            "data": "kín"
          },
          {
            "startTime": 82240,
            "endTime": 82240,
            "data": "cả"
          },
          {
            "startTime": 82240,
            "endTime": 82500,
            "data": "quả"
          },
          {
            "startTime": 82500,
            "endTime": 82760,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 82760,
            "endTime": 83040,
            "data": "Xong"
          },
          {
            "startTime": 83040,
            "endTime": 83300,
            "data": "dắt"
          },
          {
            "startTime": 83300,
            "endTime": 83300,
            "data": "em"
          },
          {
            "startTime": 83300,
            "endTime": 83570,
            "data": "đi"
          },
          {
            "startTime": 83570,
            "endTime": 83830,
            "data": "về"
          },
          {
            "startTime": 83830,
            "endTime": 83830,
            "data": "nhà"
          },
          {
            "startTime": 83830,
            "endTime": 85580,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 85580,
            "endTime": 87390,
            "data": "Ơi"
          },
          {
            "startTime": 87390,
            "endTime": 87650,
            "data": "ơi"
          },
          {
            "startTime": 87650,
            "endTime": 87920,
            "data": "Noọng"
          },
          {
            "startTime": 87920,
            "endTime": 90040,
            "data": "ơi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 90040,
            "endTime": 90040,
            "data": "Thương"
          },
          {
            "startTime": 90040,
            "endTime": 90310,
            "data": "em"
          },
          {
            "startTime": 90310,
            "endTime": 90580,
            "data": "mấy"
          },
          {
            "startTime": 90580,
            "endTime": 91100,
            "data": "núi"
          },
          {
            "startTime": 91100,
            "endTime": 91640,
            "data": "cũng"
          },
          {
            "startTime": 91640,
            "endTime": 92970,
            "data": "trèo"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 92970,
            "endTime": 93230,
            "data": "Mấy"
          },
          {
            "startTime": 93230,
            "endTime": 93770,
            "data": "sông"
          },
          {
            "startTime": 93770,
            "endTime": 94030,
            "data": "cũng"
          },
          {
            "startTime": 94030,
            "endTime": 94290,
            "data": "lội"
          },
          {
            "startTime": 94290,
            "endTime": 94550,
            "data": "mấy"
          },
          {
            "startTime": 94550,
            "endTime": 95350,
            "data": "đèo"
          },
          {
            "startTime": 95350,
            "endTime": 95880,
            "data": "cũng"
          },
          {
            "startTime": 95880,
            "endTime": 97740,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 97740,
            "endTime": 98000,
            "data": "Nhà"
          },
          {
            "startTime": 98000,
            "endTime": 98280,
            "data": "em"
          },
          {
            "startTime": 98280,
            "endTime": 98540,
            "data": "ở"
          },
          {
            "startTime": 98540,
            "endTime": 99080,
            "data": "ngay"
          },
          {
            "startTime": 99080,
            "endTime": 99870,
            "data": "lưng"
          },
          {
            "startTime": 99870,
            "endTime": 100870,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 100870,
            "endTime": 101140,
            "data": "Nếu"
          },
          {
            "startTime": 101140,
            "endTime": 101940,
            "data": "như"
          },
          {
            "startTime": 101940,
            "endTime": 102200,
            "data": "có"
          },
          {
            "startTime": 102200,
            "endTime": 103730,
            "data": "dịp"
          },
          {
            "startTime": 103730,
            "endTime": 104000,
            "data": "mời"
          },
          {
            "startTime": 104000,
            "endTime": 105320,
            "data": "chàng"
          },
          {
            "startTime": 105320,
            "endTime": 105600,
            "data": "tới"
          },
          {
            "startTime": 105600,
            "endTime": 105860,
            "data": "chơi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 105860,
            "endTime": 106120,
            "data": "Tại"
          },
          {
            "startTime": 106120,
            "endTime": 106380,
            "data": "vì"
          },
          {
            "startTime": 106380,
            "endTime": 106380,
            "data": "thích"
          },
          {
            "startTime": 106380,
            "endTime": 106650,
            "data": "em"
          },
          {
            "startTime": 106650,
            "endTime": 106650,
            "data": "nhiều"
          },
          {
            "startTime": 106650,
            "endTime": 106890,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 106890,
            "endTime": 107020,
            "data": "Nhưng"
          },
          {
            "startTime": 107020,
            "endTime": 107150,
            "data": "em"
          },
          {
            "startTime": 107150,
            "endTime": 107280,
            "data": "lại"
          },
          {
            "startTime": 107280,
            "endTime": 107550,
            "data": "nói"
          },
          {
            "startTime": 107550,
            "endTime": 107680,
            "data": "là"
          },
          {
            "startTime": 107680,
            "endTime": 107950,
            "data": "à"
          },
          {
            "startTime": 107950,
            "endTime": 108480,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 108480,
            "endTime": 108610,
            "data": "Cũng"
          },
          {
            "startTime": 108610,
            "endTime": 108750,
            "data": "định"
          },
          {
            "startTime": 108750,
            "endTime": 109150,
            "data": "solo"
          },
          {
            "startTime": 109150,
            "endTime": 109280,
            "data": "Hip"
          },
          {
            "startTime": 109280,
            "endTime": 109410,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 109410,
            "endTime": 109550,
            "data": "Cùng"
          },
          {
            "startTime": 109550,
            "endTime": 109820,
            "data": "với"
          },
          {
            "startTime": 109820,
            "endTime": 109950,
            "data": "trai"
          },
          {
            "startTime": 109950,
            "endTime": 110080,
            "data": "bản"
          },
          {
            "startTime": 110080,
            "endTime": 110350,
            "data": "nhưng"
          },
          {
            "startTime": 110350,
            "endTime": 110610,
            "data": "mà"
          },
          {
            "startTime": 110610,
            "endTime": 111140,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 111140,
            "endTime": 111280,
            "data": "Anh"
          },
          {
            "startTime": 111280,
            "endTime": 111540,
            "data": "gửi"
          },
          {
            "startTime": 111540,
            "endTime": 111680,
            "data": "vào"
          },
          {
            "startTime": 111680,
            "endTime": 111810,
            "data": "trong"
          },
          {
            "startTime": 111810,
            "endTime": 111940,
            "data": "câu"
          },
          {
            "startTime": 111940,
            "endTime": 112070,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 112070,
            "endTime": 112340,
            "data": "Cho"
          },
          {
            "startTime": 112340,
            "endTime": 112470,
            "data": "em"
          },
          {
            "startTime": 112470,
            "endTime": 112610,
            "data": "dính"
          },
          {
            "startTime": 112610,
            "endTime": 112740,
            "data": "cả"
          },
          {
            "startTime": 112740,
            "endTime": 113010,
            "data": "thính"
          },
          {
            "startTime": 113010,
            "endTime": 113270,
            "data": "cả"
          },
          {
            "startTime": 113270,
            "endTime": 113640,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 113640,
            "endTime": 113770,
            "data": "Nhà"
          },
          {
            "startTime": 113770,
            "endTime": 114040,
            "data": "em"
          },
          {
            "startTime": 114040,
            "endTime": 114170,
            "data": "có"
          },
          {
            "startTime": 114170,
            "endTime": 114300,
            "data": "mấy"
          },
          {
            "startTime": 114300,
            "endTime": 114570,
            "data": "quả"
          },
          {
            "startTime": 114570,
            "endTime": 114840,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 114840,
            "endTime": 114980,
            "data": "Ừ"
          },
          {
            "startTime": 114980,
            "endTime": 115110,
            "data": "thì"
          },
          {
            "startTime": 115110,
            "endTime": 115240,
            "data": "anh"
          },
          {
            "startTime": 115240,
            "endTime": 115510,
            "data": "cũng"
          },
          {
            "startTime": 115510,
            "endTime": 115640,
            "data": "tính"
          },
          {
            "startTime": 115640,
            "endTime": 115900,
            "data": "cả"
          },
          {
            "startTime": 115900,
            "endTime": 116430,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 116430,
            "endTime": 116700,
            "data": "Tại"
          },
          {
            "startTime": 116700,
            "endTime": 116830,
            "data": "vì"
          },
          {
            "startTime": 116830,
            "endTime": 116960,
            "data": "thích"
          },
          {
            "startTime": 116960,
            "endTime": 117100,
            "data": "em"
          },
          {
            "startTime": 117100,
            "endTime": 117230,
            "data": "nhiều"
          },
          {
            "startTime": 117230,
            "endTime": 117500,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 117500,
            "endTime": 117630,
            "data": "Nhưng"
          },
          {
            "startTime": 117630,
            "endTime": 117760,
            "data": "em"
          },
          {
            "startTime": 117760,
            "endTime": 117900,
            "data": "lại"
          },
          {
            "startTime": 117900,
            "endTime": 118160,
            "data": "nói"
          },
          {
            "startTime": 118160,
            "endTime": 118290,
            "data": "là"
          },
          {
            "startTime": 118290,
            "endTime": 118560,
            "data": "à"
          },
          {
            "startTime": 118560,
            "endTime": 119100,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 119100,
            "endTime": 119370,
            "data": "Cũng"
          },
          {
            "startTime": 119370,
            "endTime": 119510,
            "data": "định"
          },
          {
            "startTime": 119510,
            "endTime": 119770,
            "data": "solo"
          },
          {
            "startTime": 119770,
            "endTime": 119900,
            "data": "Hip"
          },
          {
            "startTime": 119900,
            "endTime": 120170,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 120170,
            "endTime": 120300,
            "data": "Cùng"
          },
          {
            "startTime": 120300,
            "endTime": 120430,
            "data": "với"
          },
          {
            "startTime": 120430,
            "endTime": 120570,
            "data": "trai"
          },
          {
            "startTime": 120570,
            "endTime": 120830,
            "data": "bản"
          },
          {
            "startTime": 120830,
            "endTime": 120960,
            "data": "nhưng"
          },
          {
            "startTime": 120960,
            "endTime": 121230,
            "data": "mà"
          },
          {
            "startTime": 121230,
            "endTime": 121760,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 121760,
            "endTime": 122030,
            "data": "Anh"
          },
          {
            "startTime": 122030,
            "endTime": 122160,
            "data": "gửi"
          },
          {
            "startTime": 122160,
            "endTime": 122300,
            "data": "vào"
          },
          {
            "startTime": 122300,
            "endTime": 122430,
            "data": "trong"
          },
          {
            "startTime": 122430,
            "endTime": 122690,
            "data": "câu"
          },
          {
            "startTime": 122690,
            "endTime": 122830,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 122830,
            "endTime": 122960,
            "data": "Cho"
          },
          {
            "startTime": 122960,
            "endTime": 123090,
            "data": "em"
          },
          {
            "startTime": 123090,
            "endTime": 123220,
            "data": "dính"
          },
          {
            "startTime": 123220,
            "endTime": 123490,
            "data": "cả"
          },
          {
            "startTime": 123490,
            "endTime": 123620,
            "data": "thính"
          },
          {
            "startTime": 123620,
            "endTime": 124020,
            "data": "cả"
          },
          {
            "startTime": 124020,
            "endTime": 124280,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 124280,
            "endTime": 124280,
            "data": "Nhà"
          },
          {
            "startTime": 124280,
            "endTime": 124420,
            "data": "em"
          },
          {
            "startTime": 124420,
            "endTime": 124680,
            "data": "có"
          },
          {
            "startTime": 124680,
            "endTime": 124820,
            "data": "tới"
          },
          {
            "startTime": 124820,
            "endTime": 124950,
            "data": "mấy"
          },
          {
            "startTime": 124950,
            "endTime": 125350,
            "data": "quả"
          },
          {
            "startTime": 125350,
            "endTime": 125480,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 125480,
            "endTime": 125610,
            "data": "Ừ"
          },
          {
            "startTime": 125610,
            "endTime": 125750,
            "data": "thì"
          },
          {
            "startTime": 125750,
            "endTime": 125880,
            "data": "anh"
          },
          {
            "startTime": 125880,
            "endTime": 126150,
            "data": "cũng"
          },
          {
            "startTime": 126150,
            "endTime": 126280,
            "data": "tính"
          },
          {
            "startTime": 126280,
            "endTime": 126550,
            "data": "cả"
          },
          {
            "startTime": 126550,
            "endTime": 127340,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 127340,
            "endTime": 127740,
            "data": "À"
          },
          {
            "startTime": 127740,
            "endTime": 130740,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 159830,
            "endTime": 160360,
            "data": "Một"
          },
          {
            "startTime": 160360,
            "endTime": 160900,
            "data": "hai"
          },
          {
            "startTime": 160900,
            "endTime": 161160,
            "data": "ba"
          },
          {
            "startTime": 161160,
            "endTime": 161420,
            "data": "yeh"
          },
          {
            "startTime": 161420,
            "endTime": 161680,
            "data": "nơng"
          },
          {
            "startTime": 161680,
            "endTime": 161950,
            "data": "thoong"
          },
          {
            "startTime": 161950,
            "endTime": 162480,
            "data": "tham"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 162480,
            "endTime": 162760,
            "data": "Đây"
          },
          {
            "startTime": 162760,
            "endTime": 163010,
            "data": "là"
          },
          {
            "startTime": 163010,
            "endTime": 163010,
            "data": "người"
          },
          {
            "startTime": 163010,
            "endTime": 163300,
            "data": "miền"
          },
          {
            "startTime": 163300,
            "endTime": 163560,
            "data": "núi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 163560,
            "endTime": 163830,
            "data": "Phía"
          },
          {
            "startTime": 163830,
            "endTime": 164090,
            "data": "Bắc"
          },
          {
            "startTime": 164090,
            "endTime": 164360,
            "data": "Việt"
          },
          {
            "startTime": 164360,
            "endTime": 165560,
            "data": "Nam"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 165560,
            "endTime": 165840,
            "data": "Hiên"
          },
          {
            "startTime": 165840,
            "endTime": 166640,
            "data": "ngang"
          },
          {
            "startTime": 166640,
            "endTime": 166640,
            "data": "không"
          },
          {
            "startTime": 166640,
            "endTime": 166920,
            "data": "thích"
          },
          {
            "startTime": 166920,
            "endTime": 167180,
            "data": "luồn"
          },
          {
            "startTime": 167180,
            "endTime": 168170,
            "data": "cúi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 168170,
            "endTime": 169230,
            "data": "Flexing"
          },
          {
            "startTime": 169230,
            "endTime": 169500,
            "data": "theo"
          },
          {
            "startTime": 169500,
            "endTime": 169500,
            "data": "kiểu"
          },
          {
            "startTime": 169500,
            "endTime": 169780,
            "data": "miền"
          },
          {
            "startTime": 169780,
            "endTime": 170510,
            "data": "núi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 170510,
            "endTime": 170770,
            "data": "Ta"
          },
          {
            "startTime": 170770,
            "endTime": 171040,
            "data": "chơi"
          },
          {
            "startTime": 171040,
            "endTime": 171040,
            "data": "nhạc"
          },
          {
            "startTime": 171040,
            "endTime": 171590,
            "data": "trap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 171590,
            "endTime": 171850,
            "data": "Hip"
          },
          {
            "startTime": 171850,
            "endTime": 172120,
            "data": "Hop"
          },
          {
            "startTime": 172120,
            "endTime": 172380,
            "data": "trên"
          },
          {
            "startTime": 172380,
            "endTime": 172650,
            "data": "bản"
          },
          {
            "startTime": 172650,
            "endTime": 173180,
            "data": "làng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 173180,
            "endTime": 173450,
            "data": "Bản"
          },
          {
            "startTime": 173450,
            "endTime": 173450,
            "data": "này"
          },
          {
            "startTime": 173450,
            "endTime": 173710,
            "data": "là"
          },
          {
            "startTime": 173710,
            "endTime": 173980,
            "data": "bản"
          },
          {
            "startTime": 173980,
            "endTime": 174250,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 174250,
            "endTime": 174510,
            "data": "Biến"
          },
          {
            "startTime": 174510,
            "endTime": 174770,
            "data": "từ"
          },
          {
            "startTime": 174770,
            "endTime": 175050,
            "data": "đất"
          },
          {
            "startTime": 175050,
            "endTime": 175050,
            "data": "thành"
          },
          {
            "startTime": 175050,
            "endTime": 175310,
            "data": "bản"
          },
          {
            "startTime": 175310,
            "endTime": 176050,
            "data": "vàng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 176050,
            "endTime": 176050,
            "data": "Từ"
          },
          {
            "startTime": 176050,
            "endTime": 176310,
            "data": "những"
          },
          {
            "startTime": 176310,
            "endTime": 176310,
            "data": "ngày"
          },
          {
            "startTime": 176310,
            "endTime": 176590,
            "data": "khó"
          },
          {
            "startTime": 176590,
            "endTime": 176850,
            "data": "khăn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 176850,
            "endTime": 177110,
            "data": "Các"
          },
          {
            "startTime": 177110,
            "endTime": 177380,
            "data": "dân"
          },
          {
            "startTime": 177380,
            "endTime": 177380,
            "data": "tộc"
          },
          {
            "startTime": 177380,
            "endTime": 177640,
            "data": "còn"
          },
          {
            "startTime": 177640,
            "endTime": 177910,
            "data": "tản"
          },
          {
            "startTime": 177910,
            "endTime": 178150,
            "data": "mạn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 178150,
            "endTime": 178280,
            "data": "Đến"
          },
          {
            "startTime": 178280,
            "endTime": 178410,
            "data": "ngày"
          },
          {
            "startTime": 178410,
            "endTime": 178550,
            "data": "chung"
          },
          {
            "startTime": 178550,
            "endTime": 178810,
            "data": "tay"
          },
          {
            "startTime": 178810,
            "endTime": 178950,
            "data": "cùng"
          },
          {
            "startTime": 178950,
            "endTime": 179070,
            "data": "làm"
          },
          {
            "startTime": 179070,
            "endTime": 179340,
            "data": "kinh"
          },
          {
            "startTime": 179340,
            "endTime": 179600,
            "data": "tế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 179600,
            "endTime": 179740,
            "data": "Tiền"
          },
          {
            "startTime": 179740,
            "endTime": 180000,
            "data": "chất"
          },
          {
            "startTime": 180000,
            "endTime": 180140,
            "data": "đống"
          },
          {
            "startTime": 180140,
            "endTime": 180270,
            "data": "như"
          },
          {
            "startTime": 180270,
            "endTime": 180540,
            "data": "tải"
          },
          {
            "startTime": 180540,
            "endTime": 181030,
            "data": "hàng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 181030,
            "endTime": 181170,
            "data": "Bàn"
          },
          {
            "startTime": 181170,
            "endTime": 181300,
            "data": "tay"
          },
          {
            "startTime": 181300,
            "endTime": 182100,
            "data": "trắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 182100,
            "endTime": 182230,
            "data": "Từ"
          },
          {
            "startTime": 182230,
            "endTime": 182500,
            "data": "bàn"
          },
          {
            "startTime": 182500,
            "endTime": 182630,
            "data": "tay"
          },
          {
            "startTime": 182630,
            "endTime": 182840,
            "data": "trắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 182840,
            "endTime": 182840,
            "data": "Cần"
          },
          {
            "startTime": 182840,
            "endTime": 183130,
            "data": "cù"
          },
          {
            "startTime": 183130,
            "endTime": 183380,
            "data": "chịu"
          },
          {
            "startTime": 183380,
            "endTime": 183380,
            "data": "khó"
          },
          {
            "startTime": 183380,
            "endTime": 183650,
            "data": "không"
          },
          {
            "startTime": 183650,
            "endTime": 183910,
            "data": "nhờ"
          },
          {
            "startTime": 183910,
            "endTime": 183910,
            "data": "may"
          },
          {
            "startTime": 183910,
            "endTime": 184710,
            "data": "mắn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 184710,
            "endTime": 184970,
            "data": "Không"
          },
          {
            "startTime": 184970,
            "endTime": 184970,
            "data": "nhờ"
          },
          {
            "startTime": 184970,
            "endTime": 185240,
            "data": "may"
          },
          {
            "startTime": 185240,
            "endTime": 185510,
            "data": "mắn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 185510,
            "endTime": 185770,
            "data": "Trải"
          },
          {
            "startTime": 185770,
            "endTime": 185770,
            "data": "qua"
          },
          {
            "startTime": 185770,
            "endTime": 186030,
            "data": "khó"
          },
          {
            "startTime": 186030,
            "endTime": 186030,
            "data": "khăn"
          },
          {
            "startTime": 186030,
            "endTime": 186300,
            "data": "một"
          },
          {
            "startTime": 186300,
            "endTime": 186570,
            "data": "mưa"
          },
          {
            "startTime": 186570,
            "endTime": 186570,
            "data": "hai"
          },
          {
            "startTime": 186570,
            "endTime": 187360,
            "data": "nắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 187360,
            "endTime": 187630,
            "data": "Một"
          },
          {
            "startTime": 187630,
            "endTime": 187630,
            "data": "mưa"
          },
          {
            "startTime": 187630,
            "endTime": 187910,
            "data": "hai"
          },
          {
            "startTime": 187910,
            "endTime": 188160,
            "data": "nắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 188160,
            "endTime": 188420,
            "data": "Người"
          },
          {
            "startTime": 188420,
            "endTime": 188420,
            "data": "biết"
          },
          {
            "startTime": 188420,
            "endTime": 188690,
            "data": "khiêm"
          },
          {
            "startTime": 188690,
            "endTime": 188690,
            "data": "tốn"
          },
          {
            "startTime": 188690,
            "endTime": 188960,
            "data": "là"
          },
          {
            "startTime": 188960,
            "endTime": 189220,
            "data": "người"
          },
          {
            "startTime": 189220,
            "endTime": 189220,
            "data": "hay"
          },
          {
            "startTime": 189220,
            "endTime": 191880,
            "data": "thắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 191880,
            "endTime": 192150,
            "data": "À"
          },
          {
            "startTime": 192150,
            "endTime": 192950,
            "data": "lôi"
          },
          {
            "startTime": 192950,
            "endTime": 193210,
            "data": "à"
          },
          {
            "startTime": 193210,
            "endTime": 193740,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 193740,
            "endTime": 194010,
            "data": "Người"
          },
          {
            "startTime": 194010,
            "endTime": 194270,
            "data": "miền"
          },
          {
            "startTime": 194270,
            "endTime": 194270,
            "data": "núi"
          },
          {
            "startTime": 194270,
            "endTime": 194530,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 194530,
            "endTime": 194530,
            "data": "Nói"
          },
          {
            "startTime": 194530,
            "endTime": 194810,
            "data": "à"
          },
          {
            "startTime": 194810,
            "endTime": 195600,
            "data": "lôi"
          },
          {
            "startTime": 195600,
            "endTime": 195860,
            "data": "à"
          },
          {
            "startTime": 195860,
            "endTime": 196400,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 196400,
            "endTime": 196660,
            "data": "Hiền"
          },
          {
            "startTime": 196660,
            "endTime": 196660,
            "data": "lành"
          },
          {
            "startTime": 196660,
            "endTime": 196930,
            "data": "nhưng"
          },
          {
            "startTime": 196930,
            "endTime": 197200,
            "data": "chiến"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 197200,
            "endTime": 197200,
            "data": "Như"
          },
          {
            "startTime": 197200,
            "endTime": 197460,
            "data": "gà"
          },
          {
            "startTime": 197460,
            "endTime": 198260,
            "data": "chọi"
          },
          {
            "startTime": 198260,
            "endTime": 198520,
            "data": "gà"
          },
          {
            "startTime": 198520,
            "endTime": 198890,
            "data": "chọi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 198890,
            "endTime": 199020,
            "data": "Ở"
          },
          {
            "startTime": 199020,
            "endTime": 199160,
            "data": "đây"
          },
          {
            "startTime": 199160,
            "endTime": 199290,
            "data": "hay"
          },
          {
            "startTime": 199290,
            "endTime": 199420,
            "data": "nói"
          },
          {
            "startTime": 199420,
            "endTime": 199690,
            "data": "là"
          },
          {
            "startTime": 199690,
            "endTime": 199950,
            "data": "à"
          },
          {
            "startTime": 199950,
            "endTime": 200220,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 200220,
            "endTime": 200350,
            "data": "Mọi"
          },
          {
            "startTime": 200350,
            "endTime": 200490,
            "data": "người"
          },
          {
            "startTime": 200490,
            "endTime": 200630,
            "data": "thường"
          },
          {
            "startTime": 200630,
            "endTime": 200760,
            "data": "nói"
          },
          {
            "startTime": 200760,
            "endTime": 201020,
            "data": "là"
          },
          {
            "startTime": 201020,
            "endTime": 201290,
            "data": "à"
          },
          {
            "startTime": 201290,
            "endTime": 202550,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 202550,
            "endTime": 202810,
            "data": "À"
          },
          {
            "startTime": 202810,
            "endTime": 203610,
            "data": "lôi"
          },
          {
            "startTime": 203610,
            "endTime": 203870,
            "data": "à"
          },
          {
            "startTime": 203870,
            "endTime": 204400,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 204400,
            "endTime": 204670,
            "data": "Người"
          },
          {
            "startTime": 204670,
            "endTime": 204670,
            "data": "miền"
          },
          {
            "startTime": 204670,
            "endTime": 204950,
            "data": "núi"
          },
          {
            "startTime": 204950,
            "endTime": 205200,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 205200,
            "endTime": 205200,
            "data": "Nói"
          },
          {
            "startTime": 205200,
            "endTime": 205460,
            "data": "à"
          },
          {
            "startTime": 205460,
            "endTime": 206260,
            "data": "lôi"
          },
          {
            "startTime": 206260,
            "endTime": 206530,
            "data": "à"
          },
          {
            "startTime": 206530,
            "endTime": 207060,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 207060,
            "endTime": 207330,
            "data": "Hiền"
          },
          {
            "startTime": 207330,
            "endTime": 207330,
            "data": "lành"
          },
          {
            "startTime": 207330,
            "endTime": 207600,
            "data": "nhưng"
          },
          {
            "startTime": 207600,
            "endTime": 207860,
            "data": "chiến"
          },
          {
            "startTime": 207860,
            "endTime": 207860,
            "data": "như"
          },
          {
            "startTime": 207860,
            "endTime": 208120,
            "data": "gà"
          },
          {
            "startTime": 208120,
            "endTime": 209390,
            "data": "chọi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 209390,
            "endTime": 209650,
            "data": "Ở"
          },
          {
            "startTime": 209650,
            "endTime": 209910,
            "data": "đây"
          },
          {
            "startTime": 209910,
            "endTime": 209910,
            "data": "hay"
          },
          {
            "startTime": 209910,
            "endTime": 210190,
            "data": "nói"
          },
          {
            "startTime": 210190,
            "endTime": 210450,
            "data": "là"
          },
          {
            "startTime": 210450,
            "endTime": 210710,
            "data": "à"
          },
          {
            "startTime": 210710,
            "endTime": 210710,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 210660,
            "endTime": 210940,
            "data": "Mọi"
          },
          {
            "startTime": 210940,
            "endTime": 211210,
            "data": "người"
          },
          {
            "startTime": 211210,
            "endTime": 211210,
            "data": "thường"
          },
          {
            "startTime": 211210,
            "endTime": 211470,
            "data": "nói"
          },
          {
            "startTime": 211470,
            "endTime": 211740,
            "data": "là"
          },
          {
            "startTime": 211740,
            "endTime": 212010,
            "data": "à"
          },
          {
            "startTime": 212010,
            "endTime": 212760,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 212760,
            "endTime": 213030,
            "data": "À"
          },
          {
            "startTime": 213030,
            "endTime": 214030,
            "data": "lôi"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/e/3/0/0/e300bf5704fd6e7c18c46ca27d95488f.lrc",
    "enabledVideoBG": true,
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1694820176402
} `;
lyrics = JSON.parse(lyrics);
// console.log(lyrics);
// console.log(lyrics.data);
// console.log(lyrics.data.sentences.length);
// console.log(lyrics.data.sentences);

// console.log(lyrics.data.sentences[0]);
// console.log(lyrics.data.sentences[0].words);
// console.log(lyrics.data.sentences[0].words[0]);
// console.log(lyrics.data.sentences[0].words[0].startTime);
var array = [];
var timeStart = [];
for (let index = 0; index < lyrics.data.sentences.length; index++) {
  const element = lyrics.data.sentences[index];
  var temp = "";
  for (let i = 0; i < element.words.length; i++) {
    temp += element.words[i].data + " ";
  }
  timeStart.push(lyrics.data.sentences[index].words[0].startTime / 1000);

  array.push(temp);
}

var karaoke = document.querySelector(".karaoke");
var btnSing = document.querySelector(".sing");
audio.addEventListener("timeupdate", () => {
  for (let index = 0; index < timeStart.length; index++) {
    if (
      audio.currentTime >= timeStart[index] &&
      audio.currentTime <= timeStart[index + 1]
    ) {
      karaoke.innerText = `${array[index]} \n\n${array[index + 1]}`;
    }
    if (
      timeStart[0] >= audio.currentTime ||
      timeStart[timeStart.length - 1] <= audio.currentTime
    )
      karaoke.innerText = `À Lôi (Prod. by HaiMa x MinBoo) (Single)`;
  }
});

btnSing.addEventListener("click", function () {
  karaoke.style.translate = "0 -20%";
});
karaoke.addEventListener("click", function () {
  this.style.translate = "0 100%";
});
