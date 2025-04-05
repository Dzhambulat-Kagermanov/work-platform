export const priceDiscountCalculate = ({
    discount,
    price,
}: {
    discount?: number;
    price: number;
}) => (discount ? (price - (price / 100) * discount).toFixed(2) : (price ?? 0));
