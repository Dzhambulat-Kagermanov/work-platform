import { pathValidating } from "@/lib";
import { usePathname } from "next/navigation";

export const usePathValidating = (validator: string): boolean => {
    const path = usePathname();

    return pathValidating(path, validator);
};
