import { FC, Suspense } from "react"
import { TClassName } from "@/types"
import { Container } from "@/components/ui"
import { cn } from "@/lib"
import { Head } from "./Head"
import { Sort } from "./Sort"
import { Products } from "./Products"
import cls from "./index.module.scss"

interface Props extends TClassName { }
const HomeProducts: FC<Props> = async ({ className }) => {
    return (
        <Container tag="section" className={cn(cls.container, [className])}>
            <div className={cn(cls.content)}>
                <Suspense fallback={<></>}>
                    <Head className={cn(cls.head)} />
                </Suspense>
                <Sort className={cn(cls.sort)} />
            </div>
            <Suspense fallback={<></>}>
                <Products className={cn(cls.products)} />
            </Suspense>
        </Container>
    )
}

export { HomeProducts }
