document.addEventListener('DOMContentLoaded', () => {
    const carrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    const btnLimpiarCarrito = document.getElementById('limpiar-carrito');
    let carritoData = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        carrito.innerHTML = '';
        const ol = document.createElement('ol');
        carritoData.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `${producto.nombre} - Precio: $${producto.precio}`;
            ol.appendChild(li); 
        });
        carrito.appendChild(ol);
        calcularTotal();
    }

    // Función para calcular el total del carrito

    function calcularTotal() {
        let totalCarrito = 0;
        carritoData.forEach(producto => {
            totalCarrito += producto.precio;
        });
        total.textContent = totalCarrito.toFixed(2);
    }

    // Evento para limpiar el carrito

    btnLimpiarCarrito.addEventListener('click', () => {
        carritoData = [];
        localStorage.removeItem('carrito'); // 
        mostrarCarrito(); 
    });

    // Mostrar el carrito al cargar la página
    
    mostrarCarrito();
});

