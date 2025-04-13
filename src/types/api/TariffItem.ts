import Timestamps from "./Timestamps";

type TariffItem = {
    id: number;
    name: string;
    price: number;
    buybacks_count: number;
    advantages: string[];
    redemption_price: number;
    expiration_date: string | null;
} & Timestamps;

export default TariffItem;
