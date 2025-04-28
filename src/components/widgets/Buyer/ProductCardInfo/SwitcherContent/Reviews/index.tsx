import { FC, useState } from "react";
import { TClassName } from "@/types";
import { cn } from "@/lib";
import cls from "./index.module.scss";
import { ReviewItem } from "@/components/entities/ReviewItem";
import { Review } from "@/types/api";
import { Typography } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { PageLoader } from "@/components/ui/loaders";
import { useProductFeedbacksQuery } from "@/hooks/api/products";

interface Props extends TClassName {
    itemCls?: string;
    reviews?: Review[];
    productId: string;
}
const Reviews: FC<Props> = ({ className, reviews: initialReviews, productId, itemCls }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, error } = useProductFeedbacksQuery(productId, currentPage);
    
    const reviews = data?.reviews || initialReviews || [];
    const pagination = data?.pagination;
    
    if (isLoading) {
        return <PageLoader />;
    }
    
    if (error) {
        return (
            <Typography tag="h2" font="Inter-R" size={24} className={cls.stub}>
                Ошибка при загрузке отзывов
            </Typography>
        );
    }

    if (!reviews.length) {
        return (
            <Typography tag="h2" font="Inter-R" size={24} className={cls.stub}>
                Отзывов нет :\
            </Typography>
        );
    }

    // Helper function to convert API reviews to the Review type expected by ReviewItem
    const convertToReviewType = (apiReview: any): Review => {
        return {
            id: typeof apiReview.id === 'string' ? parseInt(apiReview.id, 10) || 0 : apiReview.id,
            user_id: 0, // Default value
            ads_id: 0, // Default value
            user_name: apiReview.user || '',
            rating: apiReview.rating,
            text: apiReview.text || '',
            created_at: apiReview.createdDate || null,
            updated_at: null
        };
    };

    return (
        <div className={cn(cls.wrapper, [className])}>
            {reviews.length > 0 ? (
                <>
                    <ul className={cn(cls.group)}>
                        {reviews.map((item, index) => (
                            <ReviewItem 
                                key={typeof item.id === 'string' ? item.id : index} 
                                item={convertToReviewType(item)} 
                            />
                        ))}
                    </ul>
                    
                    {pagination && pagination.last_page > 1 && (
                        <div className={cn(cls.pagination)}>
                            <Button 
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={cls.btnPagination}
                                theme="outline"
                            >
                                Предыдущая
                            </Button>
                            
                            <span className={cls.pageInfo}>
                                {currentPage} из {pagination.last_page}
                            </span>
                            
                            <Button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, pagination.last_page))}
                                disabled={currentPage === pagination.last_page}
                                className={cls.btnPagination}
                                theme="outline"
                            >
                                Следующая
                            </Button>
                        </div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export { Reviews };
