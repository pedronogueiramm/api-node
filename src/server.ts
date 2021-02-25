import { app } from "./app";

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
// #focopraticagrupo