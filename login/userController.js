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
        };
        this.users.push(user);

        localStorage.setItem('currentUserId', this.currentUserId);
        localStorage.setItem('registeredUsers', JSON.stringify(this.users));
    }
}

// Exportar una instancia de UsersController
export const userController = new UsersController();






