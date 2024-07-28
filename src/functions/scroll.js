// Function to show or hide the scroll button based on user scrolling
window.onscroll = function () {
    var gotopbtn = document.getElementById("gotopbtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      gotopbtn.style.display = "block";
    } else {
      gotopbtn.style.display = "none";
    }
  };
  
  // Function to scroll to the top when the button is clicked
  document.getElementById("gotopbtn").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  