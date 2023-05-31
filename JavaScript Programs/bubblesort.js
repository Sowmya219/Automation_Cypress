var a = [6, 4, 0, 3, -2, 1];
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length - i - 1; j++) {
    if (a[j] > a[j + 1]) {
      var t = a[j];
      a[j] = a[j + 1];
      a[j + 1] = t;
      //   console.log(a[i]);
    }
  }
}
console.log(a);
// for (i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}

// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Now pass this array to the bblSort() function
bblSort(arr);

// let bubbleSort = (inputArr) => {
//   let len = inputArr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (inputArr[j] > inputArr[j + 1]) {
//         let tmp = inputArr[j];
//         inputArr[j] = inputArr[j + 1];
//         inputArr[j + 1] = tmp;
//       }
//     }
//   }
//   return inputArr;
// };
// let user = {
//   name: "Jesse",
//   contact: {
//     email: "codestackr@gmail.com",
//   },
// };
// console.log(user);
// console.log({ user });
// console.log("hello");
