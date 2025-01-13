import { ButtonHTMLAttributes, FC, useState } from "react";
import cls from "./index.module.scss";
import { Button, Input, ModalBase } from "@/components/ui";
import { cn } from "@/lib";
import { useModalStore } from "@/hooks";
import { X } from "lucide-react";
import { useGetBalanceQuery, useOrderWithdrawMutation } from "@/hooks/api/auth";
import toast from "react-hot-toast";

const modalWithdrawal = "order-withdrawal";

const OrderModal: React.FC = () => {

    const { refetch: balanceRefetch } = useGetBalanceQuery();

    const { mutate: orderWithdrawMutate, isPending } = useOrderWithdrawMutation();

    const hideModal = useModalStore(store => store.hideModal);

    const [amount, setAmount] = useState("");
    const [card, setCard] = useState("");

    const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string | undefined = e.target.value;
        value = value.replace(/\D/g, '').substring(0, 16);;
        value = value.match(/.{1,4}/g)?.join(' ');

        setCard(value ?? "");

    }

    const handleSubmit = () => {
        orderWithdrawMutate({
            amount: Number(amount),
            card_number: Number(card.replace(/\D/g, ""))
        }, {
            onSuccess: () => {
                toast.success("Заявка на вывод успешно создана")
                balanceRefetch();
                hideModal({ slug: modalWithdrawal })
            },
        });
    }
    return (
        <ModalBase slug={modalWithdrawal}>
        <div className="bg-white p-4 flex flex-col gap-2 rounded-md w-full max-w-[500px]">
            <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="text-xl font-medium">
                    Заказать выплату
                </h2>
                <button className="ml-auto" onClick={() => hideModal({ slug: modalWithdrawal })}>
                    <X />
                </button>
            </div>
            <Input type="number" placeholder="Введите сумму" disabled={isPending} value={amount} onChange={(e) => setAmount(e.target.value)} min={100} max={100000} />
            <Input placeholder="Номер карты" disabled={isPending} maxLength={19} value={card} onChange={handleCardChange} />
            <Button onClick={handleSubmit} disabled={card.length !== 19 || isPending || !amount} size="mid" theme="fill">
                Заказать
            </Button>
        </div>
    </ModalBase>
    )
}

interface Props
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}
const OrderWithdrawal: FC<Props> = ({ className, ...other }) => {
    const showModal = useModalStore(store => store.showModal);

    return (
        <>
        <OrderModal />
        <Button
            secondColor="var(--green-100)"
            theme="outline"
            size="low"
            className={cn(cls.btn, [className])}
            onClick={() => showModal({ slug: modalWithdrawal })}
            {...other}
        >
            Заказать выплату
        </Button>
        </>
    );
};

export { OrderWithdrawal };
