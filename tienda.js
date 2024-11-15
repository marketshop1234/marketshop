let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;

    // Actualizar la cantidad del carrito
    document.getElementById("cantidadCarrito").innerText = carrito.length;
}

function verCarrito() {
    const modal = document.getElementById("carritoModal");
    const listaCarrito = document.getElementById("listaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    totalCarrito.innerText = total;
    modal.style.display = "flex";
}

function cerrarCarrito() {
    const modal = document.getElementById("carritoModal");
    modal.style.display = "none";
}