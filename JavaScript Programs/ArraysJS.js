// const f = ["abc", "def", "jik", 1, 7, 8, true, false];
// const g = ["a", "d", "j"];
// const h = [];
// console.log(h.unshift());
// console.log(h);
// console.log(f.join(g));
// console.log(f.concat(g));
// console.log(f.toString());
// f.forEach((t) => {
//   console.log(t);
// });
// console.log(f.sort());
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop("Kiwi"));
// console.log(delete fruits[2]);
// console.log(fruits);
// console.log(fruits.slice(-3, -1));
// var a = "abcdef";
// console.log(a.slice(-4));
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//   return a - b;
// });
// console.log(points.sort());
// console.log(points.reverse());
// let sum = 0;
// const a = [1, 2, 3];
// a.forEach(getSum);
// console.log(sum);
// function getSum(ele) {
//   sum += ele;
// }
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}
