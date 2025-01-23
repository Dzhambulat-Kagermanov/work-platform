import axios from "@/axios";
import { TariffItem } from "@/types/api";
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
}

export default TariffsService;
