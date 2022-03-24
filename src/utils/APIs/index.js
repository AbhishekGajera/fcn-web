import api from './axios';

// user apis
export const registration = (data) => api('auth/register', 'POST', data);
export const googleRegistration = (data) => api('auth/google', 'POST', data);
export const linkedinRegistration = (data) => api('auth/linkedin', 'POST', data);
export const login = (data) => api('auth/login', 'POST', data);
export const googleLogin = (data) => api('auth/googleLogin', 'POST', data);
export const UserforgotPasswod = (data) => api('auth/forgot-password', 'POST', data);
export const ResetUserPasswod = (data) => api('auth/forgot-password', 'POST', data);
export const updateProfile = (data,id) => api(`users/${id}`, 'PATCH', data);
export const userLogout = (data,id) => api(`auth/logout`, 'POST', data);