import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    register: (data) => api.post('/register', data),
    login: (credentials) => api.post('/login', credentials),
    logout: () => api.post('/logout'),
    getUser: () => api.get('/user'),
    updateProfile: (data) => api.put('/user/profile', data),
};

export const verificationService = {
    sendEmailCode: (email) => api.post('/send-email-verification', { email }),
    verifyEmail: (email, code) => api.post('/verify-email', { email, code }),
    sendPhoneCode: (phone) => api.post('/send-phone-verification', { phone }),
    verifyPhone: (phone, code) => api.post('/verify-phone', { phone, code }),
};

export const servicesService = {
    getAll: () => api.get('/services'),
    getOne: (id) => api.get(`/services/${id}`),
};

export const contactService = {
    send: (data) => api.post('/contact', data),
};

export default api;
