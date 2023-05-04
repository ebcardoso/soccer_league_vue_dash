import axios from 'axios';

export const datasource = axios.create({
  baseURL: 'http://localhost:8000'
});

export const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem('access_token')
  }
};