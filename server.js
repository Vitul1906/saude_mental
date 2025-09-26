const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Todas as rotas caem aqui (opcional, para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
