import axios from 'axios';

const api = axios.create({
  //dev
  baseURL: 'https://api.dev.deixanoazul.com.br/deixa-no-azul-api/public/api'

  // prod
  // baseURL: 'https://api.app.deixanoazul.com.br/deixa-no-azul-api/public/api'
});

export default api;
