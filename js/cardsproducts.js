const cardContainer = document.querySelector('.card-container');
const leftButton = document.querySelector('.card-carousel-btn.left');
const rightButton = document.querySelector('.card-carousel-btn.right');
const cards = document.querySelectorAll('.card-product-subscription');
let currentIndex = 0;

function getVisibleCardsCount() {
    const containerWidth = cardContainer.clientWidth;
    return containerWidth >= 768 ? 5 : 1; // 5 tarjetas en pantallas grandes, 1 en móviles
}

function updateCarousel() {
    const visibleCardsCount = getVisibleCardsCount();
    const maxIndex = cards.length - visibleCardsCount;

    cardContainer.style.transform = `translateX(-${currentIndex * (cards[0].clientWidth + 30)}px)`;
    rightButton.disabled = currentIndex >= maxIndex; // Deshabilitar si se llega al final
    leftButton.disabled = currentIndex === 0; // Deshabilitar si estamos en el inicio
}

rightButton.addEventListener('click', () => {
    const visibleCardsCount = getVisibleCardsCount();
    const maxIndex = cards.length - visibleCardsCount;

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});


updateCarousel();
window.addEventListener('resize', updateCarousel);
