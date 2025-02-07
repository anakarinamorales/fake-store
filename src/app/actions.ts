'use server';

import { cookies } from 'next/headers';

export async function changeTheme() {
    const cookieStore = await cookies();
    const currentTheme = cookieStore.get('theme')?.value;

    if (currentTheme === 'dark') {
        cookieStore.set('theme', 'light');
    }

    if (!currentTheme || currentTheme === 'light') {
        cookieStore.set('theme', 'dark');
    }
}

export type CartItem = {
    id: number;
    quantity: number;
    price: number;
    total: number;
};

export type Cart = {
    products: CartItem[];
    total: number;
};

export async function addToCart(cartItem: CartItem) {
    const cookieStore = await cookies();

    // No previous cart available
    if (!cookieStore?.get('cart')?.value) {
        // console.log('FILLING EMPTY CART!');
        const cart = { products: [cartItem], total: cartItem.total };
        cookieStore.set('cart', JSON.stringify(cart));
        // console.log(cookieStore?.get('cart')?.value);
        return cart;
    }

    const cookieCart = JSON.parse(
        cookieStore.get('cart')?.value as string
    ) as Cart;

    // console.log('GOT COOKIE! ', cookieCart);

    const itemIsOnCart = Boolean(
        cookieCart.products.find((item) => item.id === cartItem.id)?.id
    );

    if (!itemIsOnCart) {
        const newCart = cookieCart;
        // console.log('ITEM NOT ON CART!!!');
        newCart.products.push(cartItem);
        newCart.total = cookieCart.total + cartItem.total;
        cookieStore?.set('cart', JSON.stringify(newCart));
        // console.log(cookieStore?.get('cart')?.value);
        return newCart;
    }

    if (itemIsOnCart) {
        // console.log('HAS ITEM ON CART ALREADY!!!');
        const newCart = cookieCart;
        const cartItemIndex = newCart.products.findIndex(
            (item) => item.id === cartItem.id
        );
        const previousItemTotal = newCart.products[cartItemIndex].total;
        const newTotal = newCart.total - previousItemTotal + cartItem.total;
        newCart.products[cartItemIndex].quantity = cartItem.quantity;
        newCart.products[cartItemIndex].total = cartItem.total;
        newCart.total = newTotal;

        cookieStore?.set('cart', JSON.stringify(newCart));
        // console.log(cookieStore?.get('cart')?.value);
        return newCart;
    }

    // CHECK CASE WHERE YOU SET THE ITEM TOTAL TO 0 (REMOVE THE ITEM FROM THE CART THEN)
}

export async function getCart() {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get('cart');

    // No cart available, return empty cart
    if (!cartCookie?.value) {
        return { products: [], total: 0 };
    }

    return JSON.parse(cartCookie?.value as string) as Cart;
}
