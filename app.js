const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'cicd-demo' });
});

app.get('/info', (req, res) => {
  res.status(200).json({
    service: 'cicd-demo',
    pipeline: 'github-actions',
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = app;
