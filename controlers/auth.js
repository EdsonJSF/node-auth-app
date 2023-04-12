const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const crearUsuario = async (req, res = response) => {
  const { name, mail, pass } = req.body;

  try {
    // Verificar el mail
    const usuario = await Usuario.findOne({ mail });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Correo electronico existente",
      });
    }

    // Crear usuario con el modelo
    const dbUser = new Usuario(req.body);

    // Hashear pass
    const salt = bcrypt.genSaltSync();
    dbUser.pass = bcrypt.hashSync(pass, salt);

    // Generar JWT

    // Crear usuario DB
    await dbUser.save();

    // Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      msg: "Usuario creado exitosamente",
      data: {
        id: dbUser._id,
        mail: dbUser.mail,
        name: dbUser.name,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error al crear usuario",
    });
  }
};

const loginUsuario = (req, res = response) => {
  const { mail, pass } = req.body;

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
