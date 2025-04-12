import { Balance } from "@/types/api";
import { create } from "zustand";

interface TUseSalesmanBalance {
    balance?: Balance;
    setBalance: (balance: Balance) => void;
}

const useSalesmanBalance = create<TUseSalesmanBalance>()((set, get) => ({
    setBalance: (balance) => {
        set({ balance });
    },
}));

const balanceSelector = (state: TUseSalesmanBalance) => state.balance;
const setBalanceSelector = (state: TUseSalesmanBalance) => state.setBalance;

export { useSalesmanBalance, balanceSelector, setBalanceSelector };
