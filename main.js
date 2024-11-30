// Add logout functionality
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Check login status on page load
checkLoginStatus();