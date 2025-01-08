export const ROUTES = {
    MAIN: "/",
    BUYER: {
        AUTH: "/buyer/auth",
        REGISTRATION: "/buyer/registration",
        FORGOT_PASSWORD: "/buyer/forgot-password",
        ACCOUNT: "/buyer/account",
        CATEGORY: "/buyer/category",
        SALESMAN: {
            ID: (id: string) => `/buyer/salesman/${id}`,
        },
        PRODUCTS: {
            ID: (id: string) => `/buyer/products/${id}`,
        },
    },
    SALESMAN: {
        MAIN: "/salesman",
        AUTH: "/salesman/auth",
        REGISTRATION: "/salesman/registration",
        FORGOT_PASSWORD: "/salesman/forgot-password",
    },
};
