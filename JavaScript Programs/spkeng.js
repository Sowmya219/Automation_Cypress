// console.log(2 - "2" - "2");
// console.log(2 + "-2" + "2");

// var scope = "global scope";
// function check() {
//   var scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f();
// }

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// // var x = 23;

// // (function () {
// //   var x = 43;
// //   (function random() {
// //     x++;
// //     console.log(x);
// //     var x = 21;
// //   })();
// // })();

// function randomFunc() {
//   for (var i = 0; i < 2; i++) {
//     (function (i) {
//       setTimeout(() => console.log(i), 1000);
//     })(i);
//   }
// }
// randomFunc();
//   58. Write a f

// var a = "sowmya",
//   cnt = 0;
// for (let i = 0; i < a.length; i++) {
//   if (
//     a.charAt(i) == "a" ||
//     a.charAt(i) == "e" ||
//     a.charAt(i) == "i" ||
//     a.charAt(i) == "o" ||
//     a.charAt(i) == "u"
//   ) {
//     cnt++;
//   }
// }
// console.log(cnt);

// var b = 1,
//   c = "1";
// console.log(b == c);
// console.log(b === c);

// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// obj.getName();

// var obj = {
//   name: "vivek",
//   getName: function () {
//     console.log(this.name);
//   },
// };

// var getName = obj.getName;

// var obj2 = { name: "akshay", getName };
// obj2.getName();
console.log(2 + 5 + "3");
console.log(2 - 5 + "3");
console.log(2 + 5 - "3");
console.log(2 - "5" + "3");

// var n = 8;
// let cnt1 = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     cnt1++;
//   }
// }

// // console.log(i);
// if (cnt1 == 2) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

var cnt2 = 0;
for (let i = 2; i <= 20; i++) {
  cnt2 = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      cnt2++;
    }
  }
  if (cnt2 === 2) {
    console.log(i);
  }
}

var str = "sowmya",
  str1 = "";
for (let i = str.length; i >= 0; i--) {
  str1 = str1 + str.charAt(i);
}
console.log(str1);

//clousre
function init() {
  const name = "hi";
  function displayName() {
    console.log(name);
  }

  displayName();
}
init();
