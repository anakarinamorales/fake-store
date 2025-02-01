export type Product = {
    category: string;
    description: string;
    id: string | number;
    image: string;
    price: string | number;
    rating: { rate: number; count: number };
    title: string;
};
