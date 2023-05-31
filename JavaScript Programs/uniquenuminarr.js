var a = [4, 5, 5, 5, 4, 6, 6, 9, 4];
var b = [];
var k = 0;
for (let i = 0; i < a.length; i++) {
  k = 0;
  if (!b.includes(a[i])) {
    b.push(a[i]);
    k++;

    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        k++;
      }
    }
    console.log(a[i]);
    console.log(k);
    // console.log("######");
    if (k == 1) console.log(a[i]);
  }
}

var a = null;
console.log(a);
