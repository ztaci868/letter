// main form
const userForm = document.getElementById("userForm");
if (userForm) {
  userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("user").value.toLowerCase();
    const password = document.getElementById("password").value;

    const messageContainer = document.getElementById("successMessageContainer");

    const validUser = "mrp2267";
    const validPass = "officially20!";

    if (username === validUser && password === validPass) {
      messageContainer.textContent = "Login successful! Redirecting...";
      messageContainer.style.color = "green";

      setTimeout(() => {
        window.location.href = "./info/info.html";
      }, 1000);
    } else {
      messageContainer.textContent = "Invalid username or password.";
      messageContainer.style.color = "red";
    }
  });
}

// info form
const verifyForm = document.getElementById("verifyForm");
if (verifyForm) {
  verifyForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value.trim().toLowerCase();
    const lastName = document.getElementById("lastName").value.trim().toLowerCase();
    const birthday = document.getElementById("birthday").value;
    const age = document.getElementById("age").value.trim();
    const messageContainer = document.getElementById("successMessageContainer");

    const validFirst = "miya";
    const validLast = "phillion";
    const validBirthday = "2006-04-20";
    const validAge = "20";

    if (
      firstName === validFirst &&
      lastName === validLast &&
      birthday === validBirthday &&
      age === validAge
    ) {
      messageContainer.textContent = "Identity verified! Redirecting...";
      messageContainer.style.color = "green";

      setTimeout(() => {
        window.location.href = "../success/success.html";
      }, 1000);
    } else {
      messageContainer.textContent = "Verification failed. Please check your details.";
      messageContainer.style.color = "red";
    }
  });
}
