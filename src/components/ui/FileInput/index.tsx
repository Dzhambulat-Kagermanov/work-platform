import { FC, forwardRef, InputHTMLAttributes, Ref } from "react";
import { cn } from "@/lib";
import { Button } from "../Button";
import { UploadIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    labelCls?: string;
    btnCls?: string;
    inpCls?: string;
    uniqueName: string;
}
const FileInput: FC<Props> = forwardRef(
    (
        {
            className,
            name,
            type,
            labelCls,
            uniqueName,
            inpCls,
            btnCls,
            ...other
        },
        ref: Ref<HTMLInputElement> | undefined,
    ) => {
        return (
            <div className={cn(cls.wrapper, [className])}>
                <label
                    htmlFor={uniqueName}
                    className={cn(cls.label, [labelCls])}
                >
                    <Button
                        tag="div"
                        size="mid"
                        theme="outline"
                        className={cn(cls.btn, [btnCls])}
                        beforeIcon={
                            <UploadIcon
                                color="var(--purple-300)"
                                className={cn(cls.icon)}
                            />
                        }
                    >
                        Загрузить
                    </Button>
                </label>
                <input
                    className={cn(cls.inp, [inpCls])}
                    ref={ref}
                    id={uniqueName}
                    name={`files[] ${name || ""}`}
                    type="file"
                    {...other}
                />
            </div>
        );
    },
);

export { FileInput };
