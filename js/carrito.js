const carrito = [];
const carritoIcono = document.querySelector('.carrito-icono');
const carritoContador = document.querySelector('.carrito-contador');
const carritoDropdown = document.querySelector('.carrito-dropdown');
const carritoItems = document.querySelector('.carrito-items');
const carritoTotal = document.querySelector('.carrito-total');
const vaciarBtn = document.getElementById('vaciar-carrito');

carritoIcono.addEventListener('click', () => {
    carritoDropdown.classList.toggle('hidden');
});

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const nombre = btn.dataset.name;
        const precio = parseFloat(btn.dataset.price);
        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    carritoItems.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoItems.appendChild(li);
        total += item.precio;
    });
    carritoContador.textContent = carrito.length;
    carritoTotal.textContent = total;
}

vaciarBtn.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
});