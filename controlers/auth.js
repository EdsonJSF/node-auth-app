const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { name, mail, pass } = req.body;
  console.log(name, mail, pass);

  return res.json({
    ok: true,
    msg: "Crear usuario",
  });
};

const loginUsuario = (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { mail, pass } = req.body;
  console.log(mail, pass);

  return res.json({
    ok: true,
    msg: "Login de usuario",
  });
};

const revalidarToken = (req, res = response) => {
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
