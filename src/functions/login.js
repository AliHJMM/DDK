function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = {
        "habib": "h123",
        "ali": "a123",
        "mohamed": "m123",
        "msiddique": "ms123"
    };

    if (users[username] && users[username] === password) {
        window.location.href = "main.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}