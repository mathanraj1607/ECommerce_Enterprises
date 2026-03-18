import axios from 'axios';

// Configure in Vite via .env: VITE_API_URL=http://localhost:8081
// Falls back to localhost for local development.
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export const list_of_product = () => axios.get(`${API_BASE_URL}/products`);