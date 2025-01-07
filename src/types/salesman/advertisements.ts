export type TSalesmanTableAdvertisement = {
    id: number;
    defaultStatusValue?: boolean;
    advertisement: {
        defaultCheckboxValue?: boolean;
        name: string;
        date: string;
    };
    product: {
        image: string;
        name: string;
        number: string;
    };
    cashback: {
        percent: number;
        money: number;
    };
    ransoms: [number, number];
    balance: number;
    inTransactions: number;
    views: number;
    inFavorite: number;
    ransomsQnt: number;
    CTR: number;
};
