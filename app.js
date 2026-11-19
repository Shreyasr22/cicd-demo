const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'cicd-demo' });
});

module.exports = app;