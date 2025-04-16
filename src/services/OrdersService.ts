import axios from "@/axios";
import { Order } from "@/types/api";

export type SendOrderMessageData = {
    id: number;
};

class OrdersService {
    async createOrder(id: number) {
        // TODO: добавить тип ответа

        const res = await axios.post<Order>(`/buyer/create-order/${id}`);

        return res.data;
    }

    async getOrders(query?: string) {
        // TODO: добавить тип ответа

        const res = await axios.get<unknown[]>(`/buyer/orders${query || ""}`);

        return res.data;
    }

    async getSalesmanOrder(buybackId?: number) {
        const res = await axios.get<Order>(`/seller/buybacks/${buybackId}`);
        return res.data;
    }

    async getOrder(id?: number) {
        if (!id) {
            return null;
        }

        const res = await axios.get<Order>(`/buyer/orders/${id}`);

        return res.data;
    }

    async sendOrderMessage({ id, ...data }: SendOrderMessageData) {
        // TODO: добавить тип ответа

        const res = await axios.post<unknown>(`/buyer/orders/${id}`, data);

        return res.data;
    }
}

export default OrdersService;
