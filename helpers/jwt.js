const jwt = require("jsonwebtoken");

const generarJWT = (id, name) => {
  const payload = { id, name };

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "24h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
