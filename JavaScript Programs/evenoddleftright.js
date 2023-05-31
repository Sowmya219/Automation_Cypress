//[2,4,8,20,1,5,7,11]
let a = [1, 2, 5, 4, 7, 8, 11, 20];
let ev = [],
  od = [];
// console.log(a);
a.forEach((e) => {
  if (e % 2 == 0) {
    ev.push(e);
  } else {
    od.push(e);
  }
});
console.log(ev.concat(od));
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     ev.push(a[i]);
//   } else {
//     od.push(a[i]);
//   }
// }
// console.log(ev);
// console.log(od);
// console.log(ev.concat(od));

let s = "s^&owmya!* $",
  cnt = 0;
// for (let i = 0; i < s.length; i++) {
//   if (
//     (s[i] >= 32 && s[i] <= 47) ||
//     (s[i] >= 58 && s[i] <= 64) ||
//     (s[i] >= 91 && s[i] <= 96) ||
//     (s[i] >= 123 && s[i] <= 126)
//   ) {
//     cnt++;
//   }
// }
// console.log(cnt);
for (let i = 0; i < s.length; i++) {
  if (
    !(s[i] >= "a" && s[i] <= "z") ||
    (s[i] >= "A" && s[i] <= "Z") ||
    (s[i] >= "0" && s[i] <= "9") ||
    s[i] === "32"
  ) {
    cnt++;
  }
}
console.log(cnt);

var arry = [];
console.log(typeof arry);
var nu = null;
console.log(typeof nu);
var un = undefined;
console.log(typeof un);
console.log("-------------------");
var myNum = 32;
function myFunction() {
  var myNum = 5;
  return myNum;
  var myNum = 10;
  return myNum;
}
myFunction();
console.log(myNum);
console.log("-------------------");
function myFunction(myNumber) {
  return myNumber;
  return myNumber + 3;
  return myNumber + 4;
}
console.log(myFunction(5));
console.log("-------------------");
var myNum = 32;
function myFunction() {
  var myNum = 5;
}
myFunction();
console.log(myNum);

//diamond prog
//reserver each string in sentence
let str = ["sai", "sonu", "ram", "level"],
  rev = "";
for (let i = 0; i < str.length; i++) {
  let s1 = str[i];
  for (let j = s1.length - 1; j >= 0; j--) {
    rev = rev + s1[j];
  }
}
console.log(rev);
