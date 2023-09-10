var Product = function (name, quantity, price) {
  this.id = Math.floor((Math.random() + 100) * 1000);
  this.name = name;
  this.quantity = quantity;
  this.price = price;
};
var count = 0;
var Order = function (product_id, product_quantity) {
  //   this.id = Math.floor((Math.random() + 100) * 1000);
  this.id = ++count;
  this.status = "Chua hoan thanh";
  this.product_id = product_id;
  this.product_quantity = product_quantity;
};
const product = new Product("Con mèo", 200, 100000);
const product2 = new Product("con cho", 10, 200);
const product3 = new Product("con ga", 25, 250);
var products = [];
var orders = [];
var addProduct = function (obj) {
  //   products.push(new Product(obj.name, obj.quantity, obj.price));//truyen tach ra thanh obj
  products.push(obj); //truyen nhu 1 doi tuong
  return obj;
};

addProduct(product);
addProduct(product2);
addProduct(product3);

var createOrder = function (id_product, product_quantity) {
  var order = new Order(id_product, product_quantity);
  orders.push(order);

  return order;
};
createOrder(product.id, 10);
createOrder(product2.id, 100);
createOrder(product3.id, 20);

// console.log(orders);
console.log(products);
console.log(orders);
var updateOrder = function (id_order, update_product_quantity) {
  var temp;
  for (const key in orders) {
    if (orders[key].id === id_order) {
      orders[key].quantity = update_product_quantity;
      temp = orders[key];
      break;
    }
  }
  if (!temp) return "ERROR";
  return temp;
};

console.log(updateOrder(2, 999));
// var Animal = function (name) {
//   this.id = ++count;
//   this.name = name;
// };

// var dog = new Animal("cho");
// var cat = new Animal("meo");
// console.log(dog);
// console.log(cat);
var getOrder = function (id_don_hang) {};
// const order = getOrder(id_don_hang);
