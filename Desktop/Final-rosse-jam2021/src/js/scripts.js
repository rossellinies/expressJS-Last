document.addEventListener("click", handleClicks);

function handleClicks(e) {
  console.log(e.target);
  if (e.target.matches(".surprise")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  }
}

document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".surprise")) {
    document.querySelector("body").classList.add("showme");
    e.preventDefault();
  }
  if (e.target.matches(".closer")) {
    document.querySelector("body").classList.remove("showme");
    e.preventDefault();
  }
}

var mapClicker = document.querySelector(".surprise");
var body = document.querySelector("body");
// var closer ...

// closer.addEventListener ...
mapClicker.addEventListener("click", show);

function show(e) {
  e.preventDefault();
  body.classList.toggle("showme"); // NEW
}
