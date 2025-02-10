import { QueryItem } from "@/types/client";
//@ts-ignore
import { NextRouter } from "next/navigation";
import queryStringHandler from "./query-string-handler";

const routerReplaceQueryHandler = (
    router: NextRouter,
    pathname: string,
    query: QueryItem[],
) => {
    const queryString = queryStringHandler(query);

    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
};

export default routerReplaceQueryHandler;
