// var content =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
// //them the span vao moi tu trong content
// content = content.replaceAll(" ", "</span> <span>");
// //them the span vao dau vao cuoi content cho day du
// content = `<span>${content}</span>`;
// console.log(content);
// //y tuong la check true charAt=">" va charAtNext=" " thi them class hightlight vao content
// //su dung setinterval setinterval
// // setInterval(function () {});
// //=>setinterval co ban
// var index = 0;
// //khai bao 1 bien o ngoai inverval de chay het content
// setInterval(() => {
//   var char = content.charAt(index);
//   var charNext = content.charAt(index + 1);
//   if (char === ">" && charNext !== " ") {
//     var html =
//       content.slice(0, index) + ` class="highlight" ` + content.slice(index);
//     document.body.innerHTML = html;
//     // console.log(html);
//   }
//   index++;
//   if (index >= content.length) {
//     index = 0;
//   }
// }, 10);
// document.write(content);
var content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
// them span vao cac tu trong content=><span>Lorem</span> <span>Ipsum</span>...
content = content.replaceAll(" ", "</span> <span>"); //them vao giua cac tu
content = `<span>${content}</span>`; //them vao dau va cuoi
console.log(content);
var index = 0;
setInterval(() => {
  //   console.log(index);
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);
  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    document.body.innerHTML = html;
    // console.log(html);
  }
  index++;
  if (index >= content.length) {
    index = 0;
  }
}, 10);
document.write(content);
