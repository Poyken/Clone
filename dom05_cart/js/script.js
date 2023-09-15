var products = [
  {
    id: 1,
    name: "san pham 1",
    price: 1000,
  },
  {
    id: 2,
    name: "san pham 2",
    price: 2000,
  },
  {
    id: 3,
    name: "san pham 3",
    price: 3000,
  },
  {
    id: 4,
    name: "san pham 4",
    price: 4000,
  },
];
var tableProducts = document.querySelector(".product tbody");
products.forEach(function (product, index) {
  var tr = document.createElement("tr");
  var tdNode = document.createElement("td");
  tdNode.innerText = index + 1;
  tr.appendChild(tdNode);
  var tdName = document.createElement("td");
  tdName.innerText = product.name;
  tr.append(tdName);
  var tdPrice = document.createElement("td");
  tdName.innerText = product.price.toLocaleString();
  tr.appendChild(tdPrice);
  var tdAction = document.createElement("td");
  var quantityInput = document.createElement("input");
  quantityInput.value = 1;
  quantityInput.style = `width: 90%; display: block; margin: 0 auto;`;
  tdAction.append(quantityInput);

  var button = document.createElement("button");
  button.innerText = `Them vao gio`;
  button.style = `width: 100%;`;
  tdAction.append(button);
  tr.append(tdAction);
  //   console.log(tr);
  tableProducts.append(tr);
});
