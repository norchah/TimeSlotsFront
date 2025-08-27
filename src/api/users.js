import {apiConfig} from "../config/config.api";
import axios from 'axios';

export default class UsersApi{
  constructor(config) {
    this.client = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    })
  }

  async get_users() {
    return this.client.get('/users');
  }
}