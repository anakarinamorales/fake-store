'use client';

import { addToCart } from '@/app/actions';
import styles from '@/app/page.module.css';

export function AddToCartButton() {
    return (
        <button className={styles.cta} onClick={() => addToCart()}>
            Add to cart
        </button>
    );
}
