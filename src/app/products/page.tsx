import { Product } from './types';
import cardStyles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/api';
import Card from 'components/Card';

export default async function Products() {
    const products = await getProducts();

    return (
        <main>
            <h1>Products</h1>

            <ul className={cardStyles.cardList}>
                {products.map((item: Product, index: number) => (
                    <li key={item?.id}>
                        <Link
                            className={cardStyles.cardLink}
                            href={`products/${item?.id}`}
                        >
                            <Card
                                content={
                                    <Image
                                        src={item?.image}
                                        width={200}
                                        height={215}
                                        alt="Product image"
                                        priority={index < 8}
                                    />
                                }
                                title={item?.title}
                                tags={[item?.category]}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
