function showAlert(message, type = 'success', duration = 4000) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`; // Ajusta el tipo de alerta
    alertBox.classList.remove('hidden'); // Muestra la alerta

    setTimeout(() => {
        alertBox.classList.add('hidden'); // Oculta la alerta después de un tiempo
    }, duration);
}

document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = localStorage.getItem('welcomeMessage');
    if (welcomeMessage) {
        showAlert(welcomeMessage, 'success', 4000); // Muestra el mensaje de bienvenida
        localStorage.removeItem('welcomeMessage'); // Limpia el mensaje de localStorage
    }
});


