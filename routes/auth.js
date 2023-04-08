const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controlers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

/* Login de usuario */
router.post(
  "/",
  [
    check("mail", "El email es obligatorio").isEmail(),
    check("pass", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

/* Crear un nuevo usuario */
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("mail", "El email es obligatorio").isEmail(),
    check("pass", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

/* Validar token */
router.get("/renew", revalidarToken);

module.exports = router;
