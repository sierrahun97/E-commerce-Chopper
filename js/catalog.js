import { itemsController } from './itemsController.js';

itemsController.addItem('hills1', 15000, 'img/purina.png', 'comida para perro', 'Perros');;
itemsController.addItem('hills2', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills3', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills4', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills5', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills6', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills7', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills8', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills9', 15000, 'img/purina.png', 'comida para perro', 'Perros');
itemsController.addItem('hills10', 15000, 'img/purina.png', 'comida para perro', 'Perros');

console.log(itemsController.items);

 function showProducts() {
    const productsSection = document.querySelector(".catalog-products");
    productsSection.innerHTML = '';
    itemsController.items.forEach(item => {
        productsSection.innerHTML += `
            <div class="item-catalog">
                <div class="img-product">
                    <img src="${item.url}" alt="image-product">
                </div>
                <div class="info-product">
                    <h5>${item.name}</h5>
                    <p>${item.category}</p>
                    <p>${item.description}</p>
                    <p id="product-price">$${item.price}</p>
                    <button class="add-to-cart">Añadir</button>
                </div>
            </div>`;
    })
}
document.addEventListener("DOMContentLoaded", function() {
    showProducts();
}); 