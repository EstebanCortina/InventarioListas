class Inventario {
      constructor() {
        this.lista = [];
        this.aux;
        this.deleted;
      }
      addProduct(producto) {
        //El producto se agrega de manera ascendente por codigo

        this.lista.push(producto);
      }
      listado(i) {
        return this.lista[i];
      }
      buscar(codigoUser) {
        for (let i = 0; i < this.lista.length; i++) {
          if (this.lista[i].Codigo == codigoUser) {
            return this.lista[i];
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