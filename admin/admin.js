import { itemsController } from '../js/itemsController.js';

// Función para mostrar productos en la página
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
                    <h5>${item.nombre_producto}</h5>
                    <p>${item.categoria_producto}</p>
                    <p>${item.descripcion_producto}</p>
                    <p id="product-price">$${item.precio}</p>
                    <button class="add-to-cart">Añadir</button>
                </div>
            </div>`;
    });
}

// Función para cargar productos desde localStorage
function loadProducts() {
    let storedItems = JSON.parse(localStorage.getItem("listaproductos")) || [];
    
    if (!Array.isArray(storedItems)) {
        console.warn("Restableciendo 'listaproductos' a un arreglo vacío.");
        storedItems = [];
        localStorage.setItem("listaproductos", JSON.stringify(storedItems));
    }
    
    itemsController.items = storedItems;
    showProducts();
}

// Función para enviar productos y guardarlos en localStorage
function sendProducts(producto) {
    let lista = JSON.parse(localStorage.getItem("listaproductos")) || [];

    if (!Array.isArray(lista)) {
        console.warn("Restableciendo 'listaproductos' a un arreglo vacío.");
        lista = [];
    }

    lista.push(producto);

    localStorage.setItem("listaproductos", JSON.stringify(lista));
    loadProducts();


    document.getElementById('productForm').reset();
}

// Evento para cargar los productos cuando la página se carga
document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
});


// Evento para cargar los productos cuando la página se carga
document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
});

// Evento para manejar el envío del formulario y crear un nuevo producto
document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();

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
    };

//     // Validación simple
//     if (!productName || !category || !price || !image || !description) {
//         alert('Por favor, completa todos los campos.');
//         return;
//     } else {
//         try {
//             let response = await fetch('http://localhost:8080/producto/crear', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(producto)
//             });

//             if (response.ok) {
//                 alert('Producto agregado correctamente!');
//                 itemsController.addItem(productName, price, image, description, category);
//                 sendProducts(producto); 
//             } else {
//                 alert('Error al crear el producto');
//             }
//         } catch (error) {
//             console.error("Error al realizar la operación:", error);
//         }
//     }
// });

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