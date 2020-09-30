class ConvertirdorUnidades {
  constructor(cantidad, unidad) {
    this.cantidad = cantidad;
    this.unidad = unidad;
  }

  aMetros() {
    return this.cantidad * 100;
  }

  aCm() {
    return this.cantidad / 100;
  }

  convertir() {
    if (this.unidad === "CM") {
      return this.aMetros();
    } else {
      return this.aCm();
    }
  }

  toString() {
    return `Cantidad ${this.cantidad} unidad ${this.unidad}`;
  }
}

module.exports = ConvertirdorUnidades;
