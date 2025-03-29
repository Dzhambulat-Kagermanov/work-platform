import Timestamps from "./Timestamps";

type Review = {
    id: number;
    user_id: number;
    ads_id: number;
    user_name: string;
    rating: number;
    text: string;
} & Timestamps;

export default Review;
