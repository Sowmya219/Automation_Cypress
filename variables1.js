//declaration of a variable
var x=10;
console.log(x);
function v()
{
let k="Localvariable";
console.log(k);
console.log(x);
}
console.log(x);
//console.log(k);
v();
//Global variable declaration
var a="globalvariable";
function abc()
{
console.log(a);
}
abc();
//Local variable declaration
function v()
{
var k="Localvariable";
console.log(k);
}
v();
//window
window.val=50;
function fun()
{
//window.val=50;
}
function fun1()
{
console.log(window.val);
}
fun();
fun1();
var value=50;  
function fvc(){  
alert(window.value); 
}  
fvc();
