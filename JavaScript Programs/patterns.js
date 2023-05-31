/*var n = 4,
  s = "",
  k = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    s = s + k;
    k++;
    s = s + "\t";
  }
  s = s + "\n";
}
console.log(s);*/

// =================================

/*var n = 5,
  s = "",
  k = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    s = s + k;
    k++;
    s = s + "\t";
  }
  s = s + "\n";
}
console.log(s);*/

var n = 4,
  s = "",
  k = 3,
  t = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    s = s + k * t;
    t++;
    s = s + "\t";
  }
  s = s + "\n";
}
console.log(s);
