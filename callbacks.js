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

console.log("entering the user id", 1);

function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = { id: id, username: "vasanth" };
      resolve(user);
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let repos = {
        vasanth: ["add", "calculator", "forms"],
        shweta: ["id-generator", "facebook"],
        anish: ["react", "instagram"],
      };
      resolve(repos[username]);
    }, 3000);
  });
}

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
