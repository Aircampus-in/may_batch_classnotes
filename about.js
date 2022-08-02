// const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const btn = document.querySelector(".btn");

// function printGrandParent(event) {
//   console.log("grand parent bubbling", event.target);
// }

// function printOnHover() {
//   console.log("hovering");
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeGrandParent() {
//   setTimeout(() => {
//     console.log("removing grandparent");
//     grandParent.removeEventListener("click", printGrandParent);
//   }, 2000);
// }

// btn.addEventListener("click", removeGrandParent);

// parent.addEventListener("click", (event) => {
//   console.log("parent bubbling");
// });

// child.addEventListener("click", (event) => {
//   console.log("child bubbling");
// });

// const newDiv = document.createElement("div");
// newDiv.style.width = "10rem";
// newDiv.style.height = "10rem";
// newDiv.style.backgroundColor = "red";
// const para = document.createElement("p");
// para.innerText = "vasanthkumar ";
// newDiv.append(para);
// document.body.append(newDiv);

// child.append(para);

function test() {
  this.style.backgroundColor = "red";
  // console.log(document.querySelector(".btn"));
}

// // test();
// // grandParent.addEventListener("click", test);
// btn.addEventListener("click", test);
// child.addEventListener("click", test);

// console.log(eval(10 * 5 + 5 / 2));

// console.log(8 + 2);

// console.log("hello".indexOf("i", 3));

// String.prototype.vasanthIndex = function (target, starting = 0) {
//   console.log(this);
//   for (let index = starting; index < this.length; index++) {
//     if (this[index] === target) {
//       return index;
//     }
//   }
//   return -1;
// };

// console.log("hello".vasanthIndex("i"));

Array.prototype.vasanthIncludes = function () {
  console.log(this);
};

[1, 2, 4, 5].vasanthIncludes();
["dabda", "dada"].vasanthIncludes();
