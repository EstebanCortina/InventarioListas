class Inventario {
  constructor() {
    this.lista = [];
    this.aux;
    this.deleted;

  }
  addProduct(producto) {
    //El producto se agrega de manera ascendente por codigo
    if (this.lista.length > 0) {
      this.lista.push(producto);
      for (let i = this.lista.length - 2; i >= 0; i--) {
        console.log(this.lista.length);
        if (producto.Codigo <= this.lista[i].Codigo) {
          console.log(producto.Codigo + 'menor que ' + this.lista[i].Codigo);
          this.aux = this.lista[i];
          this.lista[i] = producto;
          this.lista[i + 1] = this.aux;
        } else {
          console.log(producto.Codigo + 'mayor que ' + this.lista[i].Codigo);
        }
      }
      return true;
    } else {
      console.log('length 0');
      this.lista.push(producto);
      return true;
    }
  }

  listado(i) {
    return this.lista[i];
  }

  buscar(codigoUser) {
    this.derecha = this.lista.length - 1;
    this.izquierda = 0;
    while (this.izquierda <= this.derecha) {
      this.media = Math.trunc((this.izquierda + this.derecha) / 2);
      if (this.lista[this.media].Codigo == codigoUser) {
        return this.lista[this.media];
      } else if (this.lista[this.media].Codigo > codigoUser) {
        this.derecha = this.media - 1;
      } else {
        this.izquierda = this.media + 1;
      }
    }
    return null;
  }

  eliminar(codigoUser) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].Codigo == codigoUser) {
        //Saber que producto se eliminara//
        this.deleted = this.lista[i];
        this.aux = this.lista[this.lista.length - 1];
        this.lista[i] = this.aux;
        this.lista[this.lista.length - 1] = this.deleted;
        return this.lista.pop();
      }
    }
    return null;
  }
  /*
  insertar(codigoUser, posicion) {
    if (codigoUser) {
      for (let i = 0; i < this.lista.length; i++) {
        if (this.lista[i].Codigo == codigoUser) {
          this.aux = this.lista[posicion];
          this.lista[posicion] = this.lista[i];
          this.lista[i] = this.aux;
          return true;
        }
      }
      return false;
    }else{
      return null;
    }
  }
  */

}