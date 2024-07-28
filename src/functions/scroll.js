// Function to show or hide the scroll button based on user scrolling
window.onscroll = function () {
    var gotopbtn = document.getElementById("gotopbtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      gotopbtn.style.display = "block";
    } else {
      gotopbtn.style.display = "none";
    }
  };
  