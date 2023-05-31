// let a = 20,
//   b = 40,
//   cnt = 0;
// for (let i = a; i <= b; i++) {
//   cnt = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       cnt++;
//     }
//   }

//   if (cnt === 2) {
//     console.log(i);
//   }
// }
console.log("****************");
// let s = "madam",
//   s1 = "";
// let len = s.length;
// for (let i = 0; i < len / 2; i++) {
//   if (s[i] !== s[len - 1 - i]) {
//     // s1 = s1 + s.charAt(i);
//     console.log("not a palindrome");
//   }
// }
// // s1 = s1 + s.charAt(i);
// console.log("palindrome");

// if (s === s1) {
//   console.log(s1 + " is a palindrome");
// } else {
//   console.log(s1 + " is not a palindrome");
// }

// let p = 8,
//   cnt = 0,
//   m = 1;
// for (let i = 1; i <= p; i++) {
//   if (p % i === 0) {
//     cnt++;
//   }
// }
// if (cnt === 2) console.log("prime");
// else return console.log("not prime");

// for (let i = 1; i <= 5; i++) {
//   m = m * i;
// }
// console.log(m);
// let mult = 3,
//   mul = 0;
// for (let i = 1; i <= 10; i++) {
//   mul = mult * i;

//   console.log(`${mult}*${i}=${mul}`);
// }
let fib = 5,
  a = 0,
  b = 1,
  c = 0;
for (let i = 1; i <= fib; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
