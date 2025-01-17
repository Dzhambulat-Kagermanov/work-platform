import { useSearchParams } from "next/navigation";
import { useState } from "react";

export type PaginationValue = Record<"current" | "max", number>;

const usePagination = () => {
    const params = useSearchParams();

    console.log(params);

    const [pagination, setPagination] = useState<PaginationValue>({
        current: 1,
        max: 1,
    });

    return {
        pagination,
        setPagination,
    };
};

export default usePagination;
