//Task 1

console.log("------ Task 1 ------");
function sayHello(theName, theGender) {
  if (theGender === "femal") {
    console.log(`Hello Miss ${theName}`);
  } else if (theGender === "male") {
    console.log(`Hello Mr ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//Task 2

console.log("------ Task 2 ------");
function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined) {
    console.log("Second Number Not Found");
  } else if (operation == undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//Task 3
console.log("------ Task 3 ------");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Your age in Months is ${theAge * 12}`);
    console.log(`Your age in Weeks is ${theAge * 12 * 4}`);
    console.log(`Your age in Days is ${theAge * 12 * 4 * 30}`);
    console.log(`Your age in Hours is ${theAge * 12 * 4 * 30 * 24}`);
    console.log(`Your age in Minutes is ${theAge * 12 * 4 * 30 * 24 * 60}`);
    console.log(
      `Your age in Secands is ${theAge * 12 * 4 * 30 * 24 * 60 * 60}`
    );
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//Task 6
console.log("------ Task 6 ------");
function multiply(...numbers) {
  let sum = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum *= parseInt(numbers[i]);
    } else if (typeof numbers[i] === "string") {
      continue;
    }
  }
  console.log(sum);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
