console.log("*".repeat(10), "Task 1 & 2 & 3 & 4", "*".repeat(10));
let myJsonRequest = new XMLHttpRequest();
myJsonRequest.open("GET", "task.json");
myJsonRequest.send();
myJsonRequest.onreadystatechange = function () {
  let mainData = JSON.parse(this.responseText);
  if (this.readyState === 4 && this.status === 200) {
    console.log("JSON Object Content Here");
    console.log("Data Loaded");
    let div = document.createElement("div");
    for (let i = 0; i < mainData.length; i++) {
      mainData["article_department"] = "ALL";
      console.log(i, ":", mainData[i]);

      let subDiv = document.createElement("div");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      div.setAttribute("id", "data");
      document.body.appendChild(div);
      h2.innerHTML = mainData[i]["aricle_title"];
      p1.innerHTML = mainData[i]["id"];
      p2.innerHTML = mainData[i]["Author_name"];
      p3.innerHTML = mainData[i]["article_department"];
      subDiv.appendChild(h2);
      subDiv.appendChild(p1);
      subDiv.appendChild(p2);
      subDiv.appendChild(p3);
      div.appendChild(subDiv);
    }
  }
};
