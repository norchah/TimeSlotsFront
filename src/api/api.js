import {apiConfig} from "../config/config.api";
import axios from 'axios';

export default class ApiClient{
  constructor(config) {
    this.client = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    })
  }

  async register(data) {
    const payload = JSON.stringify({'username': data})
    return this.client.post('/auth/register', payload);
  }
  async login(data) {
    const payload = JSON.stringify({'username': data})
    return this.client.post('/auth/login', payload);
  }
  async logout(data) {
    const payload = JSON.stringify({'username': data})
    return this.client.post('/auth/logout', payload);
  }
  async me(data) {
    const payload = JSON.stringify({'username': data})
    return this.client.get('/auth/me');
  }
}