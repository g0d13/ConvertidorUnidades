const express = require("express");
const ConvertirdorUnidades = require("../lib/Convertidor");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "lib" });
});

app.get("/:cantidad/:unidad", (req, res) => {
  const convertidor = new ConvertirdorUnidades(
    req.params.cantidad,
    req.params.unidad
  );

  res.json({
    value: convertidor.convertir(),
  });
});

app.listen(3000, () => {
  console.log("Corriendo");
});
