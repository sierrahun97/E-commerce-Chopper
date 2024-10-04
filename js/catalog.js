import { itemsController } from './itemsController.js';

console.log(itemsController.items);

 function showProducts() {
    const productsSection = document.querySelector(".catalog-products");
    productsSection.innerHTML = '';
    let storedItems = JSON.parse(localStorage.getItem("listaproductos"));
    console.log(storedItems);
    storedItems.forEach(item => {
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