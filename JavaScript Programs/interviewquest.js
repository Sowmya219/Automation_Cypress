// //print length of string
// var s = "hello world";
// var k = s.split(" ");
// var p = k[k.length - 1];
// console.log(p);
// var cnt = 0;
// var l = p.split("");
// l.forEach(() => {
//   cnt++;
// });
// console.log(cnt);
// var strs = ["flower", "flows", "flowgh"];
// // output: flow
var st = "flowerfl";
var o = "";
//output: fl
for (let i = 0; i < st.length; i++) {
  for (let j = i + 1; j < st.length; j++) {
    if (st[i] == st[j]) {
      o = o + st[i];
      // console.log(st[i]);
      break;
    }
  }
}
console.log(o);
var k = "today is sitarama kalyanam today is";
var t = k.split(" ");
var v = 0,
  op = "";
for (let i = 0; i < t.length; i++) {
  v = 1;
  for (let j = i + 1; j < t.length; j++) {
    if (t[i] === t[j]) {
      v++;
      t[j] = "";
    }
  }
  op = op + t[i] + " ";
  if (v > 1 && t[i] != "") {
    console.log(t[i]);
    console.log(v);
  }
}
console.log(op);

// function duplicateCharCount(str) {
//   if (str) {
//     var obj = {};
//     for (let i = 0; i < str.length; i++) {
//       if (obj[str[i]]) {
//         obj[str[i]] = obj[str[i]] + obj[str[i]];
//       } else {
//         obj[str[i]] = 1;
//       }
//     }
//     console.log(obj);
//   }
// }

// duplicateCharCount("aabcdd");

// print all substring for a given string
var g = "abcd";
for (let i = 0; i < g.length; i++) {
  for (let j = i + 1; j <= g.length; j++) {
    console.log(g.substring(i, j));
  }
}
