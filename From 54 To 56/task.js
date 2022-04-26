//Task
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
for (let i = index; i < friends.length; i++) {
  if (typeof friends[i] === "number" || friends[i].startsWith("A")) {
    continue;
  } else {
    counter++;
    console.log(`${counter} => ${friends[i]}`);
  }
}
