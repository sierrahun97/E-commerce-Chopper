class UsersController {
    constructor(currentUserId = 0) {
        const storedUserId = localStorage.getItem('currentUserId');
        this.currentUserId = storedUserId ? parseInt(storedUserId) : currentUserId;
        this.users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    }

    encodePassword(userPassword) {
        let encodedPassword = '';
        const shift = 3; // Número que defines para cambiar la posición de cada carácter (puede ser cualquier valor)

        for (let i = 0; i < userPassword.length; i++) {
            const charCode = userPassword.charCodeAt(i); // Obtener el código ASCII del carácter
            const newCharCode = charCode + shift; // Cambiar la posición sumando un valor al código ASCII
            encodedPassword += String.fromCharCode(newCharCode); // Convertir el nuevo código ASCII de vuelta a carácter
        }

        return encodedPassword;
    }
    addUser(userName, userEmail, userPhone, userPassword) {
        const encodedPassword = this.encodePassword(userPassword);
        const user = {
            id: this.currentUserId++,
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: encodedPassword,
            userRole: "CUSTOMER_USER"
        };
        
        if (user.userEmail == "admin@chopper.admin.com") user.userRole = "ADMIN";
        this.users.push(user);

        localStorage.setItem('currentUserId', this.currentUserId);
        localStorage.setItem('registeredUsers', JSON.stringify(this.users));
        return user;
    }



}



// Exportar una instancia de UsersController
export const userController = new UsersController();







