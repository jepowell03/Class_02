import { getUsers, addUser, getCurrentUser, setCurrentUser, clearCurrentUser } from "./mockDb.js";

// --- REGISTER LOGIC ---
const registerForm = document.querySelector('form[action="/register"]');
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const firstName = document.querySelector("#firstName").value.trim();
        const lastName = document.querySelector("#lastName").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();
        const confirm = document.querySelector("#confirm").value.trim();

        if (!firstName || !lastName || !email || !password || !confirm) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        const users = getUsers();
        const exists = users.some(u => u.email === email);
        if (exists) {
            alert("Email is already registered.");
            return;
        }

        addUser({ firstName, lastName, email, password });
        alert("Registration successful! Redirecting to login...");
        window.location.href = "login.html";
    });
}

// --- LOGIN LOGIC ---
const loginForm = document.querySelector('form[action="/login"]');
console.log(loginForm);
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        const users = getUsers();
        const user = users.find((u) => u.email === email && u.password === password);
        console.log(users);

        if (!user) {
             alert("Invalid email or password.");
            return;
        }

        setCurrentUser(user);
        alert("Login successful! Redirecting to homepage...");
        window.location.href = "../App/index2.html";
    });
}
