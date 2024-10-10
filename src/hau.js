const products = [
  { name: "apple", price: 23000 },
  { name: "apple", price: 23000 },
  { name: "apple", price: 23000 },
];
const nam = products.map((product) => {
  product.name;
});
const prices = products.map((product) => {
  product.price;
});
console.log(nam);
console.log(prices);
console.log(products[1]);
