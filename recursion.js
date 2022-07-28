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

// power of a number
// 2, 4 => 2 * 2* 2 * 2 = 16

// function getPower(base, exponential) {
//   if (exponential < 0) return -1;
//   if (exponential === 0) return 1;
//   let total = 1;
//   for (let i = 0; i < exponential; i++) {
//     total *= base;
//   }
//   return total;
// }

// console.log(getPower(2, -1));

// function getPower(base, exponential) {
//   if (exponential === 0) return 1;
//   return base * getPower(base, exponential - 1);
// }

// console.log(getPower(2, 4));

// [1, 2, [3, 4]] => [1, 2, 3, 4]
// array flattening

function flatten(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = [...flattenedArray, ...flatten(arr[i])];
      //   flattenedArray = flattenedArray.concat(flatten(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}

let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9], [], 10, null, "Hello"]];
console.log(flatten(arr));
