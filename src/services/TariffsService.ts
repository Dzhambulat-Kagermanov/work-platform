import axios from "@/axios";
import { TariffItem } from "@/types/api";
class TariffsService {
    async getTariffsList() {
        const res = await axios.get<TariffItem[]>("/seller/tariff");

        return res.data;
    }
}

export default TariffsService;