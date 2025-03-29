type PaginationData<T> = {
    data: T;
} & Record<"current_page" | "per_page" | "total", number>;

export default PaginationData;
