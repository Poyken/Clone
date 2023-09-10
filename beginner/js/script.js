// ex01
// var check100 = function (a, b) {
//   return a === 100 || b === 100 || a + b === 100;
// };
// document.write(check100(123, 99));

// ex02
// get the extension of a filename
// var getExtension = function (filename) {
//   return filename.slice(filename.lastIndexOf("."));
// };
// document.write(getExtension("index.html"));
// document.write(getExtension("webpack.config.js"));

//ex03
//chuyen ki tu thanh ky tu tiep theo
// var moveCharCode = function (str) {
//   return str
//     .split("")
//     .map(function (char) {
//       return String.fromCharCode(char.charCodeAt(0) + 1);
//     })
//     .join("");
// };
// document.write(moveCharCode("z"));

// ex04
// get the current date
// mm-dd-yyyy,mm/dd/yyyy or dd/mm/yyyy, dd-mm-yyyy

// var formatDate = function () {
//   var date = new Date();
//   var days = date.getDate();
//   var months = date.getMonth() + 1;
//   var years = date.getFullYear();
//   return `${days}/${months}/${years}`;
// };
// document.write(formatDate());

//ex05 create a new string add "!New" if the given string begin with "!New" already return original string

// var addNew = function (str) {
//   if (!str.includes("!New")) return `New! ${str}`;
//   return `${str}`;
// };
// document.write(addNew("abcd"));

//ex06 lay 3 ki tu dau va 3 ki tu cuoi cua chuoi nhap vao,neu length<3 tra ve str cu

// var makeNewString = function (str) {
//   return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
// };
// document.write(makeNewString("abcd"));

//ex07 lay nua dau chuoi co do dai chan nguoc lai lay nua dau +1

// var firstHalf = function (str) {
//   return str.length % 2 === 0
//     ? str.slice(0, str.length / 2)
//     : str.slice(0, str.length / 2 + 1);
// };
// document.write(firstHalf("abc"));

//dem so chan
// var countEventNumbers = function (arr) {
//   return arr.filter(function (num) {
//     return num % 2 === 0;
//   }).length;
// };
// document.write(countEventNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

/**
 * abc,def,ghi
 * jkl,mno,pqr
 * stu,vwx,yz
 * chuyen thanh mang moi mang la 1 dong
 */
var str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yz`;
var convertCSV = function (str) {
  return str.split("\n").map(function (row) {
    return row.split(",");
  });
};
console.log(convertCSV(str));
