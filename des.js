document.querySelectorAll('.software-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f0f0f0';
        item.style.transition = 'background-color 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#fff';
        item.style.transition = 'background-color 0.3s ease';
    });

    item.addEventListener('click', () => {
        const downloadButton = document.getElementById('downloadButton');
        const programName = item.querySelector('h3').textContent;
        const programLink = item.querySelector('a').href;

        downloadButton.textContent = `Descargar ${programName}`;
        downloadButton.href = programLink;
        downloadButton.classList.remove('hidden');
    });
});
