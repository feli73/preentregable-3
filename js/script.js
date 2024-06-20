





// mayor o menor de edad

/*

let edadIngresada = prompt("Ingrese su edad ")

function mayorMenor(edad) {

    for (let i = 1; i <= edad; i++) {
        if(i >= 18){
            console.log("Usted tiene " + i + " años, es mayor de edad");

        }else if(i < 18 && i > 0){
            console.log("Usted tiene " + i + " años, es menor de edad");
        }
}
}



mayorMenor(edadIngresada);   */

// carrito
/*
const products = [
    {id:1 , name: "heladera",  price: 829500},
    {id:2 , name: "bicicleta",  price: 300000},
    {id:3 , name: "televisor",  price: 200000},
    {id:4 , name: "cocina",  price: 300000},
    {id:5 , name: "wafflera",  price: 40000},
    {id:6 , name: "equipo de audio",  price: 80000 },
    {id:7 , name: "lavarropas",  price: 300000},
    {id:8 , name: "computadora",  price: 500000}

];


// copiado 


let cart = loadCartFromLocalStorage();

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Producto no encontrado");
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            totalPrice: quantity * product.price
        });
    }

    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});


*/









/*
let carrito = loadCartFromLocalStorage();

// muevo

function addToCart(productoId, cantidad) {
    const producto = productos.find(p => p.id === productoid);
    if (!producto) {
        console.error("El producto no existe");
        return;
    }

    const cartItem = cart.find(item => itemm.id === productoId);

    if(cartItem) {
        cartItem.cantidad += cantidad;
        cartItem.subTotal = cartItem.cantidad  * cartItem.precio;
    } else {
        cart.push(
            {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad,
                subTotal: cantidad * producto.precio

            }
        )
    }


    saveCartToLocalStorage();
    rendercart();

}

function renderProducts() {
    const productoList = document.getElementById("producto-list");
    productoList.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <p>${producto.nombre} - ${producto.precio} .-</p>
            <button onClick="addToCart{$(producto.id}, 1)"> Agrega al Carrito </button>
        `;

        productoList.appendChild(productoDiv);
    })
}

function renderCart() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    cart.forEach(item => {
        const carritoItemDiv = document.createElement('div');
        carritoItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.nombre}, Cantidad: ${item.cantidad}, Precio Total: $${item.subTotal}</p>
        `;
        carritoDiv.appendChild(carritoItemDiv);
    });

}


function saveCartToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function loadCarritoFromLocalStorage() {
    const carritoData = localStorage.getItem('carrito');
    return carritoData ? JSON.parse(carritoData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});
*/





// anterior

/*
let seleccion = prompt("Bienvenido, desea comprar algun producto? si o no")

while(seleccion != "si" && seleccion != "no") {
    alert ("Ingrese si o no");
    seleccion = prompt ("Desea comprar algo? si o no");

}

if(seleccion == "si") {
    alert("le mostraremos la lista de productos")
    let totalDeProductos = productos.map( (producto) => producto.nombre + " " + producto.precio + "$");
   alert(totalDeProductos.join(" , "))
} else if (seleccion == "no") {
    alert("Gracias por su visita")

}

while(seleccion != "no") {
    let producto = prompt("agregar producto a tu carrito")
    let precio = 0;

    if (producto == "heladera" || producto == "bicicleta" || producto == "televisor" || producto == "cocina" || producto == "wafflera" || producto == "equipo de audio" || producto == "lavarropas" || producto == "computadora") {
        switch (producto) {
            case "heladera":
            precio = 829500;
            break;
            case "bicicleta":
            precio = 300000;
            break;
            case "televisor":
            precio = 200000;
            break;
            case "cocina":
            precio = 300000;
            break;
            case "wafflera":
            precio = 40000;
            break;
            case "equipo de audio":
            precio = 80000;
            break;
            case "lavarropas":
            precio = 300000;
            break;
            case "computadora":
            precio = 500000;
            break;
            default:
            break;
        } 
        let unidades = parseInt(prompt("cuantas unidades quiere?"));

        carrito.push({producto, unidades, precio})
        console.log(carrito)
        } else {
            alert("no tenemos ese producto");
        }

        seleccion = prompt("Quiere continuar su compra?");

        while(seleccion === "no") {
            alert("Gracias por su compra");
            carrito.forEach((carritoTotal) => {
                console.log(`producto:  ${carritoTotal.producto}, unidades:  ${carritoTotal.unidades}, total a pagar por producto  ${carritoTotal.unidades * carritoTotal.precio}`)
    
            }  )
            break;
        }
    
        }

        const total = carrito.reduce((ecc ,el) => ecc + el.precio * el.unidades, 0);
        console.log(`el total de su compra es: ${total}`);
    

        // color body

        const colorCuerpo = document.body;

        colorCuerpo.style.backgroundColor = "#eee";


        */


        