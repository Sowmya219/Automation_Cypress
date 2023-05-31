// let str = ["sai", "sonu", "ram", "level"],
let rev = "",
  str1 = "this is sowmya from wipro";
let revstr = [];
let str = str1.split(" ");
for (let i = 0; i < str.length; i++) {
  let s1 = str[i];
  rev = "";
  for (let j = s1.length - 1; j >= 0; j--) {
    rev = rev + s1[j];
  }
  revstr.push(rev);
}
// revstr.push(rev);
console.log(revstr);
console.log("*****************");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }

  console.log("\n");
}
console.log("\t");
