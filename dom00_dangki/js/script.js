var btn = document.querySelector(".btn");
var isDown = false;

var offsetX;
var offsetY;
btn.addEventListener("mousedown", function (e) {
  isDown = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
document.addEventListener("mousemove", function (e) {
  if (isDown) {
    var clientX = e.clientX - offsetX - 10;
    var clientY = e.clientY - offsetY - 10;
    var css = {
      position: "relative",
      top: clientY + "px",
      left: clientX + "px",
    };
    Object.assign(btn.style, css);
  }
});
document.addEventListener("mouseup", function () {
  isDown = false;
});
