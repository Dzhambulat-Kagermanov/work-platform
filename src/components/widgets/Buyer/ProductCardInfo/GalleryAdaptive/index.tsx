"use client";
import { useScreen } from "@/hooks";
import { FC } from "react";
import { Gallery } from "../Gallery";
import { TProductItemProps } from "@/types";
import { GalleryMobile } from "../GalleryMobile";
import { XS_BIG } from "@/constants";

interface Props extends Pick<TProductItemProps, "images" | "isFavorite"> {}
const GalleryAdaptive: FC<Props> = ({ images, isFavorite }) => {
    const width = useScreen();
    return <></>;
    return (
        <>
            {width > XS_BIG ? (
                <Gallery images={images} isFavorite={isFavorite} />
            ) : (
                <GalleryMobile images={images} isFavorite={isFavorite} />
            )}
        </>
    );
};

export { GalleryAdaptive };
