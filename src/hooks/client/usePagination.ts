import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type PaginationValue = Record<"current" | "max", number>;

type PaginationArgs = {
    maxPages?: number;
};

const usePagination = (args?: PaginationArgs) => {
    // const params = useSearchParams();

    const [pagination, setPagination] = useState<PaginationValue>({
        current: 1,
        max: args?.maxPages ?? 1,
    });

    useEffect(() => {
        if (args?.maxPages) {
            setPagination((prev) => ({
                ...prev,
                max: args.maxPages ?? 1,
            }));
        }
    }, [args?.maxPages]);

    return {
        pagination,
        setPagination,
    };
};

export default usePagination;
