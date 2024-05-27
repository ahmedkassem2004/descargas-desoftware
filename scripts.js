// scripts.js

function toggleContactForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.style.display = contactForm.style.display === 'flex' ? 'none' : 'flex';
}

function showRegisterForm() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.register-form').classList.remove('hidden');
}

function showLoginForm() {
    document.querySelector('.register-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
}

function registerAccount() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Aquí podrías agregar la lógica para registrar la cuenta (enviar los datos al servidor, etc.)
    console.log('Registrando cuenta:', { name, email, password });

    // Cerrar modal
    closeRegisterModal();
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.remove('hidden');
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.add('hidden');
}

document.querySelector('.register-form button').addEventListener('click', registerAccount);
document.querySelector('.login-section a[href="#"]').addEventListener('click', showRegisterModal);
document.querySelector('.close').addEventListener('click', closeRegisterModal);
