let userInfo = {
  email: "ahmed@icloud.com",
  password: "Admin@123",
};

let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");
let img = document.querySelector("#eyeIcon");
let form = document.querySelector("form");

img.addEventListener("click", () => {
  if (inputPassword.getAttribute("type") == "text") {
    inputPassword.setAttribute("type", "password");
  } else {
    inputPassword.setAttribute("type", "text");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = inputEmail.value;
  let password = inputPassword.value;
  if (email == userInfo.email && password == userInfo.password) {
    window.location.href = "./products.html";
  } else {
    alert("Invalide Email or passowrd");
  }
});
