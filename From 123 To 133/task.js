//Practice
console.log("############ Practice ############");
let myData = new Set([1, 1, 1, 2, 3]);
console.log(myData);
console.log(myData.size);
console.log("########");
let myMap = new Map([
  [10, "number"],
  ["Name", "string"],
  [false, "boolean"],
]);
console.log(myMap.has(10));
console.log(myMap.set(20, "number"));
console.log(myMap.get(10));
console.log(myMap.size);
console.log(myMap.delete(10));
console.log(myMap.size);
console.log(myMap.clear());
console.log(myMap.size);

console.log("#############");
console.log(Array.from("nourhan"));
console.log(Array.from("12345", (n) => +n + +n));

console.log("#############");

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// console.log(myArray.copyWithin(4, -1));
// console.log(myArray.copyWithin(1, -2));
console.log(myArray.copyWithin(1, -2, -1)); //[10, "A", 30, 40, 50, "A", "B"]

console.log("#############");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = 5;
let check = nums.some(function (ele) {
  return ele > this;
}, number);
console.log(check);
console.log("#############");

// Task 1
console.log("############ Task 1 ############");

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
let lastElement = Array.from(setOfNumbers);
console.log(lastElement[2]);

// Task 2
console.log("############ Task 2 ############");
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myFrindsOrderd = new Set(myFriends.sort());
console.log(myFrindsOrderd);

// Task 3
console.log("############ Task 3 ############");
let myInfo = new Map();
myInfo.set("username", "osama");
myInfo.set("role", "Admin");
myInfo.set("country", "Egypt");

console.log(myInfo);
console.log(myInfo.size);
console.log(myInfo.has("role"));

// Task 4
console.log("############ Task 4 ############");

let theNumber = 100020003000;
console.log(
  new Number(
    Array.from(new Set([...theNumber.toString()].sort()))
      .map((n) => +n)
      .join("")
  )
);

// Task 5
console.log("############ Task 5 ############");

let theName = "Elzero";
let SetName = new Set(theName);
console.log(SetName); // 1
console.log(SetName.values()); // 2
console.log(Array.from(theName)); // 3
console.log([...theName]); //4

// Task 6
console.log("############ Task 6 ############ not finished");
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars1 = chars.copyWithin(3, 0);

console.log(chars1);
// Task 7
console.log("############ Task 7 ############");
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let res1 = [...numsOne, ...numsTwo];
console.log(res1); // 1
let res2 = numsOne.concat(numsTwo);
console.log(res2); // 2
numsOne.push(...numsTwo);
console.log(numsOne); // 3
