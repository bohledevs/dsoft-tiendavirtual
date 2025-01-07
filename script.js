// Seleccionar el botón del carrito y el pop-up del carrito
const cartBtn = document.querySelector('.cart-btn');
const cartPopup = document.querySelector('.cart-popup');

// Función para alternar la visibilidad del carrito
cartBtn.addEventListener('click', () => {
    cartPopup.classList.toggle('visible'); // Añade o quita la clase 'visible'
});

// Cerrar el carrito al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (!cartPopup.contains(e.target) && !cartBtn.contains(e.target)) {
        cartPopup.classList.remove('visible'); // Cierra el carrito
    }
});
