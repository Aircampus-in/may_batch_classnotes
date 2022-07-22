// recursion

// factorial
// let num = 5;

// let factorial = 1;

// for (let i = 5; i > 0; i--) {
//   factorial *= i;
// }

// console.log(factorial);

// recursion

// function getFactorial(num) {
//   if (num < 0) {
//     return -1;
//   }
//   if (num === 1 || num === 0) {
//     return 1;
//   }

//   return num * getFactorial(num - 1);
// }

// console.log(getFactorial(-109301));

// sum of array

// let nums = [1, 2, 3, 4, 5];

// function findSum(arr) {
//   if (arr.length === 0) return -1;
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   let firstElement = arr.shift();

//   return firstElement + findSum(arr);
// }

// console.log(findSum([]));

// find sum of range 5-10

// function getSumOfRange(first, last) {
//   if (first === last) {
//     return last;
//   }

//   return first + getSumOfRange(first + 1, last);
// }

// console.log(getSumOfRange(5, 8));
