var query = {
  name: "van duc",
  email: "vanduc@gmail.com",
  age: 21,
};
var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);
