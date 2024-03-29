// function declaration -> using function keyword

// log();

// function log() {
//   console.log("declaration logging");
// }

// named function expression (not useful)
// let printing = function vasanth() {
//   console.log("expression logging");
// };

// printing();

// anonymous function expression
// let printing = function () {
//   console.log("expression logging");
// };

// printing();

// arguments in function
// function add(num1, num2) {
//   // extra values are ignored
//   return num1 + num2;
// }

// console.log(add(5, 10, 15, 20));

// function add(num1, num2, num3, num4) {
//   // num3, num4 are undefined
//   return num1 + num2;
// }

// console.log(add(5, 10));

// rest operator

// function shopingCart(discount, coupon, ...prices) {
//   //   console.log(discount, prices, coupon);
//   let total = 0;
//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//   }
//   total = total - (total * discount) / 100 - coupon;
//   return total;
// }

// console.log(shopingCart(5, 60, 150, 300, 100));

// default values
// function areaOfRectangle(length = 1, width = 1) {
//   return length * width;
// }

// console.log(areaOfRectangle(4, 19));

// let vasanth = {
//   title: "dadada",
//   flat: function () {
//     console.log(this);
//   },
// };

// vasanth.flat();

// Array destructuring
// let nums = [1, 2, 3, 4, 5];

// let [num1, num2, ...rest] = nums;
// console.log(num1, num2, rest);

// let nums = [1, 2];

// let [num1, num2, num3] = nums;
// console.log(num1, num2, num3);

// object destructuring
// let obj = {
//   fname: "satya subham",
//   Class: "Engineering",
//   profession: "developer",
// };

// let { fname, Class } = obj;

// console.log(fname, Class);
