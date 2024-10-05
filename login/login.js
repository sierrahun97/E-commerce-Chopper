import { userController } from "./userController.js";

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//Obtener los valores del form


const btnRegister = document.getElementById('btn-register')
btnRegister.addEventListener('click', function (event) {
  event.preventDefault();

  const userName = document.querySelector('#user-name').value;
  const userEmail = document.querySelector('#user-email').value;
  const userPhone = document.querySelector('#user-phone').value;
  const userPassword = document.querySelector('#user-password').value;

  console.log("Si funciona")
  console.log(userName, userEmail, userPassword, userPhone)
  
  if (!userName || !userEmail || !userPhone || !userPassword) {
    alert('Por favor, completa todos los campos.');
  } else {
    userController.addUser(userName, userEmail, userPhone, userPassword);
    alert('¡Usuario registrado correctamente!');
  }
})

