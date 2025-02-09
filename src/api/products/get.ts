import { TProductItemProps } from "@/types";

type TGetSimilarProducts = TProductItemProps[];
export const getSimilarProducts = (
    id: number,
): Promise<TGetSimilarProducts> => {
    return new Promise((res, rej) => {
        res(
            [...Array(6)].map((_, index) => {
                return {
                    id: index + 1,
                    previewImage: "/images/stub/product-stub.png",
                    images: [
                        "/images/stub/product-stub.png",
                        "/images/stub/product-stub-2.png",
                    ],
                    isFavorite: true,
                    name: "Зарядка для iphone 20W type-c быстрое устройство",
                    price: {
                        price: (500 * (index + 1)) / (index + 2),
                        discount: 20,
                    },
                    quantities: 221,
                    tooltip: "Подсказка",
                    productDescription:
                        "Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. Быстрая зарядка для iPhone 20W с разъемом TYPE-C. Представляем Вашему вниманию адаптер быстрой зарядки который сможет зарядить ваш смартфон за считан. ",
                    salesmanId: index + 1,
                };
            }),
        );
    });
};
