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
    totalQtProducts: number;
};

export async function addToCart(cartItem: CartItem) {
    const cookieStore = await cookies();

    // No previous cart available and qt set to 1 or more products
    if (!cookieStore?.get('cart')?.value && cartItem.quantity > 0) {
        const cart = {
            products: [cartItem],
            total: cartItem.total,
            totalQtProducts: cartItem.quantity,
        };
        cookieStore.set('cart', JSON.stringify(cart));
        return cart;
    }

    const cookieCart = JSON.parse(
        cookieStore.get('cart')?.value as string
    ) as Cart;

    const oldCartItem = cookieCart.products.find(
        (item) => item.id === cartItem.id
    ) as CartItem;

    const itemIsOnCart = Boolean(oldCartItem?.id);

    if (!itemIsOnCart && cartItem.quantity > 0) {
        const newCart = cookieCart;
        newCart.products.push(cartItem);
        newCart.total = cookieCart.total + cartItem.total;
        newCart.totalQtProducts =
            cookieCart.totalQtProducts + cartItem.quantity;

        cookieStore?.set('cart', JSON.stringify(newCart));
        return newCart;
    }

    if (itemIsOnCart) {
        const newCart = cookieCart;

        const cartItemIndex = newCart.products.findIndex(
            (item) => item.id === cartItem.id
        );

        // TO DO: Make this reusable so I can use on the add/remove button later on
        // TO DO: Update the logic (dumb mode rn, but working! yay!) so I don't need to check for the quantity === 0
        if (cartItem.quantity === 0) {
            console.log(11111, newCart.total);
            const newProducts = cookieCart.products.filter(
                (item) => item.id !== cartItem.id
            ); // returns only the items that are not the current one that is set to 0
            newCart.products = newProducts;
            console.log(22222, `${newCart.total} - ${oldCartItem.total}`);
            newCart.total = newCart.total - oldCartItem.total;
            newCart.totalQtProducts =
                newCart.totalQtProducts - oldCartItem.quantity;

            cookieStore?.set('cart', JSON.stringify(newCart));
            return newCart;
        }

        newCart.products[cartItemIndex].quantity = cartItem.quantity;
        newCart.products[cartItemIndex].total = cartItem.total;
        newCart.total = newCart.total - oldCartItem.total + cartItem.total;
        newCart.totalQtProducts =
            newCart.totalQtProducts - oldCartItem.quantity + cartItem.quantity; // get the current item on the old cart, remove the old qt related to it from the cart, add the new qt;

        cookieStore?.set('cart', JSON.stringify(newCart));
        return newCart;
    }
}

export async function getCart() {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get('cart');

    // No cart available, return empty cart
    if (!cartCookie?.value) {
        const emptyCart = { products: [], total: 0, totalQtProducts: 0 };
        return emptyCart;
    }

    return JSON.parse(cartCookie?.value as string) as Cart;
}
