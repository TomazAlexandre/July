// server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;  // Porta para o Heroku ou localhost

// Permitir o CORS para desenvolvimento local
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do diretório "public"
app.use(express.static(path.join(__dirname, 'public')));

// Dados simulados
const dadosTransporte = require('./dados.json');

// Rota para obter informações de transporte
app.get('/api/transporte', (req, res) => {
    res.json(dadosTransporte);
});

// Rota para buscar ônibus por destino
app.get('/api/transporte/:destino', (req, res) => {
    const destino = req.params.destino;
    const resultado = dadosTransporte.find(item => item.destino.toLowerCase() === destino.toLowerCase());

    if (resultado) {
        res.json(resultado);
    } else {
        res.status(404).json({ message: "Ônibus não encontrado" });
    }
});

// Rota para servir o index.html em qualquer rota não especificada (para SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
