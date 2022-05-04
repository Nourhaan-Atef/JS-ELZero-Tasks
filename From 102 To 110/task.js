//Task 1
console.log("------ Task 1 ------");

//First Solution
console.log("------ First Solution for Task 1 ------");

// let msg = prompt("Print Number From - To", "Example 5-10");
// let min, max;

// let result = msg.split(" ");
// result = result.map((index) => {
//   return isNaN(index) ? index.split("-") : " ";
// });
// if (parseInt(result[0]) > parseInt(result[1])) {
//   max = parseInt(result[0][0]);
//   min = parseInt(result[0][1]);
// } else {
//   max = parseInt(result[0][1]);
//   min = parseInt(result[0][0]);
// }

// function countdown() {
//   if (max == min) {
//     clearInterval(counter);
//   }

//   console.log(max--);
// }

// let counter = setInterval(countdown, 1000);

//Secand Solution
console.log("------ Secand Solution for Task 1 ------");

// let number1 = prompt("Enter First Number ");
// let number2 = prompt("Enter Secand Number ");
// let min, max;
// if (number1 > number2) {
//   let promptMsg = confirm(`Print Number From ${number1} - To ${number2}`);
//   max = number1;
//   min = number2;
// } else {
//   let promptMsg = confirm(`Print Number From ${number2} - To ${number1}`);
//   max = number2;
//   min = number1;
// }

// function countdown() {
//   if (max <= min) {
//     clearInterval(counter);
//   }
//   console.log(max--);
// }

// let counter = setInterval(countdown, 1000);

//Task 2
// console.log("------ Task 2 ------");
// let PopUP = document.querySelector(".pop-up");
// setTimeout(function () {
//   PopUP.style.display = "block";
// }, 5000);

// let btn = document.querySelector(".content");
// btn.onclick = function () {
//   PopUP.style.display = "none";
// };

//Task 3
console.log("------ Task 3 ------");
// let number = document.querySelector(".counter");
// function countDown() {
//   number.innerHTML -= 1;
//   if (number.innerHTML === "0") {
//     clearInterval(handler);
//   }
// }
// let handler = setInterval(countDown, 1000);

//Task 4
// console.log("------ Task 4 ------");
// let number4 = document.querySelector(".counter");
// function countDown4() {
//   number4.innerHTML -= 1;
//   if (number4.innerHTML === "0") {
//     clearInterval(handler4);
//     setTimeout(function () {
//       window.open(
//         "https://elzero.org/",
//         "_self",
//         "width=400,height=400,left=200,top=10"
//       );
//     }, 1000);
//   }
// }
// let handler4 = setInterval(countDown4, 1000);

//Task 5
console.log("------ Task 5 ------");
let number5 = document.querySelector(".counter");
function countDown5() {
  number5.innerHTML -= 1;
  if (number5.innerHTML === "0") {
    clearInterval(handler5);
    setTimeout(function () {
      window.open(
        "https://elzero.org/",
        "_blank",
        "width=400,height=400,left=200,top=10"
      );
    }, 1000);
  }
}
let handler5 = setInterval(countDown5, 1000);
