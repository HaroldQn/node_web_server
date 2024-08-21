const { envs } = require("./config/env");
const {iniciarServidor} = require('./server/server')

const main = () => {
  iniciarServidor({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
};
// Funcion Agnóstica autoconvocada (IIFE), autoconvocada por los ()
// (() =>{})

(async () => {
  main();
})();
