import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('API endpoints', () => {
  it('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /info returns service and pipeline info', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe('cicd-demo');
    expect(res.body.pipeline).toBe('github-actions');
  });
});
