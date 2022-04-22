//Task 1
console.log("------- Task 1 -------");
// Test Case 1
let num = 9;
if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else {
  console.log(num);
}

//Task 2
console.log("------- Task 2 -------");
let num1 = 9;
let str = "9";
let str2 = "20";
if (num === str) {
  console.log("{num1} Is The Same Value As {str}");
} else if (num1 == str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
} else if (num !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
} else if (str !== str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
// Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

//Task 3
console.log("------- Task 3 -------");
let num2 = 10;
let num3 = 30;
let num4 = "30";
num4 > num2 && num4 == num3
  ? console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    )
  : num4 > num2 && num4 == num3 && num4 !== num3
  ? console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    )
  : num4 !== num2 && typeof num4 != typeof num3
  ? console.log(
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    )
  : console.log("not available ");
//Task 4
console.log("------- Task 4 -------");
