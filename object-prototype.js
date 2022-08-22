// let vasanth = {
//   name: "vasanth",
//   age: 12,
// };

// let getData = function (place, char = "joyful") {
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}. I'm ${char}`
//   );
// };

// let sameer = {
//   name: "sameer",
//   age: 21,
// };

// function borrowing -> call, apply
// getData.call(sameer, "Haridwar", "notorious");
// getData.call(vasanth, "Chennai");

// getData.apply(sameer, ["haridwar", "notorious"]);

// let persons = [
//   {
//     obj: {
//       name: "sameer",
//       age: 21,
//     },
//     params: ["haridwar", "notorious"],
//   },
//   {
//     obj: {
//       name: "vasanth",
//       age: 12,
//     },
//     params: ["chennai", "cool"],
//   },
// ];

// for (let data of persons) {
//   //   console.log(data.obj, data.params);
//   getData.apply(data.obj, data.params);
// }

// let vasanth = {
//   name: "vasanth",
//   age: 12,
// };

// let getData = function (place, char = "joyful") {
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}. I'm ${char}`
//   );
// };

// let sameer = {
//   name: "sameer",
//   age: 21,
// };

// // bind
// let sameerData = getData.bind(sameer, "haridwar");
// let vasanthData = getData.bind(vasanth, "chennai", "cool");
// // sameerData();
// vasanthData();
