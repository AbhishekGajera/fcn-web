import api from './axios';

export const registration = (data) => api('auth/register', 'POST', data);
export const login = (data) => api('auth/login', 'POST', data);
