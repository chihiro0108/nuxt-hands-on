import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'  // Rails サーバーの URL
  })
  nuxtApp.provide('axios', axiosInstance)
})
