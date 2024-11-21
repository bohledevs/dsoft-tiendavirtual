// Array para almacenar los productos del carrito
const cart = [];

// Función para agregar producto al carrito
function addToCart(productName, price) {
    let found = false;
    for (let item of cart) {
        if (item.name === productName) {
            item.quantity++;
            found = true;
            break;
        }
    }

    if (!found) {
        cart.push({ name: productName, price: parseFloat(price), quantity: 1 });
    }

    updateCart();
}

// Función para actualizar el carrito en pantalla
function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartContainer.innerHTML = ''; // Limpiar el contenido actual

    let total = 0;
    let totalItems = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        totalItems += item.quantity;

        // Crear un contenedor para el producto
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <span>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</span>
            <button class="decrease-button" data-index="${index}">-</button>
            <button class="increase-button" data-index="${index}">+</button>
        `;
        cartContainer.appendChild(productElement);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = `(${totalItems})`;

    // Eventos para incrementar y disminuir cantidad
    const increaseButtons = document.querySelectorAll('.increase-button');
    const decreaseButtons = document.querySelectorAll('.decrease-button');

    increaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            cart[index].quantity++;
            updateCart();
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                if (confirm(`¿Deseas eliminar ${cart[index].name} del carrito?`)) {
                    cart.splice(index, 1); // Eliminar si la cantidad llega a 0
                }
            }
            updateCart();
        });
    });
}

// Función para vaciar el carrito
function clearCart() {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        cart.length = 0; // Vaciar el array
        updateCart();
    }
}

// Agregar eventos a los botones de compra
const buyButtons = document.querySelectorAll('.buy-button');
for (let button of buyButtons) {
    button.addEventListener('click', function () {
        const productInfo = this.parentElement;
        const name = productInfo.querySelector('h4').textContent;
        const price = productInfo.querySelector('p').textContent.replace('Precio: $', '').replace('.', '').replace(',', '.');

        addToCart(name, price);
    });
}

// Agregar evento al botón "Vaciar Carrito"
document.getElementById('clear-cart-button').addEventListener('click', clearCart);
