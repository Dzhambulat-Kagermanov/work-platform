import Timestamps from "./Timestamps";

type TariffItem = {
    id: number;
    name: string;
    price: number;
    buybacks_count: number;
} & Timestamps;

export default TariffItem;
