type Category = {
    id: number | string;
    image: string;
    name: string;
};

export type Product = {
    category: Category;
    description: string;
    id: number;
    image: string;
    price: string | number;
    title: string;
};
