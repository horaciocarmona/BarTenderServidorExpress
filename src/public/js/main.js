const socket=io()
const carga = document.getElementById('carga');
// let mensajeAltaProductoPorServidor=""
if (carga) {
carga.addEventListener("click", (event)=>{
    const producto={title:document.getElementById('title').value,
    description:document.getElementById('description').value,
    price:parseFloat(document.getElementById('price').value),
    thumpbnail:document.getElementById('thumpbnail').value,   
    stock:parseInt(document.getElementById('stock').value),
    code:document.getElementById('code').value,
    status:document.getElementById('status').value,
    category:document.getElementById('category').value,                 
    }
    console.log("vengo a dar de alta un producto")
    socket.emit('creacion',producto)
    document.getElementById('title').value="",
    document.getElementById('description').value="",
    document.getElementById('price').value="",
    document.getElementById('thumpbnail').value="",   
    document.getElementById('stock').value="",
    document.getElementById('code').value="",
    document.getElementById('status').value="",
    document.getElementById('category').value=""                 

})
}
const eliminacion = document.getElementById('eliminacion');
if (eliminacion){
eliminacion.addEventListener("click", (event)=>{
    console.log(`vengo a eliminar un producto id ${document.getElementById('idProducto').value}`)
    socket.emit('eliminacion',parseInt(document.getElementById('idProducto').value))
    document.getElementById('idProducto').value=""
});
}
socket.emit('mensaje',"hola me estoy conectando")
//socket.emit('eliminacion',"hola estoy eliminando el producto id")

socket.on('evento-admin',datos=>{console.log(datos)
})

socket.on('evento-general',datos=>{
//    console.log(mensajeAltaProductoPorServidor)
    console.log(datos)
    Toastify({
        text: datos,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    //    document.getElementById('mensajeServidor').value=datos                 
})

