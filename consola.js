const readline = require("readline");
const ConvertirdorUnidades = require("./lib/Convertidor");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pregunta = "Como usar\nNumero a unidad\n";

rl.question(pregunta, (resp) => {
  let [cantidad, unidad] = resp.split(" ");
  const convertidor = new ConvertirdorUnidades(cantidad, unidad);
  console.log(convertidor.convertir());
  rl.close();
});
