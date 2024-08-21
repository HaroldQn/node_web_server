import express from 'express'
import path from 'path'

export const iniciarServidor = (options) => {
  const { port, public_path = "public"} = options;
  
  const app = express();
  
  //Para poder usar middelwares en express usar use
  app.use(express.static(public_path)); // conteniedo estatico que ponemos disponible

  app.get('*', (req, res)=>{
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
    res.sendFile(indexPath);
  })

  app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
  })
};
