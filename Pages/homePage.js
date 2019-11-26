setTimeout(function() {
    $('.hide').show();
}, 3000);


function authenticateLogin() {
    let pass = document.getElementById("password").value;
    let storedPW = "123"; //Temp PW for the page

    if (pass === storedPW) {
        document.getElementById("log_in_button").setAttribute("onclick", "location.href='/HTML/landingPage.html'");
    } else {
        alert("You typed in the wrong password");
    }
};
