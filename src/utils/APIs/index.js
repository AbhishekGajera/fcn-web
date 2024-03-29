import api, { apiImage, refreshTokenApi, multipartApi } from './axios';

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
export const getusersbyfilter = (email='') => api(`users?custom=true&email=${email}`, 'GET');
export const userLogout = (data,id) => api(`auth/logout`, 'POST', data);
export const getUsers = (limit = 10,offset = 1,name = '',role='user',products='',branch='',IBO='') => api(`users?limit=${limit}&page=${offset}&role=${role}&products=${products}&sortBy=name:asc&name=${name}&custom=true&branch=${branch}&IBO=${IBO}`, 'GET');
export const getUsersList = (limit = 500,offset = 1,role='user') => api(`users?limit=${limit}&page=${offset}&role=${role}&sortBy=asc`, 'GET');
export const getAllUsers = (limit = 500,offset = 1,name='') => api(`users?name=${name}&limit=${limit}&page=${offset}&sortBy=asc&custom=true`, 'GET');
export const getUserById = (id) => api(`users/${id}`, 'GET');

export const refreshTokens = (data) => refreshTokenApi(`auth/refresh-tokens`, 'POST', data);
export const getUsersRecent = (limit = 5,offset = 1,role='user') => api(`users?limit=${limit}&page=${offset}&role=${role}&sortBy=createdAt:desc`, 'GET');

// employee management
export const getEmployeeLeaves = (limit = 10,offset = 1) => api(`employee/getLeaves?limit=${limit}&page=${offset}&sortBy=createdAt:desc`, 'GET');
export const deleteEmployeeLeave = (id) => api(`employee/delete-leave/${id}`, 'DELETE');
export const getAllEmployee = (limit = 1000,offset = 1) => api(`users?limit=${limit}&page=${offset}&role=employee`, 'GET');
export const updateEmployeeLeave = (data) => api(`employee/update-leave`, 'POST',data);
export const approveEmployee = (data) => api(`employee/approve-leave`, 'POST', data);

//lead management
export const CreateLead = (data) => api('leads/add-lead', 'POST', data);
export const updateLead = (data) => api(`leads/update-lead`, 'POST',data);
export const getLeads = (limit = 10,offset = 1,name = '',branch = '') => api(`leads/get-lead?limit=${limit}&page=${offset}&name=${name}&branch=${branch}&sortBy=createdAt:desc&`, 'GET');
export const getLeadsDash = (limit = 10,offset = 1,branch = '') => api(`leads/get-lead?limit=${limit}&page=${offset}&sortBy=createdAt:desc&branch=${branch}`, 'GET');
export const deleteLead = (id) => api(`contact/delete-contact/${id}`, 'DELETE');

// branch management
export const getBranches = (limit = 10,offset = 1,name = '') => api(`users?limit=${limit}&page=${offset}&role=branch&name=${name}&custom=true`, 'GET');
export const getBranchesClient = (limit = 500,offset = 1,name = '') => api(`users?limit=${limit}&page=${offset}&role=branch&name=${name}&custom=true`, 'GET');
export const getUserBranch = (branch = '',products = '',role = 'user') => api(`users/get-user-branch?branch=${branch}&products=${products}&role=${role}`, 'GET');


// IBO management
export const getIBOs = (limit = 10,offset = 1,name = '',branch = '',) => api(`users?limit=${limit}&page=${offset}&role=IBO&name=${name}&custom=true&branch=${branch}`, 'GET');
export const getIBOsClient = (limit = 500,offset = 1,name = '',branch = '') => api(`users?limit=${limit}&page=${offset}&role=IBO&name=${name}&custom=true&branch=${branch}`, 'GET');
export const getUserIbo = (id,products) => api(`users/get-user-ibo/${id}?products=${products}`, 'GET');



// Cost management
export const addCost = (data) => multipartApi(`cost/add-cost`, 'POST', data);
export const getCostList = (limit = 10,offset = 1,category = '',type = '',user = '') => api(`cost/fetch-cost?limit=${limit}&sortBy=createdAt:desc&page=${offset}&category=${category}&type=${type}&user=${user}`, 'GET');
export const deleteCost = (id) => api(`cost/delete-cost/${id}`, 'GET');

// Product management
export const CreateProduct = (data) => multipartApi(`product`, 'POST', data);
export const getProductsList = (limit = 10,offset = 1,name = '') => api(`product?limit=${limit}&sortBy=createdAt:desc&page=${offset}&name=${name}&custom=true`, 'GET');
export const getProductsListClient = (limit = 500,status="1") => api(`product?limit=${limit}&sortBy=createdAt:desc&status=${status}`, 'GET');
export const getProductsByUser = (id) => api(`users/get-product-client/${id}`, 'GET');

export const deleteProductById = (id) => api(`product/${id}`, 'GET');
export const UpdateProducts = (data) => api(`product/update-product`, 'PATCH', data);


//Product Assign management
export const CreateAssignProduct = (data) => api(`users/product-assign`, 'PATCH', data);

// Target management
export const CreateTargets = (data) => api(`target/add-target`, 'POST', data);
export const UpdateTargets = (data) => api(`target/update-target`, 'PATCH', data);
export const getTargetsList = (limit = 10,offset = 1) => api(`target/fetch-target?limit=${limit}&sortBy=createdAt:desc&page=${offset}`, 'GET');
export const getTargetsListByUser = (limit = 10,offset = 1,user = '') => api(`target/fetch-target?limit=${limit}&sortBy=createdAt:desc&page=${offset}&user=${user}`, 'GET');
export const deleteTargetById = (id) => api(`target/delete-target/${id}`, 'GET');

// Appoinment management
export const CreateAppoinments = (data) => api(`appoinments/add-appoinment`, 'POST', data);
export const getAppoinmentsList = (limit = 10,offset = 1) => api(`appoinments/fetch-appoinment?limit=${limit}&sortBy=createdAt:desc&page=${offset}`, 'GET');
export const getAppoinmentsListByUser = (limit = 10,offset = 1,user = '') => api(`appoinments/fetch-appoinment?limit=${limit}&sortBy=createdAt:desc&page=${offset}&user=${user}`, 'GET');
export const deleteAppoinmentById = (id) => api(`appoinments/delete-appoinment/${id}`, 'GET');
export const UpdateAppoinments = (data) => api(`appoinments/update-appoinment`, 'PATCH', data);

// Employee management
export const CreateEmployees = (data) => api(`employee/create-emp`, 'POST', data);
export const getEmployeeList = (limit = 10,offset = 1) => api(`employee/fetch-employee?limit=${limit}&sortBy=createdAt:desc&page=${offset}`, 'GET');
export const getEmployeeByBranch = (id = '',limit = 10,offset = 1) => api(`employee/fetch-employee-by-branch?branch=${id}&limit=${limit}&sortBy=createdAt:desc&page=${offset}`, 'GET');
export const deleteEmployee = (id) => api(`employee/delete-emp/${id}`, 'DELETE');
export const UpdateEmployee = (id,data) => api(`employee/update-emp/${id}`, 'POST', data);

// Revenue management
export const CreateRevenue = (data) => api(`revenue/add-revenue`, 'POST', data);
export const getRevenueList = (limit = 10,offset = 1) => api(`revenue/fetch-revenue?limit=${limit}&sortBy=createdAt:desc&page=${offset}`, 'GET');


// connect management
export const CreateConnect = (data) => api('contact/add-contact', 'POST', data);
export const getConnect = (limit = 10,offset = 1,branch = '',type = '') => api(`contact/fetch-contact?limit=${limit}&page=${offset}&branch=${branch}&type=${type}&sortBy=createdAt:desc`, 'GET');
export const getConnectByBranch = (limit = 10,offset = 1,name = '',branch = '') => api(`contact/fetch-contact?limit=${limit}&page=${offset}&name=${name}&branch=${branch}&sortBy=createdAt:desc`, 'GET');
export const getConnectedById = (id = '') => api(`contact/get-connected-id/${id}`, 'GET');
export const deleteContact = (id) => api(`contact/delete-contact/${id}`, 'DELETE');

//image upload in cloudinary 
export const ImageUpload = (data) => apiImage('POST', data);

// video management
export const addVideo = (data) => api(`video `, 'POST', data);
export const getVideo = (data) => api(`video `, 'GET', data);
export const getVideoFree = (type='free') => api(`video?type=${type} `, 'GET');
export const getVideoPaid = (type='paid') => api(`video?type=${type} `, 'GET');
export const deleteVideo = (id) => api(`video/${id}`, 'GET');

// Passport management
export const addPassport = (data) => api(`passport `, 'POST', data);
export const getPassport = (id) => api(`passport/${id}`, 'GET');
export const getPassports = (limit = 10,offset = 1) => api(`passport?limit=${limit}&offset=${offset}`, 'GET');
export const updatePassport = (id,data) => api(`passport/${id}`,'PATCH',data);
export const deletePassport = (id) => api(`passport/${id}`, 'DELETE');

// visa management
export const addVisa = (data) => api(`visa `, 'POST', data);
export const getVisa = (id) => api(`visa/${id}`, 'GET');
export const getVisas = (limit = 10,offset = 1) => api(`visa?limit=${limit}&offset=${offset}`, 'GET');
export const updateVisa = (id,data) => api(`visa/${id}`,'PATCH',data);
export const deleteVisa = (id) => api(`visa/${id}`, 'DELETE');


//  Transaction Management
export const addTransaction = (data) => api(`transaction/add-transaction `, 'POST', data);
export const getTransaction = (limit = 10,offset = 1,status="0") => api(`transaction/fetch-transaction?limit=${limit}&page=${offset}&status=${status}&sortBy=createdAt:desc `, 'GET');
export const getTransactionBranch = (status="0",id,role='branch') => api(`transaction/get-transaction-branch?to_user=${id}&status=${status}&role=${role}&sortBy=createdAt:desc `, 'GET');
export const getTransactionUsr = (id,status="0") => api(`transaction/get-transaction-user/${id}?status=${status}&sortBy=createdAt:desc `, 'GET');
export const getTransactionUsrs = (id,limit = 10,offset = 1) => api(`transaction/get-transaction-user/${id}?limit=${limit}&page=${offset}&sortBy=createdAt:desc `, 'GET');
export const updateTransaction = (data) => api(`transaction/update-transaction`, 'PATCH', data);
export const deleteTransaction = (id) => api(`transaction/delete-transaction/${id}`, 'GET');


// dashboard APIs
export const getTotalPoweroneCount = (data) => api(`users/users-count-powerone `, 'GET', data);
export const getTotalSIPCount = (data) => api(`users/users-count-sip `, 'GET', data);

// Notification Management
export const addNotification = (data) => api(`notification/add-notification `, 'POST', data);
export const getNotification = (status="1",limit=10,offset = 1) => api(`notification/fetch-notification?status=${status}&limit=${limit}&&page=${offset}&sortBy=createdAt:desc`, 'GET');
export const getDashNotification = () => api(`dashnotification/fetch-recent-notification`, 'GET');
export const getNotificationByAudience = (status="1",targetAudience,limit=10,offset = 1) => api(`notification/fetch-notification?status=${status}&page=${offset}&targetAudience=${targetAudience}&limit=${limit}&sortBy=createdAt:desc`, 'GET');
export const getNotificationByAll = (status="1",targetAudience,limit=10,offset = 1) => api(`notification/fetch-notification?status=${status}&page=${offset}&targetAudience=${targetAudience}&limit=${limit}&sortBy=createdAt:desc`, 'GET');
export const addViewNotification = (data) => api(`notification/add-view-notification`, 'POST',data);
export const getNotificationById = (id) => api(`notification/get-notificationById/${id}`, 'GET');
export const deleteNotification = (id) => api(`notification/delete-notification/${id}`, 'GET');
export const updateNotification = (id,data) => api(`notification/update-notification/${id}`, 'PATCH',data);
export const getPersonalizedNotification = (id,limit=10,offset = 1) => api(`notification/get-personalized-notification/${id}?limit=${limit}&page=${offset}&sortBy=createdAt:desc`, 'GET');

//Dashboard Notification Management
export const addDashboardNotification = (data) => api(`dashnotification/add-dash-notification `, 'POST', data);
export const getDashboardNotification = (limit=10,offset = 1) => api(`dashnotification/fetch-dash-notification?limit=${limit}&&page=${offset}&sortBy=createdAt:desc`, 'GET');
export const deleteDashboardNotification = (id) => api(`dashnotification/delete-dash-notification/${id}`, 'GET');



// TravelQuery managemnet
export const addTravelQuery = (data) => api(`travelQuery/add-travelQuery `, 'POST', data);
export const getTravelQuery = (limit = 100, offset = 1) => api(`travelQuery/fetch-travelQuery?limit=${limit}&sortBy=createdAt:desc&page=${offset}&type=regular`, 'GET');
export const updateTravelQuery = (data) => api(`travelQuery/update-travelQuery`, 'PATCH', data);
export const deleteTravelQuery = (id) => api(`travelQuery/delete-travelQuery/${id}`, 'GET');


// Travel managemnet
export const addTravel = (data) => api(`travel/add-travel `, 'POST', data);
export const deleteTravel = (id) => api(`travel/delete-travel/${id}`, 'GET');
export const getTravel = (limit = 100, offset = 1) => api(`travel/fetch-travel?limit=${limit}&sortBy=createdAt:desc&page=${offset}&type=regular`, 'GET');
export const getPreTravel = (limit = 100, offset = 1) => api(`travel/fetch-travel?limit=${limit}&sortBy=createdAt:desc&page=${offset}&type=pre`, 'GET');


// Powerone managemnet
export const addPowerone = (data) => api(`powerone/add-powerone`, 'POST', data);
export const deletePowerone = (id) => api(`powerone/delete-powerone/${id}`, 'GET');
export const getpowerone = () => api(`powerone/fetch-powerone`, 'GET');
export const updatePowerone = (id,data) => api(`powerone/update-powerone/${id}`, 'POST',data);


// get user Perfomance
export const getUserPerfomance = (id,role, number = '1') => api(`users/get-top-perfomance/${id}/${role}/${number}`, 'GET');
