const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
