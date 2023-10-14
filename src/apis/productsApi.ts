import axios from 'axios';

const productsApi = axios.create({
  baseURL: process.env.apiUrl,
});

export default productsApi;
