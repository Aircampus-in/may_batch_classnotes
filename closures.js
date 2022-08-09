// callback function
// higher order function

// scopes

// function demo() {
//   var name = "vasanth";
//   console.log(name);
// }

// demo();
// console.log(name);

// var count = 1;
// function counter() {
//   let age = 10;
//   function check() {
//     console.log("inside check", age, count);
//   }
//   check();
//   count++;
//   console.log(count);
// }

// counter();
// counter();
// counter();
// console.log(age);
// console.log(count);

// function createCounter() {
//   let count = 1;
//   let age = 10;

//   return function counterIncrement() {
//     count++;
//     return count;
//   };
// }

// let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function GEC() {
//   let count = 1;
//   return function counter () {
//     if (count % 3 === 0) {
//       console.log("printing", count);
//     }
//     console.log(count);
//     count += 1;
//   };
// }

// let count = GEC();

// count();
// count();
// count();

// let count = 1;

// function counter() {
//   if (count % 3 === 0) {
//     console.log("counting");
//   }
//   count += 1;
// }

// counter();
// counter();
// count = 1;
// counter();
// counter();
// counter();

// function getCredentials() {
//   let username = "vasanth";
//   let password = "1234";
//   let count = 1;

//   return function () {
//     let credentials = {
//       username: username,
//       password: password,
//     };
//     if (count % 3 == 0) {
//       count += 1;
//       return credentials;
//     }
//     count += 1;
//   };
// }

// let vasanthCredentials = getCredentials();
// console.log(vasanthCredentials());
// console.log(vasanthCredentials());
// console.log(vasanthCredentials());
// console.log(vasanthCredentials());
// console.log(vasanthCredentials());
// console.log(vasanthCredentials());
// let count = 1;
// function getCredentials() {
//   let username = "vasanth";
//   let password = "1234";
//   if (count % 3 === 0) {
//     return {
//       username: username,
//       password: password,
//     };
//   }
//   console.log(count);
//   count += 1;
// }

// console.log(getCredentials());
// console.log(getCredentials());
// console.log(getCredentials());
// // username = "ajay";
// // console.log(getCredentials());

for (let i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

// console.log("i", i);

// memory leak -> heap memory filled out

let num = 10;
console.log(num);
