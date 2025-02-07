'use client';

import { addToCart, CartItem } from '@/app/actions';
import styles from '@/app/page.module.css';

export function AddToCartButton({ item }: { item: CartItem }) {
    return (
        <button className={styles.cta} onClick={() => addToCart(item)}>
            Add to cart
        </button>
    );
}
