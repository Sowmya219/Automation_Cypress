let a = ["java", "cprogram", "android", "bootstrap", "html", "css"];
console.log(a.sort());
let b = "sowmya",
  c = "";
for (let i = b.length - 1; i >= 0; i--) {
  c = c + b[i];
}
console.log(c);
let s = "@@@@hllpa ioue[]{}12345&^%#!*+=",
  cnt = 0,
  cnt1 = 0;
for (let i = 0; i < s.length; i++) {
  if (
    s[i] == "A" ||
    s[i] == "a" ||
    s[i] == "E" ||
    s[i] == "e" ||
    s[i] == "I" ||
    s[i] == "i" ||
    s[i] == "o" ||
    s[i] == "O" ||
    s[i] == "U" ||
    s[i] == "u"
  ) {
    cnt++;
  }
  if (s[i] >= 1 && s[i] <= 9) {
    cnt1++;
  }
}
console.log(cnt);
console.log(cnt1);
