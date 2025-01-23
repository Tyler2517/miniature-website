// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Proxy will handle this
});

export const processPayment = async (sourceId: string, amount: number) => {
  return api.post('/process_payment/', {
    source_id: sourceId,
    amount,
  });
};