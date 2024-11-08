import { userController } from "./userController.js";

const btnRegister = document.getElementById('btn-register');
const btnLogin = document.getElementById('btn-login');

function getUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function showAlert(message, type = 'error', duration = 3000) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.classList.remove('hidden');

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, duration);
}

btnRegister.addEventListener('click', async function (event) {
    event.preventDefault();

    const userName = document.querySelector('#user-name').value;
    const userEmail = document.querySelector('#user-email').value;
    const userPhone = document.querySelector('#user-phone').value;
    const userPassword = document.querySelector('#user-password').value;

    if (!userName || !userEmail || !userPhone || !userPassword) {
        showAlert('Por favor, completa todos los campos.', 'error');
        return;
    } else {
        const users = getUsersFromLocalStorage();
        const userExists = users.find(u => u.userEmail === userEmail);
        if (userExists) {
            showAlert('El usuario ya está registrado.', 'error');
            return;
        }

        const newUser = userController.addUser(userName, userEmail, userPhone, userPassword);
        users.push(newUser);

        const cliente = {
            nombre_cliente: newUser.userName,
            email: newUser.userEmail,
            contrasena: newUser.userPassword,
            telefono: newUser.userPhone,
            rol: newUser.userRole,
            is_vip: false
        }

        try {
            let responseWaited = await fetch('http://localhost:8080/cliente/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            }).then(response => {
                console.log(response);
                if (response.ok) {
                    localStorage.setItem('users', JSON.stringify(users));
            
                    showAlert('¡Usuario registrado correctamente!', 'success');
                }else {
                    showAlert('El usuario ya está registrado.', 'error');
                }
            });
            
        } catch (error) {
            console.error("Error al realizar la operación:", error);
        }


        document.querySelector('#user-name').value = '';
        document.querySelector('#user-email').value = '';
        document.querySelector('#user-phone').value = '';
        document.querySelector('#user-password').value = '';
    }
});

btnLogin.addEventListener('click', async function (event) {
    event.preventDefault();

    const emailIngresado = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    // const users = getUsersFromLocalStorage();

    try {
        let response = await fetch('http://localhost:8080/cliente/buscar/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ email: emailIngresado })
        });
    
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
    
        let user = await response.json();
        let decodedPassword = '';
        const shift = 3;
    
        for (let i = 0; i < password.length; i++) {
            const charCode = password.charCodeAt(i);
            const newCharCode = charCode + shift;
            decodedPassword += String.fromCharCode(newCharCode);
        }
    
        if (decodedPassword == user.contrasena) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            localStorage.setItem('welcomeMessage', '¡Bienvenido a chopper!');
            window.location.href = '../pages/home.html';
        } else {
            showAlert('Correo electronico o contraseña incorrectos.', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
    }


    document.querySelector('#login-email').value = '';
    document.querySelector('#login-password').value = '';
});

window.addEventListener('beforeunload', function() {
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-email').value = '';
    document.querySelector('#user-phone').value = '';
    document.querySelector('#user-password').value = '';
    document.querySelector('#login-email').value = '';
    document.querySelector('#login-password').value = '';
});

