//Task 1
console.log("------ Task 1 ------");
// Add Variables Here
let numberOne = 10;
let numberTwo = 20;
// Ouput
let result1 = numberOne + "" + numberTwo;
let result2 = `${numberOne}${numberTwo}`;
console.log(result1); // Normal Concatenate => 1020
console.log(typeof result1); // Normal Concatenate => String
console.log(result2); // Template Literals Way => 1020
console.log(typeof result2); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}
`);
/*
  Template Literals Way
  20
  10
*/

//Task 3
console.log("------ Task 3 ------");

console.log(
  '`I\'am In\n\\\\ \nLove \\\\"""\'\'\'\n++ with ++\n\\"""\\"""\n""JavaScript""`` '
);

//Task 4
console.log("------ Task 4 ------");
let a = 21;
let b = 20;

console.log(
  `_${a}_${b}${true + true}${true + true - true}_${b}${true + true}${
    true + true - true
  }_${b}${true + true}${true + true - true}_${true + true}${true - true}_`
); // _21_2021_2021_2021_20_
