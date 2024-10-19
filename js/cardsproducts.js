const cardContainer = document.querySelector('.card-container');
const leftButton = document.querySelector('.card-carousel-btn.left');
const rightButton = document.querySelector('.card-carousel-btn.right');
const cards = document.querySelectorAll('.card-product-subscription');
let currentIndex = 0;

function updateCarousel() {
    const cardWidth = cards[0].clientWidth;
    cardContainer.style.transform = `translateX(-${currentIndex * (cardWidth + 30)}px)`;
}

rightButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
    if (currentIndex >= cards.length - 5) {
        rightButton.disabled = true;
    }
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
    rightButton.disabled = false; // Activa el botón derecho si no estamos en el último grupo
});

updateCarousel();



