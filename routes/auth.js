const { Router } = require("express");

const router = Router();

/* Login de usuario */
router.post("/", (req, res) => {
  return res.json({
    ok: true,
    msg: "Login de usuario",
  });
});

/* Crear un nuevo usuario */
router.post("/new", (req, res) => {
  return res.json({
    ok: true,
    msg: "Crear usuario",
  });
});

/* Validar token */
router.get("/renew", (req, res) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
});

module.exports = router;
