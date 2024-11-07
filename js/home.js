// document.addEventListener('DOMContentLoaded', function (){
//   const adminClass = document.querySelector('.admin')
//   if (localStorage.getItem("loggedInUser")){
//     const userLog = JSON.parse(localStorage.getItem("loggedInUser"));
//     const role = userLog.rol;
//     console.log (role)
//     if (role != 'ADMIN'){
//       adminClass.style.display = 'none'
//     }
//   }else {
//     adminClass.style.display = 'none'
//   }
// })
// console.log("Esto funciona");



//  // Mostrar el nombre del usuario en el navbar
// function displayUserInNavbar() {
//   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//   if (loggedInUser) {
//       const userName = loggedInUser.nombre_cliente.split(' ')[0]; // Toma el primer nombre
//       const userMenu = document.getElementById('logged');
//       userMenu.innerText = `
//       ${userName}`

//       // Agregar el evento para el botón de cerrar sesión
//       document.getElementById('logout-btn').addEventListener('click', () => {
//           localStorage.removeItem('loggedInUser');
//           window.location.reload(); 
//       });
//   }
// }

// // Llama a displayUserInNavbar() cuando cargue la página
// document.addEventListener('DOMContentLoaded', function (e){
// e.preventDefault()
// displayUserInNavbar()
// });


// //cerrar sesión

// document.addEventListener('DOMContentLoaded', () => {
//   const userGreeting = document.getElementById('user-greeting');
//   const loginLink = document.getElementById('logged');
//   const dropdownMenu = document.querySelector('.dropdown-menu');

//   // Obtén el nombre del usuario desde localStorage (o tu sistema de autenticación)
//   const username = localStorage.getItem('username');

//   if (username) {
//       // Si hay un usuario autenticado, muestra el nombre y oculta el enlace de "Iniciar sesión"
//       userGreeting.textContent = `Hola, ${username}`;
//       userGreeting.style.display = 'inline';
//       if (loginLink) {
//           loginLink.style.display = 'none';
//       }

//       // Verifica si el botón de "Cerrar sesión" ya existe
//       if (!document.getElementById('logout-btn')) {
//           const logoutBtn = document.createElement('button');
//           logoutBtn.textContent = 'Cerrar sesión';
//           logoutBtn.classList.add('dropdown-item');
//           logoutBtn.id = 'logout-btn';

//           // Inserta el botón de "Cerrar sesión" en el menú desplegable
//           if (dropdownMenu) {
//               dropdownMenu.appendChild(logoutBtn);
//           }

//           // Evento para cerrar sesión
//           logoutBtn.addEventListener('click', () => {
//               localStorage.removeItem('username'); // Limpia la sesión
//               window.location.href = 'home.html'; // Redirige al home
//           });
//       }
//   } else {
//       // Si no hay un usuario autenticado, muestra "Iniciar sesión" y oculta el nombre de usuario
//       userGreeting.style.display = 'none';
//       if (loginLink) {
//           loginLink.style.display = 'inline';
//       }
//   }
// });

////////DE AQUI ARRIBA SE DESCOMENTA/////////////////////


// const track = document.querySelector('.carousel-track');
// const prevButton = document.querySelector('.carousel-btn-prev');
// const nextButton = document.querySelector('.carousel-btn-next');
// let currentSlide = 0;

// function updateCarouselPosition() {
//   const slideWidth = document.querySelector('.carousel-slide').clientWidth;
//   track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }

// nextButton.addEventListener('click', () => {
//   const totalSlides = document.querySelectorAll('.carousel-slide').length;
//   if (currentSlide < totalSlides - 1) {
//     currentSlide++;
//     updateCarouselPosition();
//   }
// });

// prevButton.addEventListener('click', () => {
//   if (currentSlide > 0) {
//     currentSlide--;
//     updateCarouselPosition();
//   }
// });

// window.addEventListener('resize', updateCarouselPosition);



document.addEventListener('DOMContentLoaded', function () {
  // Verificar si el usuario está logueado y si tiene un rol
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const adminClass = document.querySelector('.admin');
  const userGreeting = document.getElementById('user-greeting');
  const loginLink = document.getElementById('logged');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Si hay un usuario logueado
  if (loggedInUser) {
    const role = loggedInUser.rol;
    const userName = loggedInUser.nombre_cliente.split(' ')[0]; // Toma el primer nombre
    // Mostrar u ocultar la opción de admin según el rol
    if (role !== 'ADMIN') {
      adminClass.style.display = 'none';
    }
    else if (!role){
      adminClass.style.display = 'none';
    }
    // Mostrar el nombre del usuario en el navbar
    if (userGreeting) {
      userGreeting.textContent = `Hola, ${userName}.`;
      userGreeting.style.display = 'inline';
    }
    if (loginLink) {
      loginLink.style.display = 'none';
    }
    // Agregar el botón de cerrar sesión si no existe
    if (!document.getElementById('logout-btn') && dropdownMenu) {
      const logoutBtn = document.createElement('button');
      logoutBtn.textContent = 'Cerrar sesión';
      logoutBtn.classList.add('dropdown-item');
      logoutBtn.id = 'logout-btn';
      dropdownMenu.appendChild(logoutBtn);

      // Evento para cerrar sesión
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser'); // Elimina la sesión
        window.location.href = 'home.html'; // Redirige al home
      });
    }
  } else {
    // Si no hay usuario logueado, mostrar "Iniciar sesión"
    if (userGreeting) {
      userGreeting.style.display = 'none';
    }
    if (loginLink) {
      loginLink.style.display = 'inline';
    }
  }

});
