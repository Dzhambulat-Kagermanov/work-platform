export const ROUTES = {
    MAIN: "/",
    BUYER: {
        AUTH: "/buyer/auth",
        REGISTRATION: "/buyer/registration",
        FORGOT_PASSWORD: "/buyer/forgot-password",
        ACCOUNT: {
            VALUE: "/buyer/account",
            BALANCE: "/buyer/account/balance",
        },
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
        PROFILE: "/salesman/profile",
        SUPPORT: "/salesman/support",
        BALANCE: {
            VALUE: "/salesman/balance",
            TARIFFS: "/salesman/balance/tariffs",
        },

    },
};
