import 'reflect-metadata';
import express, { json } from 'express';
import "./database";
import {router} from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is running!"));

/**** <METODOS HTTP>
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

 // http://localhost:3333/users
 //app.get("/", (request, response) =>{
  //   return response.json({message: "Hello World"});
 //})


 // 1 parametro => rota(recurso API)
 // 2 parametro => request, response
 //app.post("/", (request, response) => {
     //Recebeu os dados para salvar
  //   return response.json({message: "Os dados foram salvos com sucesso"});
 //})



// #rumoaoproximonivel
// #jornadainfinita
