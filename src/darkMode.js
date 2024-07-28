const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const modal = document.getElementsByClassName("modal");
toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");

  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "rgba(255, 249, 181, 0.244)";
    body.style.color = "#121212";
    body.style.transition = "1s";
  } else {
    body.style.background = "#1b1b1c";
    // modal.style.background = "#121212";
    document.getElementsByClassName("option-title").style.color = "#121212";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});
