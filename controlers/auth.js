const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

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
    const token = await generarJWT(dbUser._id, name, mail);

    // Crear usuario DB
    await dbUser.save();

    // Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      msg: "Usuario creado exitosamente",
      token,
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

const loginUsuario = async (req, res = response) => {
  const { mail, pass } = req.body;

  try {
    // Verificar el mail
    const dbUser = await Usuario.findOne({ mail });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "Credencial mail no valida",
      });
    }

    // Confirmar el pass
    const validPass = bcrypt.compareSync(pass, dbUser.pass);
    if (!validPass) {
      return res.status(400).json({
        ok: false,
        msg: "Credencial pass no valida",
      });
    }

    // Generar JWT
    const token = await generarJWT(dbUser._id, dbUser.name, dbUser.mail);

    // Generar respuesta exitosa
    return res.json({
      ok: true,
      msg: "Usuario logeado exitosamente",
      token,
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
      msg: "Error al hacer login",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { id, name, mail} = req;

  const token = await generarJWT(id, name, mail);

  return res.json({
    ok: true,
    msg: "Token valido",
    token,
    data: {
      id,
      name,
      mail,
    },
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
