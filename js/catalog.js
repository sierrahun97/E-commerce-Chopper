import { itemsController } from './itemsController.js';

console.log(itemsController.items);

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item); 
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.querySelector('.shopping .quantity');
    
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalQuantity;
}

async function showProducts() {
    const productsSection = document.querySelector(".catalog-products");
    productsSection.innerHTML = '';

    let storedItems = [];

    try {
        let responseGenerated = await fetch('http://localhost:8080/producto/traer', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            storedItems = data;
        })
    } catch (error) {
        console.log("Error trayendo los productos");
        
    }
    

    storedItems.forEach(item => {
        productsSection.innerHTML += `
            <div class="item-catalog">
                <div class="img-product">
                    <img src="${item.url}" alt="image-product">
                </div>
                <div class="info-product">
                    <h5>${item.nombre_producto}</h5>
                    <p>${item.categoria_producto}</p>
                    <p>${item.descripcion_producto}</p>
                    <p id="product-price">$${item.precio}</p>
                    <button class="add-to-cart">Añadir</button>
                </div>
            </div>`;
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            addToCart(storedItems[index]); 
        });
    });

    updateCartCount(); 
}

document.addEventListener("DOMContentLoaded", async function() {
    await showProducts();
});
