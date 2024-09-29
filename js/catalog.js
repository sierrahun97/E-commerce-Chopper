const {itemsControllers} = require('./itemsController.js');





itemsControllers.addItem('hills1', 15000, 'hill.com', 'comida para perro', 'Perros');;
itemsControllers.addItem('hills2', 15000, 'hill2.com', 'comida para perro', 'Perros');
itemsControllers.addItem('hills3', 15000, 'hill3.com', 'comida para perro', 'Perros');
itemsControllers.addItem('hills4', 15000, 'hill4.com', 'comida para perro', 'Perros');
itemsControllers.addItem('hills5', 15000, 'hill1.com', 'comida para perro', 'Perros');

console.log(items.items);

 function showProducts() {
    const productsSection = document.querySelector(".catalog-products");
    productsSection.innerHTML = '';
    items.items.forEach(item => {
        productsSection.innerHTML += `
            <div class="item-catalog">
                <div class="img-product">
                    <img src="${item.url}" alt="image-product">
                </div>
                <div class="info-product">
                    <h5>${item.name}</h5>
                    <p id="product-price">$${item.price}</p>
                    <p>${item.description}</p>
                    <p>${item.category}</p>
                    <button class="add-to-cart">Añadir</button>
                </div>
            </div>`;
    })
}
document.addEventListener("DOMContentLoaded", function() {
    showProducts();
}); 