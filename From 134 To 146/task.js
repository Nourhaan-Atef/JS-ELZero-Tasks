// Task 1
console.log("---------- Task 1 ----------");
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/\w{4}:\w{3}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}:\w{4}/gi));
// Task 2

console.log("---------- Task 2 ----------");
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg2 = /\bOs\d*O\b/g;
console.log(specialNames.match(reg2));
// Output
// ['Os10O', 'OsO', 'Os100O']

// Task 3
console.log("---------- Task 3 ----------");
let phone = "+(995)-123 (4567)";
let reg3 = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/g;
console.log(phone.match(reg3));

// Task 4
console.log("---------- Task 4 ----------");
let reg4 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Task 5
console.log("---------- Task 5 ----------");
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg5 = /\d{2}(\/| \- |\s)\d{2}(\/| \- |\s)(\d{4}|\d{2})/g; // Write Pattern Here
console.log(date1.match(reg5)); // "25/10/1982"
console.log(date2.match(reg5)); // "25 - 10 - 1982"
console.log(date3.match(reg5)); // "25 10 1982"
console.log(date4.match(reg5)); // "25 10 82"
// Task 6
console.log("---------- Task 6 ----------");
