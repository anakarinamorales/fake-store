'use server';

import { cookies } from "next/headers";

export async function changeTheme() { 
    const cookieStore = await cookies();

    cookieStore.set('theme', 'light');
}