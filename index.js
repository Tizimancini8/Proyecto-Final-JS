var productos = [
    {
        nombre: "Remera JS",
        precio: 150,
        codigo: "remJS"
    },
    {
        nombre: "Remera C++",
        precio: 150,
        codigo: "remC++"
    },
    {
        nombre: "Remera HTML",
        precio: 200,
        codigo: "remHTML"
    },
]

var carrito = {}

function menuCompras() {
    let seleccion1 = prompt("Seleccione una opcion\n1 - Agregar producto al carrito\n2 - Ver carrito")

    if (seleccion1 == "1") {
        agregarProducto()
    } else if (seleccion1 == "2") {
        verCarrito()
    }
}

function agregarProducto() {
    let text = ""

    for (let i = 0; i < productos.length; i++) {
        text = text + (i+1) + " - " + productos[i].nombre + "\n"
    }

    let seleccion = parseInt(prompt(text)) - 1

    if (seleccion != null && productos[seleccion]) {
        alert("Agregaste "+ productos[seleccion].nombre + " al carrito.")

        if (carrito[seleccion]) {
            carrito[seleccion]++;
        } else {
            carrito[seleccion] = 1
        }
    }

    menuCompras()
}

function verCarrito() {
    if (Object.keys(carrito).length == 0) {
        alert("El carrito esta vacio")
        menuCompras()
    } else {
        let text = ""
        
        for (const id in carrito) {
            const cantidad = carrito[id];

            text = text + cantidad + "x " + productos[id].nombre + "\n"
        }

        text = text + "1 - Realizar pedido\n2 - Vaciar carrito\n3 - Volver"
        let seleccion = prompt(text)
            
        if (seleccion == "1") {
            hacerPedido()
        } else if (seleccion == "2") {
            carrito = {}
            verCarrito()
        } else {
            menuCompras()
        }
    }
}

function hacerPedido() {
    if (Object.keys(carrito).length == 0) {
        alert("El carrito esta vacio")
        menuCompras()
    } else {
        let total = 0
        for (const id in carrito) {
            const cantidad = carrito[id];
            const producto = productos[id];

            total = total + producto.precio * cantidad
        }

        let hacer = confirm("Hacer el pedido por $"+total)

        if (hacer) {
            alert("Realizaste el pedido, contactate con nosotros para realizar el pago")
        } else {
            menuCompras()
        }
    }
    
}