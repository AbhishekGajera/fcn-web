import api, { refreshTokenApi } from './axios';

// user apis
export const registration = (data) => api('auth/register', 'POST', data);
export const googleRegistration = (data) => api('auth/google', 'POST', data);
export const linkedinRegistration = (data) => api('auth/linkedin', 'POST', data);
export const login = (data) => api('auth/login', 'POST', data);
export const googleLoginHandler = (data) => api('auth/googleLogin', 'POST', data);
export const UserforgotPasswod = (data) => api('auth/forgot-password', 'POST', data);
export const ResetUserPasswod = (data) => api('auth/forgot-password', 'POST', data);
export const CreateUser = (data) => api('users', 'POST', data);
export const updateProfile = (data,id) => api(`users/${id}`, 'PATCH', data);
export const userLogout = (data,id) => api(`auth/logout`, 'POST', data);
export const getUsers = (limit = 100,offset = 1) => api(`users?limit=${limit}&page=${offset}&role=user`, 'GET');
export const refreshTokens = (data) => refreshTokenApi(`auth/refresh-tokens`, 'POST', data);
export const getEmployee = (limit = 100,offset = 1) => api(`employee/getLeaves?limit=${limit}&page=${offset}`, 'GET');
export const deleteEmployee = (id) => api(`employee/delete-leave?leave_id=${id}`, 'DELETE');


// export const employee = (data) => api(`employee/approve-leave`, 'POST', data);


// branch management
export const getBranches = (limit = 100,offset = 1) => api(`users?limit=${limit}&page=${offset}&role=branch`, 'GET');