
// Get the username from localStorage
const username = localStorage.getItem('displayName');

// Check if the username is available in localStorage
if (username) {
    // Display the username on the homepage
    const displayName = document.getElementById('displayName');
    displayName.textContent = username;
} 

