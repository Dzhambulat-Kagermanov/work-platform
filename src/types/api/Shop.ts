import Timestamps from "./Timestamps";

type Shop = {
    id: number;
    user_id: number;
    supplier_id: string;
    inn: string;
    legal_name: string;
    wb_name: string; 
} & Timestamps;

export default Shop;