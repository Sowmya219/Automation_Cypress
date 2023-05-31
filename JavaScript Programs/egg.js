const a = [1, 2, 3],
  b = [6, 8, 9];
console.log(a.concat(b));
const obj = { first: 20, second: 30, first: 50 };
console.log(obj);
a.push([6]);
a.concat([7]);
console.log(a);
var t = "hello";
var s = 0;
for (var i = 0; i < t.length; i++) {
  s += t[i];
}
console.log(s);
console.log(-1 + "2" - 1);
const p = ["apple", "nokia"];
p[5] = ["samsung"];
console.log(p);
for (let i = 0; i != 0; ) {
  i = 50;
}
console.log(i);

var s = "madamed",
  rev = "";
for (let i = s.length - 1; i >= 0; i--) {
  rev += s.charAt(i);
}
console.log(rev);
if (s === rev) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}

// const fn = "hu";
// console.log(o[2]);
// let fn = firstn * "" * lastn;
// console.log(fn);

var s = "P";
switch (s) {
  case "A":
    console.log("A value");
    break;
  case "B":
    console.log("B value");
    break;
  case "C":
    console.log("C value");
    break;
  default:
    console.log("Default value");
    break;
}

var t = "Welcome to this Javascript Guide!";
//o/p: emocleW ot siht tpircsavaJ !ediuG
var s = t.split(" ");
var k = "",
  q = "";
console.log(s);
for (let i = 0; i < s.length; i++) {
  k = "";
  for (let j = s[i].length - 1; j >= 0; j--) {
    k = k + s[i].charAt(j);
  }
  q = q + k + " ";
}
console.log(q);

let n1 = 0,
  n2 = 1,
  n = 6,
  l = 0;
for (let i = 0; i < n; i++) {
  l = n1 + n2;
  // console.log(n2);
  n1 = n2;
  n2 = l;
}
console.log(n2);
function geek() {
  if (true) {
    var ab = 5;
    // console.log(ab);
  }
  console.log(ab);
}
geek();
console.log("2005" - "1997" + "09");
let fib = (num) => {
  let p = 0,
    q = 1,
    r = 0;
  for (let i = 0; i < num; i++) {
    r = p + q;
    p = q;
    q = r;
  }
  return num ? q : p;
};
console.log(fib(4));
let fibonacci = (num) => {
  return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(4));
