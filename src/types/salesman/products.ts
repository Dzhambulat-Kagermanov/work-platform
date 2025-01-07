export type TSalesmanTableProduct = {
    id: number;
    defaultCheckboxValue?: boolean;
    defaultStatusValue?: boolean;
    product: {
        image: string;
        name: string;
        number: string;
    };
    ransoms: [number, number];
    views: number;
    ransomsQnt: number;
    conversion: number;
    advertisements: number;
};
