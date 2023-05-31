let person = {
  firstName: "Tim",
  lastName: "Joe",
  age: 24,
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
};
// console.log(person.fullName());
// console.log(person.firstName);
// console.log(person.firstName);
// console.log(person["lastName"]);
// person.firstName = "jio";
// console.log(person.firstName);
person.gender = "male";
console.log(person);
delete person.gender;
for (let key in person) {
  console.log(person[key]);
}
