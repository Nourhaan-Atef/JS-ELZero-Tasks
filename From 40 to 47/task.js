//Task 1
console.log("-------- Task 1 --------");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

myFriends.length = num;
// Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//Task 2

console.log("-------- Task 2 --------");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// Task 3
console.log("-------- Task 3 --------");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Task 4
console.log("-------- Task 4 --------");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let len = website.length;
let result = words[len][0];
console.log(result.slice(len).toUpperCase()); // ZERO

// Task 5
console.log("-------- Task 5 --------");
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== 0) {
  console.log("Found");
}

// Task 6
console.log("-------- Task 6 --------");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let f1 = arr1[arr1.indexOf("X")];
let f2 = arr2[arr2.indexOf("F")];
let f3 = arr2[arr2.indexOf("Y")];
allArrs = allArrs.concat(f2.toLowerCase(), f1.toLowerCase(), f3.toLowerCase());
console.log(allArrs.join("")); // fxy
