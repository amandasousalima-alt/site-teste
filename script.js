function salvar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    console.log("Nome:", nome);
    console.log("Idade:", idade);

}const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola4'
});
