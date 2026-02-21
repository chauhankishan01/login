const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.toggle-password');
const loginForm = document.getElementById('loginForm');

// 1. Theme Switcher Logic
toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('theme-glass')) {
        body.classList.remove('theme-glass');
        body.classList.add('theme-cyber');
        toggleBtn.textContent = 'Switch to Glassmorphism';
    } else {
        body.classList.remove('theme-cyber');
        body.classList.add('theme-glass');
        toggleBtn.textContent = 'Switch to Cyber-Dark';
    }
});

// 2. Password Visibility Toggle
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});

// 3. Form Submission Handling
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn');
    const originalContent = btn.innerHTML;
    
    // Simple Loading State UI
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Authenticating...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
        alert('Login Successful! (Demo only)');
        btn.innerHTML = originalContent;
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, 2000);
});