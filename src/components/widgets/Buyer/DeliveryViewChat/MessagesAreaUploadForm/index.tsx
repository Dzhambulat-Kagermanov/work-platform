import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Button, FileInput, Typography } from "@/components/ui";
import Link from "next/link";
import { PlusIcon } from "@/icons";
import cls from "./index.module.scss";

interface Props extends TClassName {}
const MessagesAreaUploadForm: FC<Props> = ({ className }) => {
    const [barcodeFile, setBarcodeFiles] = useState<[string, File | undefined]>(
        ["", undefined],
    );
    const [reviewFile, setReviewFile] = useState<[string, File | undefined]>([
        "",
        undefined,
    ]);

    const handleCancelBarcode = () => {
        setBarcodeFiles(["", undefined]);
    };
    const handleCancelReview = () => {
        setReviewFile(["", undefined]);
    };
    const handleBarcodeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const files = e.target.files;
        files?.length && setBarcodeFiles([value, files[0]]);
    };
    const handleReviewInput = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        const value = e.target.value;
        files?.length && setReviewFile([value, files[0]]);
    };

    const handleSubmitBtn = () => {};
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className={cn(cls.form, [className])} onSubmit={handleSubmitForm}>
            <div className={cn(cls.item)}>
                <Typography font="Inter-R" size={14} tag="h3">
                    Загрузите фото на котором видно как вы порезали штрихкод,
                    чтобы не было возможности сдать товар обратно
                </Typography>
                {barcodeFile[1] ? (
                    <div className={cn(cls.load_file)}>
                        <Typography font="Inter-R" size={14}>
                            {barcodeFile[1].name}
                        </Typography>
                        <button
                            className={cn(cls.delete_load_file)}
                            onClick={handleCancelBarcode}
                        >
                            <PlusIcon color="var(--black-200)" />
                        </button>
                    </div>
                ) : (
                    <FileInput
                        uniqueName="barcode-file-uploader"
                        value={barcodeFile[0]}
                        className={cn(cls.file_input)}
                        onInput={handleBarcodeInput}
                    />
                )}
                <Typography font="Inter-M" size={12}>
                    <Link href={"#"}>Пример порезанного штрихкода</Link>
                </Typography>
            </div>
            <div className={cn(cls.item)}>
                <Typography font="Inter-R" size={14} tag="h3">
                    Загрузите скриншот где видно, что вы оставили отзыв
                </Typography>
                {reviewFile[1] ? (
                    <div className={cn(cls.load_file)}>
                        <Typography font="Inter-R" size={14}>
                            {reviewFile[1].name}
                        </Typography>
                        <button
                            className={cn(cls.delete_load_file)}
                            onClick={handleCancelReview}
                        >
                            <PlusIcon color="var(--black-200)" />
                        </button>
                    </div>
                ) : (
                    <FileInput
                        uniqueName="review-file-uploader"
                        className={cn(cls.file_input)}
                        onInput={handleReviewInput}
                        value={reviewFile[0]}
                    />
                )}
                <Typography font="Inter-M" size={12}>
                    <Link href={"#"}>Пример скриншота с отзывом</Link>
                </Typography>
            </div>
            <Button
                size="mid"
                onClick={handleSubmitBtn}
                theme="fill"
                disabled={!(reviewFile[1] && barcodeFile[1])}
                type="submit"
                className={cn(cls.submit_btn)}
            >
                Отправить
            </Button>
        </form>
    );
};

export { MessagesAreaUploadForm };
