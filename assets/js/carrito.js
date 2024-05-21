let carrito = [];
const divisa = '€';
//const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(id) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(id);
    // Actualizamos el carrito
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
    // efecto 
    //tenemos que identificar cada boton el id 
    const button = document.querySelector('.iden-' + id)
    console.log(button);
    button.classList.add('sendtocart');
    const newCartTotal = document.getElementById('numProductos').innerHTML = carrito.length;

    setTimeout(function () {
        button.classList.add('sendtocart');
        cart.classList.add('shake');
        cart.setAttribute('data-totalitems', newCartTotal);

        setTimeout(function () {
            button.classList.remove('sendtocart');
        }, 500)
    }, 1000)
    animacionCompra(button);
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        // div marco para imagen de producto
        const miMarco = document.createElement('div');
        miMarco.classList.add('carrito-marco');
        const miImagen = document.createElement('img');
        miImagen.src = `assets/img/${miItem[0].imagen}`;
        miMarco.appendChild(miImagen);
        console.log(miMarco);
        miNodo.appendChild(miMarco);
        // Contenido del producto 
        //Sustituye a miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // que hace que los appenchild anteriores no se vean.
        const contenidoProducto = document.createTextNode(`${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`);
        miNodo.appendChild(contenidoProducto);
        //miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.setAttribute("onClick", `borrarItemCarrito(${miItem[0].id})`);
        // Mezclamos nodos

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
    document.getElementById('numProductos').innerHTML = carrito.length;
    cart.setAttribute('data-totalitems', carrito.length);
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(id) {
    // Obtenemos el producto ID que hay en el boton pulsado
    //const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();

}

function verCarrito() {
    document.getElementById('carritoVentana').showModal();
}




function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

//para generar el efecto de movimiento
function animacionCompra(button){
    const cart = document.querySelector('.cart');
    const cartRect = cart.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Crear el elemento animado
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    document.body.appendChild(cartItem);

    // Establecer la posición inicial del elemento animado
    cartItem.style.position = 'absolute';
    cartItem.style.top = `${buttonRect.top}px`;
    cartItem.style.left = `${buttonRect.left}px`;
    //cartItem.style.left = (buttonRect.left - 20) + `px`;
    cartItem.style.height = '24px';
    cartItem.style.width = '24px';
    cartItem.style.background = '#2bd156';
    cartItem.style.borderRadius = '50%';
    cartItem.style.zIndex = '1000';

    // Animar el elemento hacia el carrito
    cartItem.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px)` }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(1.000, 0.440, 0.840, 0.165)',
        fill: 'forwards'
    });

    // Eliminar el elemento después de la animación
    setTimeout(() => {
        cartItem.remove();
        // Incrementar el contador del carrito
        let totalItems = parseInt(cart.getAttribute('data-totalitems')) + 1;
        cart.setAttribute('data-totalitems', totalItems);
        cart.classList.add('shake');
        setTimeout(() => {
            cart.classList.remove('shake');
        }, 400);
    }, 1000);

}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderizarCarrito()
