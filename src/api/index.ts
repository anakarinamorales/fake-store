export const getProducts = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCTS_URL}?offset=0&limit=10`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return data;
};

export const getProduct = async (id: string | number) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCTS_URL}/${id}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }

    const product = await response.json();
    return product;
};
