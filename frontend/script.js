document.getElementById('login-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  // 1. CAPTURA o que o usuário digitou
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 2. REFERÊNCIAS aos elementos que vamos manipular
  const result = document.getElementById('result');
  const loginContainer = document.getElementById('login-container');
  const dashboard = document.getElementById('dashboard');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');

  // 3. ENVIA a requisição pro backend
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    // 4. CONVERTE a resposta em JSON
    const data = await response.json();

    // 5. VERIFICA o status da resposta
    if (response.ok) {
      // SUCESSO: esconde login, mostra dashboard
      loginContainer.style.display = 'none';
      dashboard.style.display = 'block';
      mensagemSucesso.textContent = `Login bem-sucedido. Bem-vindo(a), ${data.username}!`;

    } else {
      // ERRO: exibe mensagem vinda do servidor
      result.textContent = data.error;
      result.className = 'error';
    }

  } catch (erro) {
    // ERRO DE CONEXÃO: servidor offline ou URL errada
    result.textContent = 'Erro ao conectar com o servidor.';
    result.className = 'error';
  }
});