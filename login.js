function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // In a real application, you would validate credentials against a backend
    // For demo purposes, we'll use a simple check
    if (email && password) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to dashboard
        window.location.href = 'home.html';
    }
}

// Check login status on page load
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname;
    
    if (!isLoggedIn && !currentPage.includes('index.html')) {
        window.location.href = 'index.html';
    } else if (isLoggedIn && currentPage.includes('index.html')) {
        window.location.href = 'home.html';
    }
}

// Add this to all pages except login
if (!window.location.pathname.includes('index.html')) {
    checkLoginStatus();
}