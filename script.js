const form = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const status = document.querySelector("#status");
const toggle = document.querySelector(".toggle-password");

toggle.addEventListener("click", () => {
  const showing = password.type === "text";
  password.type = showing ? "password" : "text";
  toggle.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  toggle.title = showing ? "Show password" : "Hide password";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.classList.remove("error");
  if (!email.value.trim() || !password.value) {
    status.textContent = "Please enter your email and password.";
    status.classList.add("error");
    return;
  }
  if (!email.validity.valid) {
    status.textContent = "Please enter a valid email address.";
    status.classList.add("error");
    email.focus();
    return;
  }
  if (password.value.length < 6) {
    status.textContent = "Password must be at least 6 characters.";
    status.classList.add("error");
    password.focus();
    return;
  }
  status.textContent = "Demo sign-in validated. Connect an authentication API to log in.";
});

document.querySelector("#forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  status.classList.remove("error");
  status.textContent = email.value.trim()
    ? `Password reset can be sent to ${email.value.trim()} when a backend is connected.`
    : "Enter your email address first to reset your password.";
});
document.querySelector("#signupLink").addEventListener("click", (event) => {
  event.preventDefault();
  status.classList.remove("error");
  status.textContent = "Connect your registration page to enable sign up.";
});
document.querySelectorAll(".social").forEach((button) => {
  button.addEventListener("click", () => {
    status.classList.remove("error");
    status.textContent = "Social sign-in requires OAuth provider configuration.";
  });
});
