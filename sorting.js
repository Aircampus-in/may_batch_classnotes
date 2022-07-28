// selection sort

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//       }
//     }
//     let minIndex = arr.indexOf(min);

//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([6, 7, 1, 3, 4, 2, 5]));

// bubble sort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       console.log(arr);
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort([6, 7, 1, 3, 4, 2, 5]));
