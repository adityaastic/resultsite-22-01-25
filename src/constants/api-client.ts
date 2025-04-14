import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://bgmbackend.com/dashboard",
  // baseURL: "http://127.0.0.1:8000/dashboard",
});

export default apiClient;

export const gameApiClient = axios.create({
  baseURL: "https://bgmbackend.com/club",
  // baseURL: "http://127.0.0.1:8000/club",
});


export const apiClientNode = axios.create({
  // baseURL: "http://127.0.0.1:3500/club",
  baseURL: 'https://bgmbackend.com/nodejs/club'
});