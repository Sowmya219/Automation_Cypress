// let s = "Today is a Monday";
// let a = s.split(" ");
// // let c = new Array(a.length);
// let c = [];
// console.log(a);
// for (let k = 0; k < a.length; k++) {
//   c[k] = a[k].length;
// }
// console.log(c);
// console.log(c.sort());
// let t = c.sort();
// let r = t[c.length - 1];
// console.log(r);
// //   console.log(c.push(a[k].length));

// // var d = [5, 9, 1, 3, 8];
// for (let i = 0; i < c.length; i++) {
//   //   console.log(d[i]);

//   for (let j = i + 1; j < c.length; j++) {
//     if (c[i] > c[j]) {
//       var temp = c[i];
//       c[i] = c[j];
//       c[j] = temp;
//     }
//   }
// }
// // for (let i = 0; i < c.length; i++) {
// //   console.log(c[i]);
// // }
// let min = c[0];
// let max = c[0];
// for (let i = 0; i < c.length; i++) {
//   if (c[i] > max) max = c[i];
// }
// for (let i = 0; i < c.length; i++) {
//   if (c[i] < min) min = c[i];
// }
// console.log(max);
// console.log(min);
// console.log("===============");
// let sw = 1,
//   sww = 2;
// [sw, sww] = [sww, sw];
// console.log(sw);
// console.log(sww);
// console.log("===============");
// const d1 = new Date();
// console.log(d1);
// console.log(1 + "20" - "20");
// console.log("1" - "ko" + "lp");
// console.log("===============");
// const string = "      Hello World       ";
// console.log(string.trim());
// console.log("===============");
// function greet() {
//   return "hello";
// }
// function name(user, func) {
//   const msg = func();
//   console.log(`{message} ${user}`);
// }
// name("manju", greet);
// name("kop", greet);
// console.log("===============");
// const arr = [1, 2, 3, 2, 3];
// const ar = [];
// //   ar1 = [];
// // for (let i = 0; i < arr.length; i++) {
// //   // let j = 0;
// //   for (let j = i + 1; j < arr.length; j++) {
// //     // for (let k = i; k < arr.length; k++) {
// //     if (arr[i] !== arr[j]) {
// //       break;
// //       // ar.push(arr[i]);
// //     }

// //     ar.push(arr[j]);
// //   } // }
// // }
// // console.log(ar);
// // console.log(ar1);
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr.indexOf(i) === -1) {
// //     arr.push[i];
// //   }
// // }
// // console.log(arr);

// arr.forEach((a1) => {
//   if (!ar.includes(a1)) {
//     ar.push(a1);
//   }
// });
// console.log(ar);
// console.log("==============");
// let str = "madam",
//   str1 = "";
// var b = false;
// for (let i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     b = true;
//   }
//   // str1 = str1 + str[i];
//   if (b == true) {
//     console.log("a palindrome");
//   }
// }
// // console.log("palindrome");
// // console.log(str1);
// const str4 = string.split("").reverse().join("");
// console.log(str4);
// console.log("============================");
// const words = ["hi", "bye", "up", "see"];
// const w1 = [];
// console.log(words.sort());

// var f = 1,
//   g = "1";
// console.log(f === g);
// console.log("==============");
// // var k = 6,
// //   cnt = 0;
// // for (let i = 1; i <= 5; i++) {
// //   if (k % i == 0) {
// //     cnt++;
// //   }
// // }
// // if (cnt == 2) {
// //   console.log("prime num");
// // } else {
// //   console.log("not prime num");
// // }
// console.log("==============***");
// var cnt = 0;
// for (let i = 1; i <= 10; i++) {
//   cnt = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       cnt++;
//       break;
//     }
//   }

//   if (i > 1 && cnt == 0) {
//     console.log(i);
//   }
// }
// console.log("==============");
// var v = 0,
//   u = 1;
// for (let i = v; i <= 10; i++) {
//   console.log(v);
//   c = v + u;
//   v = u;
//   u = c;
// }
// console.log("==============");
// var n = 5,
//   mu = 1;
// for (let i = 1; i <= 5; i++) {
//   mu = mu * i;
// }
// console.log(mu);

// var g = "sowmya";
// console.log(g.slice(1));
// console.log(g[0].toUpperCase() + g.slice(1));
// console.log("==============");
// x = "hello";
// console.log(x);
// var x;
// var bn = {
//   name: "sowmya",
//   age: "23",
//   marks: "pass",
// };
// console.log(bn.age);
// console.log(bn["marks"]);
// console.log("*************");
// console.log("*************");

// function bblSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     // Last i elements are already in place
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if (arr[j] > arr[j + 1]) {
//         // If the condition is true then swap them
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   // Print the sorted array
//   console.log(arr);
// }

// console.log("------------------------------");
// function name() {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// }
// name();
console.log("------------------------------");
var a1 = true + true + true * 3;
console.log(a1);
let p = "3";
+p--;
console.log(typeof p);
console.log(p);
var x = "123";
console.log(typeof x.valueOf());
