let redInput = document.getElementById("redInput");

let greenInput = document.getElementById("greenInput");

let blueInput = document.getElementById("blueInput");

redInput.addEventListener("input", changeBackgroundColor);
greenInput.addEventListener("input", changeBackgroundColor);
blueInput.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor() {

  let red = parseFloat(redInput.value);

  let green = parseFloat(greenInput.value);

  let blue = parseFloat(blueInput.value);

  document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}