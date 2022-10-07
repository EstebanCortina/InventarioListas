function mostrarLista() {
   for (let i = 0; i < inventario.lista.length; i++) {
        console.log(inventario.listado(i))
        divShow.innerHTML += JSON.stringify(inventario.listado(i)) + '<br>';
      }
}
function mostrarInverso() {
   for (let i = inventario.lista.length-1; i >= 0; i--) {
        console.log(inventario.listado(i))
        divShow.innerHTML += JSON.stringify(inventario.listado(i)) + '<br>';
      }
      
}