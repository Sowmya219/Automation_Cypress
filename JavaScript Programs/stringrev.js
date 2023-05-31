let s = "I love javascript";
// let a = s.split(" ");
// let a = s.match(/\S+/g);
let r = "";
for (let i = s.length - 1; i >= 0; i--) {
  r = r + s.charAt(i);
}
console.log(r);
// reverse words order in sentence
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//   //   console.log(a[i]);
//   if (i == a.length - 1) {
//     r = a[i] + r;
//   } else {
//     r = " " + a[i] + r;
//   }
// }
// console.log(r);
// reverse words order in sentence
/*let p = "",
  m = "";
for (let i = a.length - 1; i >= 0; i--) {
  p = p + a[i] + " ";
  //reverse words in sentence
  m = "";
  for (let j = p.length - 1; j >= 0; j--) {
    m = m + p[j];
  }
}
console.log(p);
console.log(m);
//reverse words in sentence
let k = "",
  l = "";
for (let i = 0; i < a.length; i++) {
  k = "";
  for (let j = a[i].length - 1; j >= 0; j--) {
    k = k + a[i].charAt(j);
  }
  l = l + k + " ";
}
console.log(l);*/
