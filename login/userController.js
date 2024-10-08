class UsersController {
    constructor(currentUserId = 0) {
        const storedUserId = localStorage.getItem('currentUserId');
        this.currentUserId = storedUserId ? parseInt(storedUserId) : currentUserId;
        this.users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    }

    
    addUser(userName, userEmail, userPhone, userPassword) {
        const user = {
            id: this.currentUserId++,
            userName: userName,
            userEmail: userEmail,
            userPhone: userPhone,
            userPassword: userPassword,
            userRole: "CUSTOMER_USER"
        };
        async function hashPassword(userPassword) {
            const encoder = new TextEncoder(); // Codificar la contraseña como bytes
            const data = encoder.encode(userPassword); // Convertir a formato de bytes
            const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Crear el hash
            const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convertir el hash a una matriz de bytes
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); // Convertir a hexadecimal
            return hashHex;
        }
        if (user.userEmail == "admin@chopper.admin.com") user.userRole = "ADMIN";
        this.users.push(user);

        localStorage.setItem('currentUserId', this.currentUserId);
        localStorage.setItem('registeredUsers', JSON.stringify(this.users));
        return user;
    }



}



// Exportar una instancia de UsersController
export const userController = new UsersController();






