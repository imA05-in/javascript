const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        document.querySelector(".button").style.border = "2px solid black";
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        document.querySelector(".button").style.border = "2px solid black";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        document.querySelector(".button").style.border = "2px solid black";
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        document.querySelector(".button").style.border = "2px solid black";
        break;
      case "black":
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.querySelector("#black").style.border = "2px solid white";
        break;
    }
  });
});
