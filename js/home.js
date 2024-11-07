document.addEventListener('DOMContentLoaded', function (){
  const adminClass = document.querySelector('.admin')
  if (localStorage.getItem("loggedInUser")){
    const userLog = JSON.parse(localStorage.getItem("loggedInUser"));
    const role = userLog.rol;
    console.log (role)
    if (role != 'ADMIN'){
      adminClass.style.display = 'none'
    }
  }else {
    adminClass.style.display = 'none'
  }
})

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
