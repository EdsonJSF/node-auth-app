const { response } = require("express");

const crearUsuario = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Crear usuario",
  });
};

const loginUsuario = (req, res) => {
  return res.json({
    ok: true,
    msg: "Login de usuario",
  });
};

const revalidarToken = (req, res) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
