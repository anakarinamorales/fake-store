'use client';

import { addToCart } from '@/app/actions';
import styles from '@/app/page.module.css';
import { Product } from '@/app/products/types';

export function AddToCartButton({product}: {product: Product}) {
    return (
        <button className={styles.cta} onClick={() => addToCart(product)}>
            Add to cart
        </button>
    );
}
