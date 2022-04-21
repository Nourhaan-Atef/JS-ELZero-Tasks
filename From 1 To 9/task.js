// Task 2

let element = document.write("<h1>ElZero</h1>");

//Task 3

console.log(
  "%cElZero %cWeb %cSchool",
  "color:red;font-size:40px",
  "color:green;font-size:40px;font-weight:bold",
  "background-color:blue;font-size:40px"
);

//Task 4

console.group("Group one");
console.log("Message one ");
console.log("Message Two");

console.group("Child Group");
console.log("Message one ");
console.log("Message Two");

console.group("Grand Child Group ");
console.log("Message one ");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group Two");
console.log("Message one ");
console.log("Message Two");

//Task 5

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
