import { QueryItem } from "@/types/client";

const queryStringHandler = (query: QueryItem[]) => {
    if (!query.length) {
        return "";
    }

    return `?${query.map((el) => `${el.key}=${el.value}`).join("&")}`;
};

export default queryStringHandler;
