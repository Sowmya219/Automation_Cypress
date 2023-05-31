// let arr = [2, 3, 4, 5];
// let [a, b] = (arr[(b, a)] = [a, b]);
// console.log(a, b);
//o/p:error: b is not defined
console.log("===================================");
const add = (a = 1, b = 2) => a + b;
console.log(add()); //op: 3
console.log(add(5)); //op: 7
console.log(add(undefined, 10)); // 11
console.log("===================================");
// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }
//op: 3,3,3
console.log("===================================");
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
} //op: Default value
console.log("===================================");
// const fn = "hu";
// console.log(o[2]); //o is not defined
// let fn = firstn * "" * lastn;
// console.log(fn); //NAN
console.log("===================================");
console.log(0.1 + 0.2 == 0.3); //flse
console.log(0.1 + 0.2 === 0.3); //false
console.log(typeof typeof NaN);
var symbol1 = Symbol("hihello");
console.log(symbol1);
console.log(isNaN("hello"));
console.log(isNaN(123));
// console.log(isInteger(123));
console.log("===================================");
(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();
console.log("===================================");
(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21);
console.log("===================================");
function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  console.log(arr);
}
solve([44, 1, 22, 111], 5);
console.log("===================================");
var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(b);
}
console.log("===================================");
var a = Math.max();
var b = Math.min();
console.log(a);
console.log(b);
console.log("===================================");
var a = true + true + true * 3;
console.log(a);
console.log("===================================");
var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
console.log(a);
console.log(b);
console.log("===================================");
console.log(parseInt("123Hello"));
console.log(parseInt("Hello123"));
let sum = 0;
const a1 = [1, 2, 3];
a1.forEach(getSum);
console.log(sum);
function getSum(ele) {
  sum += ele;
}
console.log(NaN === NaN);
console.log("===================================");
const set = new Set();
set.add(5);
set.add("Hello");
set.add({ name: "Scaler" });
for (let item of set) {
  console.log(item + 6);
}
console.log("===================================");
function test(...args) {
  console.log(typeof args);
}
test(12);
console.log("===================================");
function dog() {
  console.log("I am a dog.");
}
dog.sound = "Bark";
console.log("===================================");
const obj1 = { Name: "Hello", Age: 16 };
const obj2 = { Name: "Hello", Age: 16 };
console.log(obj1 === obj2);
//The strict equality operator compares objects by their references so even though the contents of both objects are the same, their references don’t match resulting in false.
console.log("===================================");
const example = ({ a, b, c }) => {
  console.log(a, b, c);
};
example(0, 1, 2);
console.log("===================================");
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));
console.log("===================================");
function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
console.log("===================================");
var arr1 = "john".split(""); //['j','o','h','n']
console.log(arr1);
var arr2 = arr1.reverse(); // ['n','h','o','j']
console.log(arr2);
var arr3 = "jones".split(""); //['j','o','n','e','s']
arr2.push(arr3); //['n','h','o','j',['j','o','n','e','s']]
console.log(arr2);
console.log(arr1.slice(-2));
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
console.log("===================================");
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
console.log("===================================");
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
