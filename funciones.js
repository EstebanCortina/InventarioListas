function mostrarLista() {
  if (this.primero == null) {
    return false;
  } else {
    let temp = this.primero;
    let aux = '';
    while (temp.next != null) {
      aux += temp;
      temp = temp.next;
    }
    temp.next = nuevoP;
  }
}
function mostrarInverso() {
  for (let i = inventario.lista.length - 1; i >= 0; i--) {
    console.log(inventario.listado(i))
    divShow.innerHTML += JSON.stringify(inventario.listado(i)) + '<br>';
  }

}