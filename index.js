const express = require("express");

/* Crear el servidor/aplicación de express */
const app = express();

/* GET */
app.get("/", (req, res) => {
  console.log("Peticion en el /");
  res.status(200).json({
    ok: true,
    msg: "Todo Bien",
    uid: 1234,
  });
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto ${3000}`);
});
