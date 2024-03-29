// callback is a function which gets passed as a parameter
// asynchronous programming

// function getUser(id, callbackfn) {
//   setTimeout(() => {
//     console.log("reading data from the database....");
//     let user = { id: id, githubUserName: "vasanth" };
//     callbackfn(user);
//   }, 5000);
// }

// let printUserData = function (userData) {
//   console.log(userData);
// };

// console.log("before");
// const githubUser = getUser(1, printUserData);

// console.log("after");

// function getUser(id, displayUser) {
//   console.log("reading data from the database....");
//   setTimeout(() => {
//     let user = { id: id, githubUserName: "vasanth" };
//     console.log("got the data from the database");
//     displayUser(user);
//   }, 5000);
// }

// console.log("entering user id into the github account");
// const githubUser = getUser(1, (userData) => {
//   console.log("logged in with user data", userData);
// });

// hotel -> entering hotel, order food -> food is preparing -> delivered to the table -> eat

// function prepareFood(startEating) {
//   setTimeout(() => {
//     console.log("food is prepared");
//     console.log("deliver to the table");
//     startEating();
//   }, 10000);
// }

// function eatRotis() {
//   setTimeout(() => {
//     console.log("Eating rotis");
//     console.log("paying the bill");
//   }, 5000);
// }

// function hotelvisit() {
//   console.log("Entering into the hotel");
//   console.log("Ordered 2 rotis with butter chicken / channa");
//   console.log("food is getting prepared");
//   prepareFood(eatRotis);
// }

// hotelvisit();

// enter userId -> calling my database with userId -> got the userdata -> display the data in github page

// function readDataInDB(id, display) {
//   setTimeout(() => {
//     console.log("reading account data in the database");
//     let user = { id: id, userName: "vasanth" };
//     display(user);
//   }, 2000);
// }

// function displayDataOnScreen(userData) {
//   console.log("returning the user data", userData);
//   console.log("display the content in github page");
//   getRepositories();
// }

// function getRepositories() {
//   console.log("getting the repos");
//   let repos = ["add", "calculator", "forms"];
//   console.log(repos);
//   getCommits(repos[1]);
// }

// function getCommits(repo) {
//   let commits = {
//     add: ["initial commit", "add funtion"],
//     calculator: ["initial", "design", "add event listener", "give colors"],
//     forms: ["initial", "form UI", "add functionality"],
//   };
//   console.log("commits", commits[repo]);
// }

// function githubLogin() {
//   console.log("Entering userId as 1");
//   console.log("Clicking submit button");
//   readDataInDB(1, displayDataOnScreen);
// }

// githubLogin();

// callback hell

// console.log("entering id and clicking");
// let id = 1;
// let userdata = getUserData(id); // 5secs
// let repos = getRepositories(userdata); // 3secs
// let commits = getCommits(repos[0]);
// console.log(commits);

// asynchronous programming
// promises -> pending, success(resolve()), failed(reject())
// let momsPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("collected all golds");
//     reject("killed by adheera");
//   }, 5000);
// });

// momsPromise
//   .then((result) => console.log("climax: => ", result))
//   .catch((error) => console.log(error));

// console.log("entering the user id", 1);

// function getUserData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let user = { id: id, username: "vasanth" };
//       resolve(user);
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let repos = {
//         vasanth: ["add", "calculator", "forms"],
//         shweta: ["id-generator", "facebook"],
//         anish: ["react", "instagram"],
//       };
//       resolve(repos[username]);
//     }, 3000);
//   });
// }

// function getCommits(repo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let commits = {
//         add: ["initial commit", "add funtion"],
//         calculator: ["initial", "design", "add event listener", "give colors"],
//         forms: ["initial", "form UI", "add functionality"],
//       };

//       resolve(commits[repo]);
//     }, 2000);
//   });
// }

// getUserData(1)
//   .then((userdata) => {
//     console.log("useradata => ", userdata);
//     let repos = getRepositories(userdata.username);
//     return repos;
//   })
//   .then((repos) => {
//     console.log("repos", repos);
//     let commits = getCommits(repos[0]);
//     return commits;
//   })
//   .then((commits) => console.log("commits", commits));

// promises - part 2

// entering into the hotel,
// order items,
// preparation of food in kitchen,
// server delivering food to the table,
// start eating food,
// paying the bill,
// leaving the hotel

// function preparationOfFood(callbackOfEatingAndPaying) {
//   setTimeout(() => {
//     console.log("preparing paav bajji....");
//     console.log("Server deliver the food to the table");
//     callbackOfEatingAndPaying(payingBillAndTips); // eatingFoodAndPayingBill
//   }, 3000);
// }

// function payingBillAndTips() {
//   console.log("paying the bill");
//   console.log("leaving the hotel");
// }

// function eatingFoodAndPayingBill(callbackPayment) {
//   setTimeout(() => {
//     console.log("eating paav bajji....");
//     callbackPayment(); //payingBillAndTips
//   }, 2000);
// }

// // main code
// function dinnerScenario() {
//   console.log("Entering into the hotel");
//   console.log("calling the server and order paav bajji");
//   console.log("server informing the chef to prepare food");
//   preparationOfFood(eatingFoodAndPayingBill);
// }

// dinnerScenario();

// promises

function preparationOfFood() {
  return new Promise((resolve, reject) => {
    let vegetablesPresent = false;
    if (vegetablesPresent) {
      setTimeout(() => {
        console.log("preparing paav bajji");
        console.log("server deliver the food to the table");
        resolve("food prepared successfully and delivered");
      }, 3000);
    } else {
      reject("No vegetables");
    }
  });
}

function eatingFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("eating paav bajji");
      resolve("successfully ate food");
    }, 2000);
  });
}

function payment() {
  return new Promise((resolve, reject) => {
    let pursePresent = true;
    if (pursePresent) {
      console.log("paying the bill");
      console.log("leaving the hotel");
      resolve("process over");
    } else {
      reject("run from the hotel or washing the plates");
    }
  });
}

// main code
// function dinnerScenario() {
//   console.log("Entering into the hotel");
//   console.log("calling the server and order paav bajji");
//   console.log("server informing the chef to prepare food");
//   preparationOfFood()
//     .then(() => {
//       console.log("food prepared successfully and delivered");
//       eatingFood()
//         .then(() => {
//           console.log("successfully ate the food");
//           payment()
//             .then(() => console.log("process over"))
//             .catch((error) => console.log(error));
//         })
//         .catch((error) => console.log(error.message));
//     })
//     .catch((error) => console.log("error block ->", error));
// }

// function dinnerScenario() {
//   console.log("Entering into the hotel");
//   console.log("calling the server and order paav bajji");
//   console.log("server informing the chef to prepare food");
//   preparationOfFood()
//     .then((msg) => {
//       console.log("foodPrepared ", msg);
//       return eatingFood();
//     })
//     .then((ateMsg) => {
//       console.log("ate msg ", ateMsg);
//       return payment();
//     })
//     .then((paymentMsg) => console.log("payment msg ", paymentMsg))
//     .catch((error) => console.log("error : => ", error));
// }

// async await
async function dinnerScenario() {
  console.log("Entering into the hotel");
  console.log("calling the server and order paav bajji");
  console.log("server informing the chef to prepare food");
  try {
    let foodMsg = await preparationOfFood();
    console.log(foodMsg);
    let ateMsg = await eatingFood();
    console.log(ateMsg);
    let paymentMsg = await payment();
    console.log(paymentMsg);
  } catch (err) {
    console.log("error ", err);
  }
}

dinnerScenario();

// parallel or concurrent execution
// function fn1() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("process 1");
//       res("1");
//     }, 4000);
//   });
// }

// function fn2() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("process 2");
//       rej("2 rejected");
//     }, 4000);
//   });
// }

// // fn1()
// //   .then(() => fn2())
// //   .then(() => console.log("process over"));

// // Promise.all([fn1(), fn2()])
// //   .then((result) => console.log("process over", result))
// //   .catch((err) => console.log("error", err))
// //   .finally(() => console.log("closing connection"));

// Promise.race([fn1(), fn2()])
//   .then((result) => console.log("process over", result))
//   .catch((err) => console.log("error", err))
//   .finally(() => console.log("closing connection"));
