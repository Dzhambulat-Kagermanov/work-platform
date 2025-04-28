import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export interface FeedbacksResponse {
  reviews: Array<{
    id: string;
    text: string;
    rating: number;
    pros: string;
    cons: string;
    createdDate: string;
    user: string;
    answer?: {
      text: string;
      state: string;
      lastUpdate: string;
      createDate: string;
      rejectReason: number;
      metadata: any;
      supplierId: number;
      editable: boolean;
      employeeId: number;
    };
    photos: any[];
    video: {
      id: string;
      durationSec: number;
    } | null;
  }>;
  summary: {
    averageRating: string;
    totalReviews: number;
    ratingDistribution: {
      [key: string]: number;
    };
    withPhotos: number;
    withText: number;
  };
  pagination: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

const useProductFeedbacksQuery = (productId: string, page: number = 1) =>
  useQuery({
    queryKey: ["product-feedbacks", productId, page],
    queryFn: async () => {
      const res = await apiService.products.getProductFeedbacks(productId, page);
      return res as FeedbacksResponse;
    },
    staleTime: 60_000,
    retry: 3,
  });

export default useProductFeedbacksQuery;
