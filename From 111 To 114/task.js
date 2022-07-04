//Task 1
console.log("------ Task 1 ------");
let options = document.querySelectorAll("select option");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.color);
  });
});

//Task 2
// console.log("------ Task 2 ------");
