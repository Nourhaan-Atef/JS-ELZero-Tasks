let result = document.querySelectorAll(".open");
for (let i = 0; i < result.length; i++) {
  if (result[i].textContent == "Elzero") {
    window.onload = function () {
      result[i].click();
    };
  }
}
