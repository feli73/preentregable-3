

document.addEventListener('DOMContentLoaded', function() {
    const clickButtons = document.querySelectorAll('.card .btn-primary');
    const tbody = document.querySelector('.tbody');
    const comprarButton = document.getElementById('comprarButton'); 
    let carrito = [];

    // Agregar eventlisteners a todos los botones de Añadir a carrito
    clickButtons.forEach(btn => {
        btn.addEventListener('click', addToCarritoItem);
    });

   
    comprarButton.addEventListener('click', comprarProductos);

    function addToCarritoItem(e) {
        const button = e.target;
        const item = button.closest('.card');

        if (!item) {
            console.error('No se encontró el elemento .card');
            return;
        }

        const itemTitle = item.querySelector('.card-title').textContent;
        const itemPrice = item.querySelector('.precio').textContent;
        const itemImg = item.querySelector('.card-img-top').src;

        const newItem = {
            title: itemTitle,
            precio: itemPrice,
            img: itemImg,
            cantidad: 1
        };

        addItemCarrito(newItem);
    }

    function addItemCarrito(newItem) {
        const InputElemento = tbody.getElementsByClassName('input__elemento');

        // Verificar si el producto ya está en el carrito
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].title.trim() === newItem.title.trim()) {
                carrito[i].cantidad++;
                const inputValue = InputElemento[i];
                inputValue.value++;
                carritoTotal();
                return; 
            }
        }

        // Si el producto no está en el carrito, agregarlo
        carrito.push(newItem);
        renderCarrito();
    }

    function renderCarrito() {
        tbody.innerHTML = '';

        if (carrito.length === 0) {
            
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="4">No hay productos en el carrito</td>`;
            tbody.appendChild(tr);
        } else {
           
            carrito.forEach((item, index) => {
                const tr = document.createElement('tr');
                tr.classList.add('ItemCarrito');

                const content = `
                    <th scope="row">${index + 1}</th>
                    <td class="table__productos">
                        <img src="${item.img}" alt="">
                        <h6>${item.title}</h6>
                    </td>
                    <td class="table__precio"><p>${item.precio}</p></td>
                    <td class="table__cantidad">
                        <input type="number" min="1" value="${item.cantidad}" class="input__elemento">
                        <button class="delete btn btn-danger">x</button>
                    </td>
                `;

                tr.innerHTML = content;
                tbody.appendChild(tr);

                tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
                tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad);
            });
        }

        carritoTotal();
    }

    function carritoTotal() {
        let Total = 0;
        const itemCartTotal = document.querySelector('.itemCartTotal');

        carrito.forEach(item => {
            const precio = Number(item.precio.replace("$", ''));
            Total += precio * item.cantidad;
        });

        itemCartTotal.innerHTML = `Total $${Total}`;
        addLocalStorage();
    }

    function removeItemCarrito(e) {
        const buttonDelete = e.target;
        const tr = buttonDelete.closest(".ItemCarrito");

        if (!tr) {
            console.error('No se encontró el elemento .ItemCarrito');
            return;
        }

        const titleElement = tr.querySelector('h6');

        if (!titleElement) {
            console.error('No se encontró un elemento h6 dentro de .itemCarrito');
            return;
        }

        const title = titleElement.textContent.trim();

        // Eliminar el producto del carrito
        carrito = carrito.filter(item => item.title.trim() !== title);
        tr.remove();
        carritoTotal();
    }

    function sumaCantidad(e) {
        const sumaInput = e.target;
        const tr = sumaInput.closest(".ItemCarrito");

        const titleElement = tr.querySelector('h6');
        const title = titleElement.textContent.trim();

        carrito.forEach(item => {
            if (item.title.trim() === title) {
                item.cantidad = sumaInput.value < 1 ? 1 : sumaInput.value;
                carritoTotal();
            }
        });
    }

    function addLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    window.onload = function() {
        const storage = JSON.parse(localStorage.getItem('carrito'));
        if (storage) {
            carrito = storage;
            renderCarrito();
        }
    };

    function comprarProductos() {
        // Vaciar el array carrito
        carrito = [];

        
        tbody.innerHTML = '';

        // Actualizar el total del carrito 
        carritoTotal();

       
        localStorage.removeItem('carrito');

       
        renderCarrito();


    }

    // Cambiar el color de fondo del body
    const colorCuerpo = document.body;
    colorCuerpo.style.backgroundColor = "#eee";
});
