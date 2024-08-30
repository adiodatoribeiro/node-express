const express = require('express')
const RotasPrivadas = require('./rotas/RotasPrivadas');
const RotasPublicas = require('./rotas/RotasPublicas');

const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Olá, eu sou um BackEnd com NodeJS + express")
});

app.use(RotasPublicas);
app.use(RotasPrivadas);

// Passagem de dados para o backend
app.get('/teste/:codigo', (request, response) => {
    //Query
    const query = request.query;
    let dados = "Query:" + query.nome + "-" + query.sobrenome;
    //Params
    const params = request.params;
    dados += "<br > Params:" + params.codigo;
    //Body
    const body = request.body;
    dados += "<br > Body:" + JSON.stringify(body);

    return response.send(dados);
});

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`)
});