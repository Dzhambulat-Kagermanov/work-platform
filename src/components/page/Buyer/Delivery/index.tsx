import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { BackButton, Container } from "@/components/ui";
import { DeliverySidebar } from "@/components/widgets/Buyer/DeliverySidebar";
import { TChatType } from "@/components/widgets/Buyer/DeliverySidebar/types";
import { DeliveryContent } from "@/components/widgets/Buyer/DeliveryContent";
import { BodyFlexColumnStub } from "@/components/widgets/shared/BodyFlexColumnStub";
import { MD_LOW } from "@/constants";
import { DeliveryChatOrderInfoModal } from "@/components/widgets/Buyer/DeliveryChatOrderInfoModal";
import cls from "./index.module.scss";

interface Props extends TClassName {
    chatType: TChatType;
}
const DeliveryPage: FC<Props> = ({ className, chatType }) => {
    return (
        <main className={cn(cls.delivery, [className])}>
            <BodyFlexColumnStub />
            <Container className={cn(cls.container, ["modules-gap-bottom"])}>
                <BackButton
                    href="/"
                    className={cn(cls.back_btn, ["modules-gap-top"])}
                    hideWhen={MD_LOW}
                >
                    Назад
                </BackButton>
                <div className={cn(cls.complex, ["modules-gap-top"])}>
                    <DeliverySidebar
                        className={cn(cls.sidebar)}
                        chatType={chatType}
                    />
                    <DeliveryContent
                        className={cn(cls.content)}
                        chatType={chatType}
                    />
                </div>
            </Container>
            <DeliveryChatOrderInfoModal className={cn(cls.order_info_modal)} />
        </main>
    );
};

export { DeliveryPage };
