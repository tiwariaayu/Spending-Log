export const  BASE_URL = "http://localhost:8000";

//utils/apiPath.js
export const API_PATHS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        GET_USER: '/auth/me',
    },
    CROPS: {
        LIST: '/crops',
        CREATE: '/crops',
        UPDATE: (id) => `/crops/${id}`,
        DELETE: (id) => `/crops/${id}`,
    },
    SCHEDULE: {
        LIST: '/schedule',
        CREATE: '/schedule',
        UPDATE: (id) => `/schedule/${id}`,
        DELETE: (id) => `/schedule/${id}`,
    },
    RECORDS: {
        LIST: '/records',
        CREATE: '/records',
        UPDATE: (id) => `/records/${id}`,
        DELETE: (id) => `/records/${id}`,
    },
    DASHBOARD: {
        GET_DATA:"/api/v1/dashboard",
    },
    INCOME:{
        ADD_INCOME:"api/v1/income/add",
        GET_ALL_INCOME:"api/v1/income/get",
        DELETE_INCOME:(incomeID) => `/api/v1/income/${incomeID}`,
        DOWNLOAD_INCOME:`/api/v1/income/downloadexcel`
    },
    EXPENSE:{
        ADD_EXPENSE:"/api/v1/expense/add",
        GET_ALL_EXPENSE:"/api/v1/expense/get",
        DELETE_EXPENSE:(expenseID) => `/api/v1/expense/${expenseID}`,
        DOWNLOAD_EXPENSE:`/api/v1/expense/downloadexcel`,
    },
    IMAGE: {
        UPLOAD_IMAGE:"/api/v1/auth/upload-image",
    },
};