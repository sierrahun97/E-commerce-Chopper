import { userController } from "./userController.js"; // Asegúrate de tener el import correcto

const btnRegister = document.getElementById('btn-register');
const btnLogin = document.getElementById('btn-login');

// Función para obtener los usuarios del localStorage
function getUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Función para guardar los usuarios en el localStorage
function saveUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Registro de usuario
btnRegister.addEventListener('click', function (event) {
    event.preventDefault();

    const userName = document.querySelector('#user-name').value;
    const userEmail = document.querySelector('#user-email').value;
    const userPhone = document.querySelector('#user-phone').value;
    const userPassword = document.querySelector('#user-password').value;

    if (!userName || !userEmail || !userPhone || !userPassword) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const users = getUsersFromLocalStorage();

    // Verifica si el usuario ya existe
    const userExists = users.find(u => u.userEmail === userEmail);
    if (userExists) {
        alert('El usuario ya está registrado.');
        return;
    }

    // Encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(userPassword, 10); // Encriptar con un "salt" de 10

    // Crea el nuevo usuario con la contraseña encriptada
    const newUser = {
        userName,
        userEmail,
        userPhone,
        userPassword: hashedPassword // Guardar la contraseña encriptada
    };

    // Agrega el nuevo usuario y guarda en localStorage
    users.push(newUser);
    saveUsersToLocalStorage(users);

    alert('¡Usuario registrado correctamente!');
});

// Inicio de sesión
btnLogin.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const users = getUsersFromLocalStorage();
    const user = users.find(u => u.userEmail === email);

    if (user) {
        // Comparar la contraseña ingresada con la contraseña encriptada
        const isMatch = bcrypt.compareSync(password, user.userPassword);
        if (isMatch) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = '../home.html';  // Asegúrate de que la ruta sea correcta
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});


// Inicio de sesión
btnLogin.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const users = getUsersFromLocalStorage();
    const user = users.find(u => u.userEmail === email && u.userPassword === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '../home.html';  // Asegúrate de que la ruta sea correcta
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});


