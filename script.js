document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah refresh halaman

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validasi sederhana untuk keperluan demo
    if (username === 'Wildan' && password === '40093') {
        errorMessage.style.display = 'none';
        window.location.href = 'main.html'; // Mengarahkan ke URL Instagram
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
