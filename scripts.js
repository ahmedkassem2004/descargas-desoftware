function toggleContactForm() {
    const form = document.querySelector('.contact-form');
    form.classList.toggle('hidden');
}

function showRegisterForm() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.register-form').classList.remove('hidden');
}

function showLoginForm() {
    document.querySelector('.register-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
}
