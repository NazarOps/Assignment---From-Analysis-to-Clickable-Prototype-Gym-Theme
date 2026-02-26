const form = document.getElementById("loginForm");
const button = document.getElementById("editParagraph");



if (form) {
  form.addEventListener("submit", loginSuccess);

  function loginSuccess(e) {
    e.preventDefault();

    const email = document.getElementById("emailField").value.trim();
    const password = document.getElementById("passwordField").value;


    const role = document.querySelector('input[name="role"]:checked').value;

    if (email === "") {
      alert("Enter an email!");
      return;
    }

    if (password === "") {
      alert("Enter a password!");
      return;
    }

    if (password.length < 8) {
      alert("Your password must be at least 8 characters long!");
      return;
    }

    
    if (role === "staff" && !email.endsWith("@staff.com")) {
      alert("Staff email must end with @staff.com");
      return;
    }

    if (role === "trainer" && !email.endsWith("@trainer.com")) {
      alert("Trainer email must end with @trainer.com");
      return;
    }


    alert("Login successful!");
    window.location.href = "components.html";
  }
}

if (button) {
  button.addEventListener("click", changeInfo);

  function changeInfo() {
    document.getElementById("text").textContent = "Training equipment is fixed!";

  }
}