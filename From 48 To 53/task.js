// Task 1

// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i <= end; i += start) {
//   if (i == exclude) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//Task 2

// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i >= end; i--) {
//   if (i == stop) {
//     break;
//   } else {
//     if (i < start) {
//       console.log(`0${i}`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
// }

//Task 3

// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i <= end; i++) {
//   console.log(`${i}`);
//   for (let j = start; j < end; j++) {
//     if (j % breaker == +false) {
//       console.log(`--${j}`);
//     }
//   }
// }

//Task 4  Error
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   let i = index;
//   if (i == 0) break;
//   i += jump;
// }

//Task 5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for (let i = +false, count = +true; i < friends.length; i++) {
//   letter = letter.toUpperCase();
//   if (friends[i].startsWith(letter)) {
//     friends.splice(friends[i], 0);
//     continue;
//   } else {
//     console.log(`${count} => ${friends[i]}`);
//     count++;
//   }
// }

//Task 6
let start = 0;
let swappedName = "elZerO";
let result = "";
for (let i = start; i <= swappedName.length; i++) {
  if (swappedName.charAt(i) === swappedName.charAt(i).toLowerCase()) {
    result += swappedName.charAt(i).toUpperCase();
  } else {
    result += swappedName.charAt(i).toLowerCase();
  }
}
console.log(swappedName);
console.log(result);
