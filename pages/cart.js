// Función para abrir el modal
const openModal = () => {
    const modal = document.getElementById("cart-modal");
    modal.classList.add("show");
    displayCartItems();
};

const closeModal = () => {
    const modal = document.getElementById("cart-modal");
    modal.classList.remove("show");
};

const displayCartItems = () => {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; 

    // Recuperar los productos del localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cartItems.forEach((item, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-item");
        productElement.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.url}" alt="${item.name}" class="cart-item-image">
                <div>
                    <h3>${item.name}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                    <button class="btn-remove" data-index="${index}">Eliminar</button>
                    <button class="btn-add" data-index="${index}">Agregar</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(productElement);
        total += item.price * item.quantity; 
    });

  
    document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;

 
    document.querySelectorAll(".btn-remove").forEach(button => {
        button.addEventListener('click', (e) => removeFromCart(e.target.dataset.index));
    });

    document.querySelectorAll(".btn-add").forEach(button => {
        button.addEventListener('click', (e) => addToCartFromModal(e.target.dataset.index));
    });
};


const removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1); // Eliminar si la cantidad es 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Actualizar el modal
    updateCartCount(); // Actualizar el contador del carrito
};

// Función para agregar un producto desde el modal
const addToCartFromModal = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Actualizar el modal
    updateCartCount(); // Actualizar el contador del carrito
};

// Función para actualizar el contador de productos en el carrito
const updateCartCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.querySelector('.shopping .quantity');
    cartCountElement.textContent = cart.length;
};

// Evento para el botón de pago
document.getElementById("checkout-btn").onclick = () => {
    alert('Redirigiendo a la página de pago...');
};

// Eventos para abrir y cerrar el modal
document.getElementById("open-cart").onclick = openModal;
document.getElementsByClassName("close")[0].onclick = closeModal;

window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        closeModal();
    }
};
