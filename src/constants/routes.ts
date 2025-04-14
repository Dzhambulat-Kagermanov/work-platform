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
        DELIVERY: "/buyer/delivery",
    },
    SALESMAN: {
        MAIN: "/salesman",
        AUTH: "/salesman/auth",
        REGISTRATION: "/salesman/registration",
        FORGOT_PASSWORD: "/salesman/forgot-password",
        PROFILE: "/salesman/profile",
        SUPPORT: "/salesman/support",
        SALESMAN_PROFILE: "/salesman/salesman-profile",
        BUYER_PROFILE: "/salesman/buyer-profile",
        BALANCE: {
            VALUE: "/salesman/balance",
            TARIFFS: "/salesman/balance/tariffs",
        },
        CREATE_ADVERTISEMENTS: "/salesman/create-advertisement",
        EDIT_ADVERTISEMENTS: "/salesman/edit-advertisement",
        REFERRALS: "/salesman/referral",
    },
    USER_CONDITIONS: "/user-conditions",
    POLICY: "/policy",
};
