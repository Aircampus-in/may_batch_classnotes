// hotel scenario

// entering into the hotel,
// order items,
// preparation of food in kitchen,
// server delivering food to the table,
// start eating food,
// paying the bill,
// leaving the hotel

// promises

// function preparationOfFood() {
//   return new Promise((resolve, reject) => {
//     let vegetablesPresent = false;
//     if (vegetablesPresent) {
//       setTimeout(() => {
//         console.log("preparing paav bajji");
//         console.log("server deliver the food to the table");
//         resolve("food prepared successfully and delivered");
//       }, 3000);
//     } else {
//       reject("No vegetables");
//     }
//   });
// }

// function eatingFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("eating paav bajji");
//       resolve("successfully ate food");
//     }, 2000);
//   });
// }

// function payment() {
//   return new Promise((resolve, reject) => {
//     let pursePresent = true;
//     if (pursePresent) {
//       console.log("paying the bill");
//       console.log("leaving the hotel");
//       resolve("process over");
//     } else {
//       reject("run from the hotel or washing the plates");
//     }
//   });
// }

// // main code async await -> syntactic sugar of promises
// async function dinnerScenario() {
//   console.log("Entering into the hotel");
//   console.log("calling the server and order paav bajji");
//   console.log("server informing the chef to prepare food");

//   try {
//     await preparationOfFood();
//     console.log("food prepared successfully and delivered");
//     await eatingFood();
//     console.log("successfully ate the food");
//     await payment();
//   } catch (err) {
//     console.log(err);
//   }
// }

// dinnerScenario();

// currying

// function validate(username, password) {
//   originalUserName = "vasanth"; // username from db -> 1sec
//   originalPassword = "123"; // password from db -> 1sec

//   if (username === originalUserName && password === originalPassword)
//     return true;
//   return false;
// }

// function validateUserName(username) {
//   originalUserName = "vasanth"; // username from db -> 1sec
//   if (username === originalUserName) {
//     return function validatePassword(password) {
//       originalPassword = "123"; // password from db -> 1sec
//       if (password === originalPassword) {
//         return true;
//       }
//       return false;
//     };
//   }
//   return false;
// }

// // console.log(validate("anjali", "123"));

// fetch
// https vs http
// methods in https
// status code

// methods
/**
 * GET, POST, PUT, PATCH, DELETE
 */

// GET -> get some data from the server
// POST -> storing some data in the server
// PUT -> replace the entire data
// PATCH -> replace a particular data
// DELETE -> delete

// let person = {
//   name: "amit",
//   age: 23,
//   place: "up",
// };

// let stringifiedPerson = JSON.stringify(person); // sender end -> obj to string
// let extractedPerson = JSON.parse(stringifiedPerson); // receiver end -> string to object

// console.log(person.age, extractedPerson.age);

// Blob
