const btnModoOscuro = document.getElementById('btn-modo-oscuro');

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnModoOscuro.textContent = '☀️';
    } else {
        btnModoOscuro.textContent = '🌙';
    }
});