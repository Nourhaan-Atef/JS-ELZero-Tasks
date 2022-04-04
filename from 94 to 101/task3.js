let p = document.querySelector("p");
let div = document.querySelector("div");
let createdP1 = document.createElement("p");
let createdP2 = document.createElement("p");

p.remove();
div.before(createdP1);
createdP1.className = "start";
createdP1.title = "start Element";
createdP1.dataset.value = "start";
createdP1.innerText = "Start";

div.after(createdP2);
createdP1.className = "end";
createdP1.title = "End Element";
createdP1.dataset.value = "End";
createdP1.innerText = "End";
