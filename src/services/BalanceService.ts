import axios from "@/axios";

class BalanceService {
    async topUpBalance(amount: string) {
        const res = await axios.post("/balance", {
            amount
        });

        return res.data;
    }
}

export default BalanceService;