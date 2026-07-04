function toggleModoOscuro() {
    document.body.classList.toggle('oscuro');

    const boton = document.getElementById('toggleModo');
    if (document.body.classList.contains('oscuro')) {
        boton.textContent = '☀️';
        localStorage.setItem('modo', 'oscuro');
    } else {
        boton.textContent = '🌙';
        localStorage.setItem('modo', 'claro');
    }
}

// Recordar preferencia al cargar la página
const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
    document.body.classList.add('oscuro');
    document.getElementById('toggleModo').textContent = '☀️';
}