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
console.log("Esto funciona");

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



