import { itemsController } from '../js/itemsController.js';

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

function loadProducts() {
    // Recuperar los datos del localStorage
    let storedItems = localStorage.getItem("listaproductos");
    if (storedItems) {
        itemsController.items = JSON.parse(storedItems);
        // Mostrar los productos en la página
        showProducts();
        console.log(itemsController.items);
    }
    
}

function sendProducts(){
    //enviar datos al local storage
    localStorage.setItem("listaproductos", JSON.stringify(itemsController.items));
    loadProducts();
    // Limpiar los campos
    document.getElementById('productForm').reset();

}

document.addEventListener("DOMContentLoaded", function() {
    //localStorage.clear();
    loadProducts();
});

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    // Validación simple (puedes mejorar esta lógica)
    if (!productName || !category || !price || !image || !description) {
        alert('Por favor, completa todos los campos.');
        return;
    }else{
        alert('Producto agregado correctamente!');
        itemsController.addItem(productName, price, image, description, category);
        sendProducts();
    }

    itemsController.currentId()
});


