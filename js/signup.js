document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (username && password && confirmPassword) {
        if (password === confirmPassword) {
            alert('Signup successful!');
            // Hier kun je een redirect toevoegen naar een dashboard, bijv.:
            // window.location.href = 'dashboard.html';
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});