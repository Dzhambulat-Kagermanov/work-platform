"use client";
import { FC } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Input } from "@/components/ui";
import { SearchIcon } from "@/icons";
import { Logo } from "@/components/widgets/shared/Logo";
import { Navbar } from "../Navbar";
import { useFiltersStore, useScreen } from "@/hooks";
import { BurgerMenu } from "@/components/features/BurgerMenu";
import { MD_LOW, SM_BIG } from "@/constants";
import cls from "./index.module.scss";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { mainPageSetDefaultFilters } from "@/store/useFiltersStore";

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
    const width = useScreen();

    const router = useRouter();

    const searchParams = useSearchParams();

    const setMainPageDefaultFilters = useFiltersStore(mainPageSetDefaultFilters);

    return (
        <Formik 
            onSubmit={() => {
                // Empty onSubmit as we're handling submission in the Form component
                // This prevents the default Formik submission behavior
            }}
            initialValues={{
            search: searchParams.get("search"),
        }}>
            {
                ({
                    handleChange,
                    values,
                }) => (
                    <Form className={cn(cls.content, [className, cls.cont])} onSubmit={(e) => {
                        // Prevent the default form submission that triggers RSC requests
                        e.preventDefault();
                        
                        // Handle search directly without router navigation
                        const searchValue = values.search || '';
                        const params = new URLSearchParams(window.location.search);
                        params.set('search', searchValue);
                        
                        // Update URL without causing navigation
                        window.history.pushState({}, '', `/?${params.toString()}`);
                        
                        // Apply filters without triggering RSC requests
                        setMainPageDefaultFilters();
                    }}>
                        {width > MD_LOW && <Logo className={cn(cls.logo)} />}
                        {width <= SM_BIG && <BurgerMenu />}
                        <Input
                            placeholder="Поиск"
                            icon={
                                <SearchIcon
                                    color="var(--purple-100)"
                                    className={cn(cls.inp_icon)}
                                />
                            }
                            name="search"
                            value={values.search ?? ""}
                            onChange={handleChange}
                            wrapperCls={cn(cls.inp_wrapper)}
                            contentCls={cn(cls.inp_content)}
                            inpCls={cn(cls.inp)}
                        />
                        {width > SM_BIG && <Navbar className={cn(cls.navbar)} />}
                    </Form>
                )
            }
        </Formik>
    );
};

export { Content };
