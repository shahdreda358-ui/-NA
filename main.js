const password = document.getElementById("password");
const enterBtn = document.getElementById("enterBtn");
const message = document.getElementById("message");

enterBtn.addEventListener("click", function () {

    if (password.value === "Love 2021") {

        // Password is correct
        window.location.href = "love.html";

    } else {

        // Password is wrong
        message.textContent = "Wrong password ❤️ Try again";

        password.value = "";
        password.focus();
    }

}); 

