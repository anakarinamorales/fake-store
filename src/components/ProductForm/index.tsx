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
            {/* TO DO: Show initial value as 1 or the current quantity of the product on the cart */}
            <input name="quantity" type="number" min={1} max={100} />
            {/* TO DO: Show + and - input to increase and decrease the quantity */}
            <button className={styles.cta} type="submit">
                Add to cart
            </button>
        </form>
    );
}
