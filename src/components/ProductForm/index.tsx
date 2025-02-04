'use client';

import { Product } from '@/app/products/types';
import styles from '@/app/page.module.css';
import { addToCart, CartItem } from '@/app/actions';

export default function ProductForm({ product }: { product: Product }) {
    const onSubmit = (event) => {
        event.preventDefault();
        const quantity = Number(event.target.elements.quantity.value);

        const cartItem: CartItem = {
            id: product.id,
            price: Number(product.price),
            quantity,
            total: Number(product.price) * quantity,
        };

        addToCart(cartItem);
    };

    return (
        <form onSubmit={onSubmit}>
            <input name="quantity" type="number" />
            <button className={styles.cta} type="submit">
                Add to cart
            </button>
        </form>
    );
}
