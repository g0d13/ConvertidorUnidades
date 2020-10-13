const readline = require("readline");
const ConvertirdorUnidades = require("../lib/Convertidor");

// La interface para leer y escribir a la consola con Node
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pregunta = "Como usar\nNumero a unidad\n";

// Pregunta y respuesta
rl.question(pregunta, (resp) => {
  let [cantidad, unidad] = resp.split(" ");

  const convertidor = new ConvertirdorUnidades(cantidad, unidad);

  console.log(convertidor.convertir());
  rl.close();
});
