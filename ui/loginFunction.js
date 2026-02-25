let submit = document.getElementById("loginForm");

submit.addEventListener("submit", LoginSucess);

function LoginSucess(e) {
    e.preventDefault();
    let email = document.getElementById("emailField").value;
    let password = document.getElementById("passwordField").value;

    if(email == "" || !email.includes("@")) {
        window.alert("Enter an email!");
    }

    else if(password =="") {
        window.alert("Enter a password!");
    }

    else if(password.length < 8) {
        window.alert("Your password must be at least 8 characters long!");
    }

    else {
        window.alert("Login successful!");
        window.location.href = "dashboard.html";
    }
    
}