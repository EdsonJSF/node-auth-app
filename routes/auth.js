const { Router } = require("express");
const { crearUsuario, loginUsuario, revalidarToken } = require("../controlers/auth");

const router = Router();

/* Login de usuario */
router.post("/", loginUsuario);

/* Crear un nuevo usuario */
router.post("/new", crearUsuario);

/* Validar token */
router.get("/renew", revalidarToken);

module.exports = router;
