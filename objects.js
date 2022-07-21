// objects

// factory method
// function createCircle(radius = 1) {
//   return {
//     radius: radius,
//     draw: function () {
//       return "drawing circle";
//     },
//   };
// }

// let circle1 = createCircle(10);
// circle1.fname = "vasanth";
// console.log(circle1.radius, circle1.draw(), circle1);

// constructor method
// function Circle(radius) {
//   console.log("before setting values", this);
//   let name = "vasanth";
//   this.radius = radius;
//   this.draw = function () {
//     return "drawing circle";
//   };
//   return this;
// }

// let circle = new Circle(1);
// console.log(circle);

// let circle1 = new Circle(120);
// console.log(circle1, circle1.draw());

// let arr = [1, 2, 3];
// console.log(typeof arr);

// function add(num1, num2) {
//   console.log(num1);
//   console.log(num1);
// }

// new Function();

// let car = {
//   company: "BMW",
//   model: "Q3",
//   year: 2022,
//   type: "SUV",
// };

// let person = {
//   name: "vasanth",
//   job: "don",
// };

// let keys = [];
// let values = [];
// for (let key in car) {
//   keys.push(key);
//   values.push(car[key]);
// }

// let carKeys = Object.keys(car);
// let personKeys = Object.keys(person);
// console.log(carKeys, personKeys);

// let carValues = Object.values(car);
// let personValues = Object.values(person);
// console.log(carValues, personValues);

// let carProperties = Object.entries(car);
// console.log(carProperties[0][0], carProperties[0][1]);
// console.log(car["company"]);

// let nums = [1, 2, 3];

// console.log(Object.keys(nums));
// console.log(Object.values(nums));
// console.log(Object.entries(nums));

// let nums = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [[[9, 10], "vasanth"], 11],
// ];

// console.log(nums.flat(1));

// copying of object
// let nums = [1, 2, 3];
// let copy = nums;

// nums[0] = 10;

// console.log(nums, copy);

// copying use spread operator

// let person = {
//   name: "aakash",
//   age: 5,
// };

// let copy = person;

// person["name"] = "rajiv";

// console.log(person, copy);

// copy

// let person = {
//   name: "akash",
//   age: 5,
// };

// let copy = { ...person };

// copy["age"] = 20;

// console.log(person, copy);

// nested arrays

// let nums = [
//   [1, 2],
//   [3, 4],
// ];

// let copy = JSON.stringify(nums);
// let copiedNums = JSON.parse(copy);

// copiedNums[0][0] = 10;

// console.log(nums, copiedNums);

// nested object

// let person = {
//   name: "vasanth",
//   wife: "samantha",
//   son: {
//     name: "chezhian",
//     age: 10,
//   },
// };

// let copy = { ...person };

// person["son"]["name"] = "vikram";

// console.log(person, copy);

// using JSON.stringify()

// let person = {
//   name: "vasanth",
//   wife: "samantha",
//   son: {
//     name: "chezhian",
//     age: 10,
//   },
// };

// let copy = JSON.stringify(person);
// let copiedPerson = JSON.parse(copy);

// person["son"]["name"] = "vikram";

// console.log(person, copiedPerson);

//arrays in function

// primitive data types

// let num = 10;

// function change(value) {
//   console.log("before changing", num, value);
//   value = 20;
//   console.log("after chaning", num, value);
// }

// change(num);

// reference data type

// let nums = [1, 2, 3];

// function change(arr) {
//   console.log("before", nums, arr);
//   arr[0] = 10;
//   console.log("after", nums, arr);
// }

// change(nums);

// object in function

// let person = {
//   name: "krish",
//   age: 10,
// };

// function change(obj) {
//   console.log("before", person, obj);
//   obj["age"] = 20;
//   console.log("after", person, obj);
// }

// change(person);

// problems

// let obj = {
//   name: "david",
//   age: 20,
//   country: "india",
// };

// how to get the length of the object
// console.log(Object.keys(obj).length);

// let count = 0;
// for (let key in obj) {
//   count += 1;
// }
// console.log(count);

// sort by keys

// let obj = {
//   name: "david",
//   age: 20,
//   country: "india",
// };

// //  { age: 20, country: 'india', name: 'david' }
// let sortedKeys = Object.keys(obj).sort();
// console.log(sortedKeys);
// let sortedObj = {};
// for (let key of sortedKeys) {
//   sortedObj[key] = obj[key];
// }

// console.log(sortedObj);

// entries

// let sortedItems = Object.entries(obj).sort();
// console.log(sortedItems);
// let sortedObj = {};

// for (let item of sortedItems) {
//   console.log(item);
//   sortedObj[item[0]] = item[1];
// }

// console.log(sortedObj);

// sort by values

// const scores = {
//   vasanth: 10,
//   anjali: 90,
//   shwetha: 80,
//   bharath: 35,
// };

// // // { vasanth: 10, bharath: 35, shwetha: 80, anjali: 90 }
// let values = Object.entries(scores).sort((a, b) => a[1] - b[1]);
// console.log(values);
// let sortedObj = {};
// for (let i = 0; i < values.length; i++) {
//   console.log("key value pair", values[i]);
//   let key = values[i][0];
//   let value = values[i][1];
//   sortedObj[key] = value;
// }

// console.log(sortedObj);

//

// const person = {
//   firstName: "vasanth",
//   lastName: "kumar",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },

//   set fullName(newName) {
//     let parts = newName.split(" ");
//     person.firstName = parts[0];
//     person.lastName = parts[1];
//   },
// };

// person.fullName = "sachin tendulkar";

// console.log(person.fullName);

// {
//   const message = "good morning";
//   //   console.log(message);
// }

// console.log(message);

// this -> object that is executing the current function

// method -> parent obj;
// function -> global; => new keyword -> new empty object

// const video = {
//   title: "cricket",
//   play() {
//     console.log(this);
//   },
//   stop: function () {
//     console.log(this);
//   },
// };

// video.play();
// video.stop();

// function play() {
//   console.log(this);
// }

// let stop = function () {
//   console.log(this);
// };

// new play();
// new stop();

// const match = {
//   title: "cricket",
//   players: ["sachin", "dhoni", "kohli"],
//   displayplayers() {
//     this.players.forEach((player) => {
//       console.log(this.title);
//     });
//   },
// };

// match.displayplayers();

// const add = () => {
//   console.log(this);
// };

// add();
