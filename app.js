// app.js

// Backend URL
const BASE_URL = "http://localhost:8081/api";

// ======= SIGNUP FUNCTION =======
function signupUser(userData) {
    fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(response => response.text()) // backend returns plain text
    .then(data => {
        console.log("Signup response:", data);
        alert(data);
    })
    .catch(error => {
        console.error("Signup error:", error);
        alert("Signup failed. Check console.");
    });
}

// Signup form submit event
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        signupUser(userData);
    });
}

// ======= LOGIN FUNCTION =======
function loginUser(userData) {
    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(response => response.text())
    .then(data => {
        console.log("Login response:", data);
        if (data === "Login successful!") {
            alert(data);
            // optionally save user info
            localStorage.setItem("userEmail", userData.email);
        } else {
            alert(data);
        }
    })
    .catch(error => {
        console.error("Login error:", error);
        alert("Login failed. Check console.");
    });
}

// Login form submit event
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const userData = {
            email: document.getElementById("loginEmail").value,
            password: document.getElementById("loginPassword").value
        };

        loginUser(userData);
    });
}
