import api, { refreshTokenApi, multipartApi } from './axios';

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
export const deleteUsr = (id) => api(`users/${id}`, 'DELETE');
export const userLogout = (data,id) => api(`auth/logout`, 'POST', data);
export const getUsers = (limit = 10,offset = 1,name = '',role='user',branch='',IBO='') => api(`users?limit=${limit}&page=${offset}&role=${role}&sortBy=asc&name=${name}&custom=true&branch=${branch}&IBO=${IBO}`, 'GET');
export const refreshTokens = (data) => refreshTokenApi(`auth/refresh-tokens`, 'POST', data);

// employee management
export const getEmployeeLeaves = (limit = 10,offset = 1) => api(`employee/getLeaves?limit=${limit}&page=${offset}&sortBy=createdAt:desc`, 'GET');
export const deleteEmployeeLeave = (id) => api(`employee/delete-leave/${id}`, 'DELETE');
export const getAllEmployee = (limit = 1000,offset = 1) => api(`users?limit=${limit}&page=${offset}&role=employee`, 'GET');
export const updateEmployeeLeave = (data) => api(`employee/update-leave`, 'POST',data);
export const approveEmployee = (data) => api(`employee/approve-leave`, 'POST', data);


// branch management
export const getBranches = (limit = 10,offset = 1,name = '') => api(`users?limit=${limit}&page=${offset}&role=branch&name=${name}`, 'GET');

// IBO management
export const getIBOs = (limit = 10,offset = 1,name = '',branch = '') => api(`users?limit=${limit}&page=${offset}&role=IBO&name=${name}&custom=true&branch=${branch}`, 'GET');


// Cost management
export const addCost = (data) => multipartApi(`cost/add-cost`, 'POST', data);
export const getCostList = (limit = 10,offset = 1,category = '',type = '',user = '') => api(`cost/fetch-cost?limit=${limit}&sortBy=createdAt:desc&page=${offset}&category=${category}&type=${type}&user=${user}`, 'GET');
export const deleteCost = (id) => api(`cost/delete-cost/${id}`, 'GET');

// Product management
export const CreateProduct = (data) => multipartApi(`product`, 'POST', data);
export const getProductsList = (limit = 10,offset = 1,name = '') => api(`product?limit=${limit}&sortBy=createdAt:desc&page=${offset}&name=${name}&custom=true`, 'GET');
export const deleteProductById = (id) => api(`product/${id}`, 'GET');
