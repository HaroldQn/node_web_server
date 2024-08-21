import { envs } from "./config/env.js";
import { iniciarServidor } from "./server/server.js";

const main = () => {
  iniciarServidor({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};
// Funcion Agnóstica autoconvocada (IIFE), autoconvocada por los ()
// (() =>{})

(async () => {
  main();
})();
