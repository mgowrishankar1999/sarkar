import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nodehudaida.uthsoftware.com/api/v1/', // Set your base URL
  // You can also add default headers, interceptors, etc.
});


export {instance}