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
