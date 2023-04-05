const { response } = require("express");

const crearUsuario = (req, res = response) => {
  const { name, mail, pass } = req.body;
  console.log(name, mail, pass);

  return res.json({
    ok: true,
    msg: "Crear usuario",
  });
};

const loginUsuario = (req, res) => {
  const { mail, pass } = req.body;
  console.log(mail, pass);

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
