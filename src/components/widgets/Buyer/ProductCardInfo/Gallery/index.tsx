"use client";
import { FC, memo, useRef, useState } from "react";
import { TClassName, TProductItemProps } from "@/types";
import { cn } from "@/lib";
import { ActionArrowIcon } from "@/icons";
import Image from "next/image";
import cls from "./index.module.scss";

interface Props
    extends TClassName,
        Pick<TProductItemProps, "images" | "isFavorite"> {}
const Gallery: FC<Props> = memo(({ className, images }) => {
    const scrollbarRef = useRef<HTMLDivElement>(null);

    const [scrollbarPos, setScrollbarPos] = useState<[number, number]>([0, 0]);
    const MAX_ITEMS_SCROLLBAR = 3;
    const [active, setActive] = useState<string>(images[0]);
    const imagesForRender =
        images.length >= MAX_ITEMS_SCROLLBAR
            ? images
            : [
                  ...images,
                  ...[...Array(MAX_ITEMS_SCROLLBAR - images.length)].map(() => {
                      return null;
                  }),
              ];

    const handleSwipeClick = () => {
        if (scrollbarRef.current) {
            const parentHeight = scrollbarRef.current.offsetHeight;
            const childrenHeight =
            //@ts-ignore
                scrollbarRef.current.children[0].offsetHeight;
            console.log(childrenHeight)
            const translateOffset =
                (parentHeight - childrenHeight * images.length) /
                    (images.length - 1) +
                childrenHeight;

            setScrollbarPos((cur) => {
                if (cur[0] + 1 > images.length - MAX_ITEMS_SCROLLBAR) {
                    return [0, 0];
                }
                return [cur[0] + 1, cur[1] + translateOffset];
            });
        }
    };

    return (
        <section
            className={cn(cls.wrapper, [className], {
                [cls.hasNextBtn]: imagesForRender.length > MAX_ITEMS_SCROLLBAR,
            })}
        >
            <div className={cn(cls.scrollbar_wrapper)}>
                <div
                    className={cn(cls.scrollbar)}
                    ref={scrollbarRef}
                    style={{
                        translate: `0 -${scrollbarPos[1]}px`,
                    }}
                >
                    <div className="">
                        {imagesForRender.map((image, index) => {
                            if (image === null) {
                                return (
                                    <div
                                        className={cn(cls.stub, [cls.item])}
                                        key={index}
                                    />
                                );
                            }
                            return (
                                <button
                                    className={cn(cls.item, [], {
                                        [cls.active_item]: active === image,
                                    })}
                                    onClick={() => {
                                        setActive(image);
                                    }}
                                    key={image}
                                >
                                    <Image
                                        width={126}
                                        height={167}
                                        src={image}
                                        alt="Продукт"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cn(cls.active)}>
                <Image src={active} alt="Продукт" width={400} height={530} />
            </div>
            {imagesForRender.length > MAX_ITEMS_SCROLLBAR && (
                <div className={cn(cls.btn_wrapper)}>
                    <button
                        className={cn(cls.next_images, [])}
                        onClick={handleSwipeClick}
                    >
                        <ActionArrowIcon color="var(--purple-500)" />
                    </button>
                </div>
            )}
        </section>
    );
});

export { Gallery };
