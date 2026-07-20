document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    // अगर यूज़र लॉगिन है
    if (localStorage.getItem("user")) {

        if (loginBtn) loginBtn.style.display = "none";
        if (registerBtn) registerBtn.style.display = "none";

    } else {

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

    }

});
