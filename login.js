// Default admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '1234';

// Login handler
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Set login status in localStorage
        localStorage.setItem('adminLoggedIn', 'true');
        // Redirect to admin panel
        window.location.href = 'admin.html';
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
    
    return false;
}