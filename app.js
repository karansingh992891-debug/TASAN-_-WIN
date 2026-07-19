document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    if (loginBtn) {
        loginBtn.onclick = function () {
            window.location.href = "login.html";
        };
    }

    if (registerBtn) {
        registerBtn.onclick = function () {
            window.location.href = "register.html";
        };
    }

});
