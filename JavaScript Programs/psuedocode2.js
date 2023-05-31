var b = 1;
function outer() {
  var b = 2; //undefined
  function inner() {
    b++; //NaN
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
  //   console.log(b); //2
}
outer();
// console.log(b); //1
console.log("============================");
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
console.log("============================");
console.log(typeof typeof 1);
console.log(typeof undefined == typeof NULL);
var a = [1, 2, 3];
a[10] = 99;
console.log(a[6]);
console.log(a);
console.log("============================");
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
// The first statement returns true which is as expected.
// The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.
console.log("============================");
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
// Neither 21, nor 20, the result is undefined
// It’s because JavaScript initialization is not hoisted.
// (Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(456);
})(123);
console.log("============================");
let a1 = 37;
let func = () => {
  let func2 = () => {
    let b = 44;
    console.log(a1);
  };
  console.log(b);
  func2();
};
