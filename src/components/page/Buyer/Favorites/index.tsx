import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { FavoritesHead } from "@/components/widgets/Buyer/FavoritesHead";
import { FavoritesProducts } from "@/components/widgets/Buyer/FavoritesProducts";
import cls from "./index.module.scss";
import { AuthWrapper } from "@/components/widgets/shared/auth-wrapper";

interface Props extends TClassName {}
const FavoritesPage: FC<Props> = ({ className }) => {
    return (
        <AuthWrapper roles={["buyer"]}>
            <main className={cn(cls.favorites, [className])}>
                <FavoritesHead className={cn(cls.head, ["modules-gap-top"])} />
                <FavoritesProducts className={cn(cls.products)} />
            </main>
        </AuthWrapper>
    );
};

export { FavoritesPage };
