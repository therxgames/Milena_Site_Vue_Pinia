import axios from 'axios'
import { getEnvVar } from './getEnvVar'

export const axiosInstance = axios.create({
  baseURL: getEnvVar('VITE_API_URL'),
  headers: {
    apikey: getEnvVar('VITE_SUPABASE_KEY'),
  },
})
