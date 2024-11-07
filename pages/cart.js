const openModal = () => {
    const modal = document.getElementById("cart-modal");
    modal.classList.add("show");

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        showEmptyCartMessage();
    } else {
        displayCartItems();
    }
};

const showEmptyCartMessage = () => {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    const emptyMessage = document.createElement("div");
    emptyMessage.classList.add("empty-cart-message");
    emptyMessage.innerText = "Tu carrito está vacío. Agrega productos para verlos aquí.";
    cartItemsContainer.appendChild(emptyMessage);

    document.getElementById("cart-total").innerText = "Total: $0";
};

const closeModal = () => {
    const modal = document.getElementById("cart-modal");
    modal.classList.remove("show");
};

const displayCartItems = () => {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cartItems.forEach((item, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("cart-item");
        productElement.innerHTML = `
            <div class="cart-item-content">
                <div class="cart-item-image">
                    <img src="${item.url}" alt="${item.name}">
                </div>
                <div class="product-cart-info">
                    <h3>${item.name}</h3>
                    <p>Precio: $${item.price.toLocaleString()}</p>
                    <p>Cantidad: ${item.quantity}</p>
                    <button class="btn-add" data-index="${index}">Agregar</button>
                    <button class="btn-remove" data-index="${index}">Eliminar</button>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            productElement.classList.add('show-item');
        }, 50);
        
        cartItemsContainer.appendChild(productElement);
        total += item.price * item.quantity;
    });

    document.getElementById("cart-total").innerText = `Total: $${total.toLocaleString()}`;

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
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
};

const addToCartFromModal = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
};

const updateCartCount = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.querySelector('.shopping .quantity');
    let count = 0;
    cart.forEach(item => {
        count += item.quantity;
    });
    cartCountElement.textContent = count;
};

const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex === -1) {
        cart.push(product);
    } else {
        cart[existingProductIndex].quantity++;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    if (document.getElementById("cart-modal").classList.contains("show")) {
        displayCartItems();
    }
};

document.getElementById("checkout-btn").onclick = () => {
    alert('Redirigiendo a la página de pago...');
};

document.getElementById("open-cart").onclick = openModal;

document.getElementsByClassName("close")[0].onclick = closeModal;
window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");
    if (event.target === modal) {
        closeModal();
    }
};

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.card-product-subscription');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('.card-product-price').textContent.replace(/\./g, ''));
        const productImageUrl = productElement.querySelector('img').src;

        const product = {
            name: productName,
            price: productPrice,
            url: productImageUrl,
            quantity: 1
        };

        addToCart(product);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});








