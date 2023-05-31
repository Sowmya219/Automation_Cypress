// var a1 = 37;
// let func = () => {
//   let func2 = () => {
//     var b = 44;
//     console.log(a1);
//   };
//   console.log(b);
//   func2();
// };
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// for (let j = 0; j < 5; j++) {
//   setTimeout(() => console.log(j), 0);
// }
(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21);
console.log(33 + "3");
console.log(33 - "3");
console.log(0.3 - 0.1);
console.log(0.3 - 0.1 === 0.2);
