// 1. IMPORTAÇÕES
const express = require("express");
const cors = require("cors");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// 2. CONFIGURAÇÃO DO LOWDB
// FileSync lê e escreve no arquivo db.json de forma síncrona
const adapter = new FileSync("db.json");
const db = low(adapter);

// Define estrutura padrão caso o arquivo esteja vazio
db.defaults({ users: [] }).write();

// 3. CRIA A APLICAÇÃO
const app = express();

// 4. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 5. ROTA DE TESTE
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// 6. ROTA DE LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validação: campos vazios ou injeção
  if (!username || !password || username.includes(";") || password.includes(";")) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  // Busca o usuário no db.json via lowdb
  const user = db.get("users").find({ username, password }).value();

  if (!user) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }

  return res.status(200).json({
    message: "Login bem-sucedido",
    username: user.username,
  });
});

// 7. INICIA SERVIDOR
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});