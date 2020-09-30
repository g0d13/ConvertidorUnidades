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

//Export
//Si estamos en nodejs
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = ConvertirdorUnidades;
} else {
  // Si lo importamos
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return ConvertirdorUnidades;
    });
    // De forma global
  } else {
    window["ConvertirdorUnidades"] = ConvertirdorUnidades;
  }
}
