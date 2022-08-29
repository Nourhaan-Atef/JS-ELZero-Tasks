//Task 1
console.log("*".repeat(10) + "Task 1" + "*".repeat(10));
let dateNow1 = new Date();
let birthday = new Date("20 Mar 2000");
let res = dateNow1 - birthday;
console.log(`${res / 1000} Secands`);
console.log(`${res / 1000 / 60} Minutes`);
console.log(`${res / 1000 / 60 / 60} Hours`);
console.log(`${res / 1000 / 60 / 60 / 24} Days `);
console.log(`${res / 1000 / 60 / 60 / 24} Months`);
console.log(`${res / 1000 / 60 / 60 / 24 / 365} Years`);
//Task 2
console.log("*".repeat(10) + "Task 2" + "*".repeat(10));
// let dateNow2 = new Date(1980, 0, 1, 0, 0, 1);
let dateNow2 = new Date(0);
dateNow2.setHours(0);
dateNow2.setSeconds(10);
dateNow2.setFullYear(1980);

console.log(dateNow2);
//Task 3
console.log("*".repeat(10) + "Task 3" + "*".repeat(10));
let dateNow3 = new Date();
let res3 = new Date(dateNow3.getFullYear(), dateNow3.getMonth() - 1, 0);
console.log(res3);
// console.log(
//   `Previous Month Is ${res3.getMonth()} And The Last Day IS ${res3.getDay()}`
// );
//Task 4
console.log("*".repeat(10) + "Task 4" + "*".repeat(10));
//Task 5
console.log("*".repeat(10) + "Task 5" + "*".repeat(10));
//Task 6
console.log("*".repeat(10) + "Task 6" + "*".repeat(10));
//Task 7
console.log("*".repeat(10) + "Task 7" + "*".repeat(10));
//Task 8
console.log("*".repeat(10) + "Task 8" + "*".repeat(10));
