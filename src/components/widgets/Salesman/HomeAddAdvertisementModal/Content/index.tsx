"use client"
import { FC } from "react"
import { TClassName } from "@/types"
import { cn } from "@/lib"
import { Item } from "../Item"
import cls from "./index.module.scss"
import { useGetSellerProductsQuery } from "@/hooks/api/seller"
import { Loader } from "lucide-react"

interface Props extends TClassName {
    selectedItem: number | null
    setSelectedItem: (value: number | null) => void
}
const Content: FC<Props> = ({ className, setSelectedItem, selectedItem }) => {
    const { data: products, isLoading } = useGetSellerProductsQuery([])

    if (!products || !products.data.length || isLoading) {
        return (
            <div className="flex items-center h-full flex-auto justify-center text-center">
                {isLoading ? (
                    <Loader className="animate-spin" />
                ) : (
                    "Товары не найдены"
                )}
            </div>
        )
    }

    return (
        <ul className={cn(cls.wrapper, [className])}>
            {products.data.map((item, index) => {
                return (
                    <Item
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                        id={item.id}
                        image={
                            item.images && item.images.length
                                ? item.images[0]
                                : ""
                        }
                        title={item.name}
                        number={item.wb_id + ''}
                        key={index}
                        className={cn(cls.item)}
                    />
                )
            })}
        </ul>
    )
}

export { Content }
