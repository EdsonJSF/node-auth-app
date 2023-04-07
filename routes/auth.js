const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controlers/auth");

const router = Router();

/* Login de usuario */
router.post(
  "/",
  [
    check("mail", "El email es obligatorio").isEmail(),
    check("pass", "El password es obligatorio").isLength({ min: 6 }),
  ],
  loginUsuario
);

/* Crear un nuevo usuario */
router.post("/new", crearUsuario);

/* Validar token */
router.get("/renew", revalidarToken);

module.exports = router;
