document.getElementById('signupBtn').addEventListener('click', function() {
    window.location.href = 'signup.html';
});

document.getElementById('nextBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Login successful!');
        // Hier kun je een redirect toevoegen naar een dashboard, bijv.:
        // window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields.');
    }
});