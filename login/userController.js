class UsersController {
    constructor(currentUserId = 0) {
        const storedUserId = localStorage.getItem('currentUserId');
        this.currentUserId = storedUserId ? parseInt(storedUserId) : currentUserId; 
        this.users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    }

    addUser(userName, userEmail, userPhone, userPassword) {
        // Encriptar la contraseña antes de guardar
        bcrypt.hash(userPassword, 10, (err, hash) => {
            if (err) {
                console.error('Error en la encriptación:', err);
                return;
            }

            const user = {
                id: this.currentUserId++,
                userName: userName,
                userEmail: userEmail,
                userPhone: userPhone,
                userPassword: hash, // Guardamos la contraseña encriptada
            };
            this.users.push(user);

            localStorage.setItem('currentUserId', this.currentUserId);
            localStorage.setItem('registeredUsers', JSON.stringify(this.users));
            console.log('Usuario registrado:', user);
        });
    }
}

// Exportar una instancia de UsersController
export const userController = new UsersController();







