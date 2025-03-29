import axios from "@/axios";
import { TariffItem } from "@/types/api";

export type BuyTariffBuybacksData = {
    amount: number;
}
class TariffsService {
    async getTariffsList() {
        const res = await axios.get<TariffItem[]>("/seller/tariff/list");

        return res.data;
    }
    async getTariffByRansoms(ransoms: string) {
        const res = await axios.get<{ tariff: TariffItem }>(
            `/seller/tariff/${ransoms}`,
        );

        return res.data;
    }
    async buyTariffBuybacks(data: BuyTariffBuybacksData) {
        const res = await axios.post("/balance/buybacks", data);

        return res;
    }
}

export default TariffsService;
