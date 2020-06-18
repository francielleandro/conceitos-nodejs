//aplicação construida para o segundo desafio do bootcamp GoStack 
// franciel leandro <francielleandro@gmail.com>

const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//lista todos os repositorios
app.get("/repositories", (request, response) => {

  response.json(repositories);
});

//cria um novo repositorio
app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title:title,
    url:url,
    techs:techs,
    likes:0
  }

  repositories.push(repository);

  return response.json(repository);

});

//atualiza um repositorio especifico 
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex(repository => repository.id == id);

  if(repoIndex < 0){
      return response.status(400).json({
          error:'Repository not found.'
      })
  }

  repositories[repoIndex].title = title?title:repositories[repoIndex].title;
  repositories[repoIndex].url = url?url:repositories[repoIndex].url;
  repositories[repoIndex].techs = techs?techs:repositories[repoIndex].techs;

  return response.json(repositories[repoIndex]);

});

//deleta repositorio especifico 
app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id == id);

  if(repoIndex < 0){
      return response.status(400).json({
          error:'Repository not found.'
      })
  }
  repositories.splice(repoIndex,1);

  return response.status(204).json();

});

//adiciona like
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id == id);

  if(repoIndex < 0){
      return response.status(400).json({
          error:'Repository not found.'
      })
  }
  const repository = repositories[repoIndex];

  repository.likes +=1;

  return response.json(repositories[repoIndex]);

});

module.exports = app;
