export type TTariffsItemProps = {
    name: string;
    duration: string;
    advantages: string[];
    ransoms: {
        qnt: number;
        priceForOne: number;
    };
    price: number;
};
