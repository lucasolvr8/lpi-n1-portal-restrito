const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [{ id: 1, username: "admin", password: "123" }];

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    !username ||
    !password ||
    username.includes(";") ||
    password.includes(";")
  ) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  return res.status(200).json({
    message: "Login bem-sucedido",
    username: user.username,
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
