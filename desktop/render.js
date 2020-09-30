const input1 = document.querySelector("#inputNumero1");
const selectOp = document.querySelector("#selectorUnits");
const btnConvertir = document.querySelector("#btnConvertir");
const resultado = document.querySelector("#resultado");
btnConvertir.addEventListener("click", () => {
  let option = selectOp.selectedIndex;
  let unidad = option == 0 ? "M" : "CM";
  let valor1 = input1.value;
  let conv = new ConvertirdorUnidades(valor1, unidad);
  resultado.innerText = conv.convertir() + unidad;
  return false;
});
