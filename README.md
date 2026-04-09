# Portal de Autenticação — Prova Prática

Aplicação web fullstack com sistema de login, validação de segurança e dashboard dinâmico pós-autenticação.

---

## Sobre o Projeto

Projeto desenvolvido como prova prática da disciplina de programação web. O sistema implementa um fluxo completo de autenticação: formulário de login no frontend, validação no backend via API REST, e manipulação dinâmica do DOM após o sucesso do login.

---

## Estrutura de Pastas

```
projeto/
├── backend/
│   ├── server.js       # Servidor Express com rota de autenticação
│   └── package.json
├── frontend/
│   ├── index.html      # Interface de login e dashboard
│   ├── styles.css      # Estilização da aplicação
│   └── script.js       # Lógica de fetch e manipulação do DOM
└── README.md
```

---

## Tecnologias Utilizadas

| Camada   | Tecnologia              |
| -------- | ----------------------- |
| Backend  | Node.js + Express       |
| CORS     | cors (middleware)       |
| Frontend | HTML5, CSS3, JavaScript |
| HTTP     | Fetch API               |
| Testes   | Postman                 |

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Terminal (CMD, PowerShell ou integrado ao VS Code)

### 1. Instalar dependências

```bash
cd backend
npm install
```

### 2. Iniciar o servidor

```bash
node server.js
```

O terminal deve exibir:

```
Servidor rodando em http://localhost:3000
```

### 3. Abrir o frontend

Abra o arquivo `frontend/index.html` diretamente no navegador.

---

## Endpoints da API

### `POST /login`

Autentica um usuário com base em `username` e `password`.

**Body (JSON):**

```json
{
  "username": "admin",
  "password": "123"
}
```

**Respostas possíveis:**

| Status | Situação                                      |
| ------ | --------------------------------------------- |
| `200`  | Login bem-sucedido — retorna dados do usuário |
| `400`  | Dados inválidos (vazios ou com `;`)           |
| `401`  | Credenciais incorretas                        |

**Exemplo de resposta 200:**

```json
{
  "message": "Login bem-sucedido",
  "username": "admin"
}
```

---

## Segurança Implementada

- **Campos obrigatórios:** entradas vazias são bloqueadas com erro 400
- **Proteção contra SQL Injection simulada:** strings contendo `;` são rejeitadas
- **CORS habilitado:** permite comunicação segura entre frontend e backend locais

---

## Credenciais de Teste

| Usuário | Senha |
| ------- | ----- |
| admin   | 123   |

---

## Funcionalidades

- [x] Servidor Node.js com Express
- [x] Rota `POST /login` com validação completa
- [x] Retorno correto de status HTTP (200, 400, 401)
- [x] Frontend com formulário de login
- [x] Integração via Fetch API
- [x] Dashboard dinâmico pós-login (manipulação do DOM)
- [x] Ocultação do formulário após autenticação bem-sucedida

---

## Autor

Desenvolvido como parte da avaliação prática — Professor Maxwell Gomes.
