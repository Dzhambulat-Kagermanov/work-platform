"use client";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import cls from "./index.module.scss";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import { Typography } from "@/components/ui";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { profileSelector, useProfile } from "@/store/useProfile";
import { useReferralLink } from "@/hooks/api/seller/useReferralLink";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface Props extends TClassName {}

const ReferralContent: FC<Props> = ({ className }) => {
    const profile = useProfile(profileSelector);
    const [referralUrl, setReferralUrl] = useState<string>("");
    const [copySuccess, setCopySuccess] = useState(false);
    const searchParams = useSearchParams();
    
    const referralLinkMutation = useReferralLink();
    
    const handleCopy: MouseEventHandler = () => {
        if (referralUrl) {
            navigator.clipboard.writeText(referralUrl);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        }
    };

    // Generate referral URL with the user's ID
    useEffect(() => {
        if (profile?.id) {
            // Create the URL with the ?ref={USER_ID} format
            const baseUrl = window.location.origin;
            const referralPath = `${baseUrl}?ref=${profile.id}`;
            setReferralUrl(referralPath);
        }
    }, [profile?.id]);

    // Process the referral parameter if it exists
    useEffect(() => {
        const refParam = searchParams.get('ref');
        if (refParam) {
            // Call the POST API to save the referral
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || ''}/referral/${refParam}`;
            axios.post(apiUrl)
                .then(response => {
                    console.log('Referral registered successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error registering referral:', error);
                });
        }
    }, [searchParams]);

    return (
        <section className={cn(cls.wrapper, [className])}>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                Специально для вас мы создали партнерскую программу, по которой
                вы сможете зарабатывать не зависимо от собственных продвижений.
            </Typography>
            <div className={cls.link_wrapper}>
                <Typography
                    font="Inter-R"
                    tag="p"
                    size={14}
                    className={cls.text}
                >
                    Копируйте вашу индивидуальную ссылку:
                </Typography>
                <div className={cls.link}>
                    <Typography font="Inter-M" tag="p" size={14}>
                        {referralUrl || "Загрузка ссылки..."}
                    </Typography>
                    <button 
                        className={cn(cls.btn)} 
                        onClick={handleCopy}
                        disabled={!referralUrl}
                        title="Скопировать ссылку"
                    >
                        {copySuccess ? (
                            <span className={cls.copy_success}>
                                Скопировано!
                            </span>
                        ) : (
                            <CopyIcon
                                className={cn(cls.icon)}
                                color="var(--grey-600)"
                            />
                        )}
                    </button>
                </div>
            </div>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                Отправляйте другу, получайте 10% от всех его платежей и выводите
                отчисления по партнерской програмне от 10000Р.
            </Typography>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                А если вы являетесь веб специалистом или медийной личностью, то
                для вас есть особые условия.
            </Typography>
            <Typography font="Inter-R" tag="p" size={14} className={cls.text}>
                <Link href="#">Напишите нам</Link> и узнайте все подробности.
            </Typography>
        </section>
    );
};

export { ReferralContent };
