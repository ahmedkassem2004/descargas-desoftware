document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', event => {
            const link = event.target.closest('a');
            if (link) {
                link.click();
            }
        });
    });
});

function toggleContactForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.classList.toggle('hidden');
}

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
}

document.getElementById('authForm').addEventListener('submit', event => {
    event.preventDefault();
    // Aquí puedes añadir el código para procesar el formulario de autenticación
    alert('Formulario enviado');
});
