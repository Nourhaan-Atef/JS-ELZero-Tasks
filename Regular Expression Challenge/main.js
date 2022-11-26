// let x="123456456789";
// let regex= /[0-9]/;
// console.log(x.match(regex))

// let myString = "AaBbcdefG123!1234%^&*"
// let reg1 = /[a-z]/g
// let reg2 = /[A-Z]/g
// let reg3=/[0-9]/g
// let reg4 = /[^a-zA-z0-9]/g
// console.log(myString.match(reg1))
// console.log(myString.match(reg2))
// console.log(myString.match(reg3))
// console.log(myString.match(reg4))

/* Challenge */

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.org:8080/articles.php?id=100&cat=topics";

let reg = /(https?:\/\/)?(www.)?\w+.org(:\w+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/gi;

console.log(url1.match(reg));
console.log(url2.match(reg));
console.log(url3.match(reg));
console.log(url4.match(reg));
console.log(url5.match(reg));
