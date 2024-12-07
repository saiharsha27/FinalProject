// api.js
import axios from 'axios';

// Create axios instance with default config
const API = axios.create({
    baseURL: 'http://174.138.73.221:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Handle specific HTTP errors
            switch (error.response.status) {
                case 401:
                case 403:
                    localStorage.removeItem('token');
                    window.location.href = '/';
                    break;
                case 404:
                    console.error('Resource not found:', error.config.url);
                    break;
                case 500:
                    console.error('Server error:', error.response.data);
                    break;
                default:
                    console.error('API error:', error.response.data);
            }
        } else if (error.request) {
            // Network error
            console.error('Network error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default API;