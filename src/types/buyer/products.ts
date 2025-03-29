export type TProductItemProps = {
    id: number;
    isFavorite?: boolean;
    name: string;
    quantities: number;
    previewImage: string;
    images: string[];
    price: {
        price: number;
        discount?: number;
    };
    tooltip?: string;
    salesmanId: number;
    productDescription: string;
    productInstructions: string;
};
