function greet(name, callback) {
  console.log("hi" + name);
  callback();
}
function callMe() {
  console.log("I am callback function");
}
greet("sowmya", callMe);

let count = true;
let countval = new Promise(function (resolve, reject) {
  if (count) {
    resolve("there is count value");
  } else {
    reject("there is no count value");
  }
});
console.log(countval);

var s = "sowmya",
  t = "";
for (var i = s.length - 1; i >= 0; i--) {
  t = t + s[i];
}
if (s == t) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
// console.log(t);
console.log(s.substring(-4, -1));

var st = "#GeeKs01fOr@gEEks07";
var cnt = 0,
  cnt1 = 0,
  cnt2 = 0,
  cnt4 = 0;
for (let i = 0; i < st.length; i++) {
  if (st[i] >= "A" || st[i] <= "Z") cnt++;
  else if (st[i] >= "a" || st[i] <= "z") cnt1++;
  else if (st[i] >= "0" || st[i] <= "9") cnt2++;
  else cnt4++;
}
console.log(cnt);
console.log(cnt1);
console.log(cnt2);
console.log(cnt4);
console.log("===================");

function Count(str) {
  var upper = 0,
    lower = 0,
    number = 0,
    special = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") upper++;
    else if (str[i] >= "a" && str[i] <= "z") lower++;
    else if (str[i] >= "0" && str[i] <= "9") number++;
    else special++;
  }
  console.log("Upper case letters: " + upper);
  console.log("Lower case letters : " + lower);
  console.log("Number : " + number);
  console.log("Special characters : " + special);
}

// Driver function
var str = "#GeeKs01fOr@gEEks07";
Count(str);
console.log("===================");
var x = "2",
  y = "3";
console.log(typeof +x);
console.log(typeof x);
console.log(x - y);
console.log(+x - +y);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.3);
console.log(typeof (0.1 + 0.2));
console.log(typeof 0.3);
console.log("===================");
console.log(JSON.stringify([null, 2, 3]));
console.log(JSON.stringify([undefined, 2, 3]));
console.log(JSON.stringify([null, 2, 3]) == JSON.stringify([undefined, 2, 3]));
console.log(JSON.stringify([null, 2, 3]) === JSON.stringify([undefined, 2, 3]));
var x = 1;
const A = () => {
  console.log(x);
  const B = () => {
    const x = 3;
    console.log(x);
  };
  B();
};

A();

const s5 = "the-ping-poi";
console.log(s5.replaceAll("-", ""));
