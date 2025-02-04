'use server';

import { cookies } from 'next/headers';
import { Product } from './products/types';

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

type CartProduct = {
    id: number,
    quantity: number,
    unitPrice: number
}

type Cart = {
    products: CartProduct[];
    total: number;
};

export async function addToCart(product: Product) {
     const cookieStore = await cookies();

     if (!cookieStore?.get('cart')?.value) {
         cookieStore.set('cart', '');
    }
    
    console.log(product);

    // const currentCart = cookieStore.get('cart')?.value;
    // currentCart?.split('')
    
}
