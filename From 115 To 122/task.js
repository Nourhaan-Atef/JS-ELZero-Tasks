//Task 1
console.log("------ Task 1 ------");
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a1, , , , e1] = myNumbers;
console.log(a1 * e1); // 5

//Task 2
console.log("------ Task 2 ------");
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a2, b, c, [d, e2, [f, g]]] = mySkills;
console.log(`My Skills: ${a2}, ${b}, ${c}, ${d}, ${e2}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//Task 3
console.log("------ Task 3 Challenge ------");

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
let FinalArray = arr1.concat(arr2).concat(arr3);
let [Ahmed, , , mahnoud, , , , shady] = FinalArray;
console.log(`My Best Friends: ${shady}, ${mahnoud}, ${Ahmed}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//Task 4
console.log("------ Task 4 ------");

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a,
  hobbies: w = "",
  hobbies: [h1, , h3],
  country: c3,
} = member;
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c3}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

//Task 5
console.log("------ Task 5 ------");

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let {
  title: t,
  developer: d5,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;
let arrayOfKeys = Object.keys(game.releases);
let [o, a5] = arrayOfKeys;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d5} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a5}`);
// Although I Love Ark Of Napishtim

console.log(`${a5} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a5} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
