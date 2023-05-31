// let day = "tuesday ";
// console.log(day.length);
// let subDay = day.slice(0, 4);
// console.log(subDay);
// console.log(day[1]);
// let splitDay = day.split("s");
// console.log(splitDay[1].length);
// console.log(splitDay[1].trim().length);

// let date = "23";
// let nextDate = "27";
// let diff = parseInt(nextDate) - parseInt(date);
// console.log(diff);
// console.log(diff.toString());
// console.log(typeof date);
// console.log(typeof nextDate);
// console.log(typeof undefined);

//tuesday is funday
let d = "tuesday is funday";
//   s = "";
// for (let i = 0; i < d.length; i++) {
//   if (d.charAt(i) == "d" || d.charAt(i) == "a" || d.charAt(i) == "y") {
//     s = s + d.charAt(i);
//   }
// }
// console.log(s);
let cnt = 0;
let val = d.indexOf("day");
while (val !== -1) {
  cnt++;
  val = d.indexOf("day", val + 1);
}
console.log(cnt);

// console.log(1 + "20 - 20");
// console.log("20-20" + 1);
// console.log(1 + "20" - "20");
// console.log("20" - "20" + 1);
console.log(1 + "20" - "20");
console.log("20" - "20");
console.log(1 + "0" + 0);
console.log(1 + "hi" - "ji");
console.log("lop" - 1 + "2" + 9);

var a = undefined;
var b = null;
console.log(typeof a);
console.log(typeof b);
console.log(a == b);
var j = "1" - "20.89" + "ji";
console.log(j);
var s = 456;
console.log(typeof s.toString());
var users = ["k", "l", "m", "n", "o", "p", "q"];
console.log(users.slice(2));
users.splice(3, 1, "hi", "bye");
console.log(users);

console.log("*****************");
var st = "Sowmya";
console.log(st.charAt(2));
console.log(st.substring(1, 4));
console.log(st.substr(1, 4));
console.log(st.slice(1, 4));
console.log("*****************");
var cnt2 = 0;
var st2 = "Sowmya   is a good  girl";
var a2 = st2.split(" ");
console.log(a2);
for (var i = 0; i < a2.length; i++) {
  // console.log(a2[i]);
  if (a2[i] !== "") {
    // console.log(a2[i]);
    var t2 = a2[i];
    for (var l = 0; l < t2.length; l++) {
      if (t2.charAt(l) == "g") {
        cnt2++;
      }
    }
  }
}
console.log(cnt2);
//   break;
// } else {
//   continue;
// }
// console.log(a2[i]);

// console.log(a2[i]);
console.log("------------------------");
// var s = "madam",
//   s1 = "";
// for (let i = 0; i < s.length / 2; i++) {
//   if (s[i] === s[s.length - 1 - i]) {
//     s1 = s1 + s[i];
//   }

//   if (s1 === s) {
//     console.log("pal");
//   } else {
//     console.log("not pal");
//   }
// }

function palindrome(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
palindrome("madam");
