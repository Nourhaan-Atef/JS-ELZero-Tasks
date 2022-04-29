//Task 1
console.log("------ Task 1 ------");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let result1 = mix.map((e) => {
  return isNaN(parseInt(e)) ? e : "";
});
result1 = result1.reduce((acc, element) => {
  return acc + element;
});
console.log(result1);

//Task 2
console.log("------ Task 2 ------");
let myString = "EElllzzzzzzzeroo";
let result2 = myString
  .split("")
  .filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  })
  .join("");
console.log(result2);
// Elzero

//Task 3
console.log("------ Task 3 ------");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let challenge1 = myArray.flat().join("");
console.log(challenge1);
// Elzero
//Task 4
console.log("------ Task 4 ------");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result3 = numsAndStrings
  .filter((item) => {
    return !isNaN(item) ? item : "";
  })
  .map((e) => {
    return -e;
  });
console.log(result3);
// [-1, -10, 10, 20, -5, -3]

//Task 5
console.log("------ Task 5 ------");
let nums = [2, 12, 11, 5, 10, 1, 99];
let challenge2 = nums.reduce((acc, element) => {
  return element % 2 == 0 ? element * acc : element + acc;
}, 1);
console.log(challenge2);
// 500
