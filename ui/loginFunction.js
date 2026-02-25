const form = document.getElementById("loginForm");

form.addEventListener("submit", loginSuccess);

function loginSuccess(e) {
  e.preventDefault();

  const email = document.getElementById("emailField").value.trim();
  const password = document.getElementById("passwordField").value;

  // hämta vald roll (din befintliga radio-grupp)
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

  // 🔒 roll-baserad email-regel (ingen stil påverkas)
  if (role === "staff" && !email.endsWith("@staff.com")) {
    alert("Staff email must end with @staff.com");
    return;
  }

  if (role === "trainer" && !email.endsWith("@trainer.com")) {
    alert("Trainer email must end with @trainer.com");
    return;
  }

  // klient har inget domänkrav
  alert("Login successful!");
  window.location.href = "dashboard.html";
}