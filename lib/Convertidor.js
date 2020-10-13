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

// Exportamos la clase
// Para nodejs
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = ConvertirdorUnidades;
} else {
  // Para poder usarlo con `import`
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return ConvertirdorUnidades;
    });
    // para poder usarlo en el navegador
  } else {
    window["ConvertirdorUnidades"] = ConvertirdorUnidades;
  }
}
