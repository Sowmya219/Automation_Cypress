let a = ["hi", "hello", "bye", "chai"];
console.log(a.push());
console.log(a.push("joe"));
console.log(a.pop());
console.log(a.unshift());
console.log(a.unshift("tom"));
console.log(a);
console.log(a.shift());
console.log(a);
// console.log(a.splice(2, 2));
// console.log(a.slice(1, 3));
b = "sowmya";
//common ponits
/*
1. If start===stop, returns empty string
2. If stop is not mentioned returns till end of the string
3. If stop/start > string length, returns string length
 */
/*
Slice:
1. If start>stop return empty string
2. If start is -ve, return empty str
3. If stop is -ve return string.length-Math.abs(-ve stop value)
*/
/*
Substring:
1. If start>stop then swap the values return string
2. If start/stop is -ve, treat as index 0
*/
// console.log(b.slice(5, 4));
// console.log(b.slice(-5, 4));
console.log(b.slice(1, -4));
// console.log(b.substring(4, 2));
// console.log(2 + (2 % 2));
console.log(a.splice(1, 3));

let x = 1,
  y = "1",
  z = 2;
console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
