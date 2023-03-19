const socket = io()

document.querySelector('#btnNuevoProd').addEventListener('click', ev => {
    const prod = {
        nombre: document.querySelector("#inputNombre").value,
        precio: document.querySelector("#inputPrecio").value
    }
    socket.emit('newProd', prod)
})

socket.on('update', products => {
    const divProd = document.querySelector('#products')
    divProd.innerHTML = listProducts(products)
})

async function listProducts(products){
    return JSON.stringify(products, null, 2)
}

socket.emit('update')