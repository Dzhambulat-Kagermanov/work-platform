import axios from "@/axios";
import { queryStringHandler } from "@/handlers";
import { Transaction } from "@/types/api";
import { QueryItem } from "@/types/client";

class TransactionsService {
    async getTransactionsProductsList() {
        const res = await axios.get<{ id: number, name: string }[]>("/products/transactions-list");

        return res.data;
    }
    async getTransactions(query: QueryItem[]) {
        const res = await axios.get<Transaction[]>(
            `/transactions${queryStringHandler(query)}`,
        );

        return res.data;
    }
}

export default TransactionsService;