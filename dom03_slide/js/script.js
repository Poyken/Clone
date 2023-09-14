var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");
var prevBtn = carouselNav.querySelector(".prev");
var nextBtn = carouselNav.querySelector(".next");
var carouselDots = carousel.querySelector(".carousel-dots");

var renderDots = function (indexDot = 0) {
  var dotHTML = "";
  carouselItem.forEach(function (item, _index) {
    dotHTML += `<span data-index="${_index}" ${
      +_index === +indexDot ? `class="active"` : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotHTML;
  carouselDots.addEventListener("click", function (e) {
    // console.log(e.target.nodeName);
    if (e.target.nodeName === "SPAN") {
      var indexClick = e.target.dataset.index;
      //   console.log(indexClick);
      index = indexClick;
      goSlide();
    }
  });
};

var goSlide = function () {
  //   console.log(index);
  position = 0 - index * itemWidth;
  //   console.log(position);
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
};
//lay danh sach cac item
var carouselItem = carouselInner.querySelectorAll(".item");
// console.log(carouselItem);
if (carouselItem.length) {
  //tinh chieu rong cua 1 item
  var itemWidth = carouselInner.clientWidth; //tra ve chieu rong cua 1 element
  // console.log(itemWidth);

  //tinh tong kich thuoc item
  var totalWidth = itemWidth * carouselItem.length;
  // console.log(totalWidth);

  //cap nhat css cho carousel inner
  carouselInner.style.width = `${totalWidth}px`;

  //render dots
  renderDots();

  //lang nghe su kien khi click vao next
  var position = 0;
  var index = 0;
  nextBtn.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      //tinh toan ra duoc toa do
      position -= itemWidth;
      index++;
      //cap nhat css cho carousel-inner de chuyen slide
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
    console.log(position);
  });
  prevBtn.addEventListener("click", function () {
    if (Math.abs(position) > 0) {
      //tinh toan ra duoc toa do
      position += itemWidth;
      index--;
      //cap nhat css cho carousel-inner de chuyen slide
      carouselInner.style.translate = `${position}px`;
      renderDots(index);
    }
    console.log(position);
  });
}
//vuot chuen slide
var isDrag = false;
var initialOffsetX = 0;
var moveWidth;
carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  carousel.classList.add("drag");
});
carousel.addEventListener("mouseup", function (e) {
  e.preventDefault();
  carousel.classList.remove("drag");
});
carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});
carouselInner.addEventListener("mouseup", function () {
  //   carouselInner.style.transition = "none";
  isDrag = false;
  //   console.log(moveWidth);
  if (moveWidth < 0) {
    // console.log("next");
    if (Math.abs(moveWidth) > 100 && index < carouselItem.length - 1) {
      index++;
    }
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    // renderDots(index);
    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }
    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    // renderDots(index);
    goSlide(index);
  }
});
carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    // console.log("keo");
    // console.log(e.offsetX, initialOffsetX);
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});
