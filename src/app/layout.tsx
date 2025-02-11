import type { Metadata } from 'next';

import localFont from 'next/font/local';
import './globals.css';
import { cookies } from 'next/headers';
import Header from 'components/Header';
import Footer from 'components/Footer';

const geistSans = localFont({
    src: 'fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

const geistMono = localFont({
    src: 'fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

const raleway = localFont({
    src: 'fonts/Raleway.woff',
    variable: '--font-raleway-mono',
    weight: '100 700 900',
});

export const metadata: Metadata = {
    title: 'AStore - The store of your dreams',
    description: 'A store app using fake-store API.',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const defaultTheme = 'light';
    const getTheme = async () => {
        const cookieStore = await cookies();
        const savedUserTheme = cookieStore.get('theme')?.value;

        return savedUserTheme || defaultTheme;
    };

    const theme = await getTheme();

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased ${theme}`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
