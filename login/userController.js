class UsersController{
    constructor (currentUserId = 0){
        const storedUserId = localStorage.getItem('currentUserId');
        this.currentUserId = storedUserId ? parseInt(storedUserId) : currentUserId; 
        this.users = [];
    }

    addUser (userName, userPhone, userEmail, userPassword){
        const user = {
            id: this.currentUserId++,
            userName : userName,
            userPhone : userPhone,
            userEmail : userEmail,
            userPassword : userPassword
        }
        this.users.push(user);

        localStorage.setItem('currentUserId', this.currentUserId);

        

        localStorage.setItem('registeredUsers', JSON.stringify(this.users));
    }
}

export const userController = new UsersController();