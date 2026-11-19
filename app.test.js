import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
