let a = [1, 2, 3, 2, 3, 4, 5, 1];
let b = [],
  c = [],
  sum = 0,
  dy;
// ****progm to find duplicates and unique num in arr****
const d = a.filter((ele, index, arr) => arr.indexOf(ele) === index);
console.log(d);
a.forEach((d) => {
  if (!b.includes(d)) {
    b.push(d);
  } else {
    c.push(d);
  }
});

console.log(b);
console.log(c);
//****progm to know given num is a integer****
let r = 9;
console.log(isNaN(r));
//****progm to find arr in sorted order****
const sortedorder = a.sort((a, b) => {
  return b - a;
});
console.log(sortedorder);
sortedorder.forEach((f) => {
  if (!b.includes(f)) {
    b.push(f);
  }
});
console.log(b);
//****progm to find max and min value in arr****
let max = a[0];
a.forEach((m) => {
  if (m > max) {
    max = m;
  }
});
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }
console.log(max);
//****progm to find avg of all num in arr****
// a.forEach((avg) => {
//   sum = sum + avg;
// });
// console.log(sum);
//****progm to convert first letter to uppercase in arr****
// let days = ["sunday", "monday", "tuesday", "wednesday"];
// days.forEach((day) => {
//   dy = day.charAt(0).toUpperCase() + day.slice(1);
//   console.log(dy);
// });
// console.log(dy);
//****progm to make a sentence using values of  arr****
// dy = days.join(" ");
// console.log(dy);
//****progm to find two given strings are anagrams or not****
let s1 = "Mary";
let s2 = "Army";
s1 = s1.toLowerCase();
s2 = s2.toLowerCase();
s1 = s1.split("").sort().join("");
s2 = s2.split("").sort().join("");
if (s1 === s2) {
  console.log("Anagram");
} else {
  console.log("not Anagram");
}
