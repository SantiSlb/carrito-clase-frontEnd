document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-lista');
    const contadorCarrito = document.getElementById('contador-carrito');
    let carritoData = JSON.parse(localStorage.getItem('carrito')) || [];

    // Datos de ejemplo de productos (simulados) con precios en euros
    const productos = [
        { id: '1', nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10.99 },
        { id: '2', nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 15.50 },
        { id: '3', nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 5.75 }
    ];

    // URL de la imagen que se utilizará para todos los productos
    const imagenURL = 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5f/latest/20230404205932/Krookodile.png/200px-Krookodile.png';

    // Función para mostrar productos en la página principal
    function mostrarProductos() {
        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <img src="${imagenURL}" class="card-img-top" alt="Imagen del producto">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">${producto.precio.toFixed(2)} EUR</p>
                        <button class="btn btn-primary btn-agregar" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al carrito</button>
                    </div>
                </div>
            `;
            productosContainer.appendChild(card);
        });
    }

    // Evento para agregar producto al carrito
    productosContainer.addEventListener('click', e => {
        if (e.target.classList.contains('btn-agregar')) {
            const producto = {
                id: e.target.getAttribute('data-id'),
                nombre: e.target.getAttribute('data-nombre'),
                precio: parseFloat(e.target.getAttribute('data-precio'))
            };
            agregarProducto(producto);
        }
    });

    // Función para agregar producto al carrito
    function agregarProducto(producto) {
        carritoData.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carritoData)); // Guardar en localStorage
        actualizarContadorCarrito();
        alert('Producto agregado al carrito');
    }

    // Función para actualizar el contador del carrito
    function actualizarContadorCarrito() {
        contadorCarrito.textContent = carritoData.length;
        if (carritoData.length > 0) {
            contadorCarrito.style.display = 'inline-block';
        } else {
            contadorCarrito.style.display = 'none';
        }
    }

    // Inicialización al cargar la página principal
    mostrarProductos();
});
