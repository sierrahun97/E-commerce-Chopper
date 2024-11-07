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

function sendProducts(producto){
    //enviar datos al local storage
    localStorage.setItem("listaproductos", JSON.stringify(producto));
    loadProducts();
    // Limpiar los campos
    document.getElementById('productForm').reset();

}

document.addEventListener("DOMContentLoaded", function() {
    //localStorage.clear();
    loadProducts();
});

document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const codeProduct = document.getElementById('codeProduct').value;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const stockP = document.getElementById('stock').value;
    const discount = document.getElementById('vip-discount').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;

    const producto = {
        codigo_producto: codeProduct,
        nombre_producto: productName,
        categoria_producto: category,
        precio: price,
        stock: stockP,
        descuento_vip: discount,
        descripcion_producto: description,
        url: image,
    }

    // Validación simple (puedes mejorar esta lógica)
    if (!productName || !category || !price || !image || !description) {
        alert('Por favor, completa todos los campos.');
        return;
    }else{
        try {
            let responseGenerated = await fetch('http://localhost:8080/producto/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            }).then(response => {
                console.log(response);
                if (response.ok) {
                    showAlert('Producto registrado correctamente!', 'success');
                    // localStorage.setItem('listaproductos', JSON.stringify(producto))
                    itemsController.addItem(productName, price, image, description, category);
                    sendProducts(producto);
                }else {
                    showAlert('¡Error al registrar nuevo producto!', 'error');
                }
            })
        } catch (error) {
            console.error("Error al realizar la operación:", error);
        }

    }

    itemsController.currentId()
});

function showAlert(message, type = 'error', duration = 3000) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    alertBox.classList.remove('hidden');

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, duration);
}
