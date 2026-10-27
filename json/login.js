let adminEmail = "admin@icloud.com";
let adminPassword = "Admin@123";
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

const login = (event) => {
  event.preventDefault();
  if (emailInput.value == adminEmail && passwordInput.value == adminPassword) {
    localStorage.setItem("hasLogged", "true");
    alert("Login Success");
    window.location.href = "./admin.html";
  } else {
    alert("Invalid Login");
  }
};
