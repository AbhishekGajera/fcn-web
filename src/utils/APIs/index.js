import api from './axios';

// user apis
export const registration = (data) => api('auth/register', 'POST', data);
export const login = (data) => api('auth/login', 'POST', data);
export const UserforgotPasswod = (data) => api('auth/forgot-password', 'POST', data);
export const ResetUserPasswod = (data) => api('auth/forgot-password', 'POST', data);