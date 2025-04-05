import { FC } from "react";
import { TClassName } from "@/types";
import { Container, Typography } from "@/components/ui";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { useGetFavoritesQuery } from "@/hooks/api/favorites";

interface Props extends TClassName {}
const FavoritesHead: FC<Props> = ({ className }) => {
    const { data: favoritesData } = useGetFavoritesQuery();

    return (
        <Container className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-SB" size={24} tag="h1">
                Избранное
            </Typography>
            <Typography font="Inter-R" size={14} tag="h2">
                {favoritesData?.length || 0} товара
            </Typography>
        </Container>
    );
};

export { FavoritesHead };
