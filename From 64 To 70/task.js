//Task 1
console.log("------ Task 1 ------");
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    let result = zName.split(" ");
    let Fname = result[0];
    let Lname = result[1];
    return `${Fname} .${Lname[0].toUpperCase()}`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return `Your Age Is ${zAge.split(0, 2)}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(
      zCountry
    )}`;
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//Task 2
console.log("------Task 2------");

console.log("------ 1 ------");
// function itsMe() {
//   return `Iam A Normal Function`;
// }

itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

console.log("------ 2 ------");
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//Task 4
console.log("------Task 4------");
function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      sum += data[i];
    } else if (typeof data[i] === "string") {
    }
  }
  return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
