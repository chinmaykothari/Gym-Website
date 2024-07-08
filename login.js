const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const errorDiv = document.getElementById('error');

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    errorDiv.textContent = "";

    // Validate username and password
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username.trim() === "") {
        showError("Username is required");
        return;
    }

    if (password.trim() === "") {
        showError("Password is required");
        return;
    }

    // If both fields are filled, proceed with form submission or other actions
    // For now, redirect to the homepage
    window.location.href = "Homepage.html";
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.color = "white";
}

showWelcome = function() {
    const name = localStorage.getItem('Username');
    if (name) {
        document.getElementById('displayName').textContent = name;
    }
};