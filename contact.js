// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los formularios en la página
    const forms = document.querySelectorAll('form');

    // Función de validación para el nombre
    function validateName(name) {
        const nameRegex = /^[A-Za-z\s]+$/; // Solo permite letras y espacios
        return nameRegex.test(name); // Retorna true si el nombre es válido
    }

    // Función de validación para el email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Comprueba que el email sea válido
        return emailRegex.test(email); // Retorna true si el email es válido
    }

    // Función para manejar el envío de formularios
    function handleSubmit(event, form) {
        // Obtiene los valores de los campos del formulario
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;

        // Verifica que todos los campos estén llenos
        if (!name || !email || !message) {
            alert('Todos los campos son obligatorios.'); // Muestra una alerta si algún campo está vacío
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Valida el nombre
        if (!validateName(name)) {
            alert('El nombre no puede contener números y solo debe incluir letras.'); // Alerta si el nombre no es válido
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Valida el email
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un email válido que contenga @.'); // Alerta si el email no es válido
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Si todas las validaciones pasan, envía el formulario
        form.submit(); // Envía el formulario si es válido
    }

    // Agrega un evento de envío a cada formulario
    forms.forEach(form => {
        form.addEventListener('submit', (event) => handleSubmit(event, form)); // Asocia la función handleSubmit al evento submit
    });

    // Borrar campos al recargar la página
    window.addEventListener('beforeunload', () => {
        forms.forEach(form => form.reset()); // Resetea cada formulario cuando se recarga la página
    });
});

// Código específico para el formulario "Contáctanos"
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario específico por su ID
    const contactForm = document.getElementById('contactForm');

    // Reutiliza la función de validación para el nombre
    function validateName(name) {
        const nameRegex = /^[A-Za-z\s]+$/; // Solo permite letras y espacios
        return nameRegex.test(name); // Retorna true si el nombre es válido
    }

    // Reutiliza la función de validación para el email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Comprueba que el email sea válido
        return emailRegex.test(email); // Retorna true si el email es válido
    }

    // Función para manejar el envío del formulario
    function handleSubmit(event) {
        // Obtiene los valores de los campos del formulario
        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;

        // Verifica que todos los campos estén llenos
        if (!name || !email || !message) {
            alert('Todos los campos son obligatorios.'); // Muestra una alerta si algún campo está vacío
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Valida el nombre
        if (!validateName(name)) {
            alert('El nombre no puede contener números y solo debe incluir letras.'); // Alerta si el nombre no es válido
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Valida el email
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un email válido que contenga @.'); // Alerta si el email no es válido
            event.preventDefault(); // Previene el envío del formulario
            return; // Termina la función
        }

        // Si todas las validaciones pasan, envía el formulario
        contactForm.submit(); // Envía el formulario si es válido
    }

    // Agregar evento de envío al formulario
    contactForm.addEventListener('submit', handleSubmit); // Asocia la función handleSubmit al evento submit

    // Borrar campos al recargar la página
    window.addEventListener('beforeunload', () => {
        contactForm.reset(); // Resetea el formulario "Contáctanos" al recargar la página
    });
});
