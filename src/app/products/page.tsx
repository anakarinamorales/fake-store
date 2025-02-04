import { Product } from './types';
import cardStyles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/api';

export default async function Products() {
    const products = await getProducts();

    return (
        <main>
            <h1>Products</h1>
            <ul className={cardStyles.cardList}>
                {products.map((item: Product) => (
                    <li className={cardStyles.cardItem} key={item?.id}>
                        <Image
                            src={item?.images?.[0]}
                            width={300}
                            height={340}
                            alt="Product image"
                        />
                        <h2>
                            <Link
                                className={cardStyles.cardLink}
                                href={`products/${item?.id}`}
                            >
                                {item?.title}
                            </Link>
                        </h2>
                    </li>
                ))}
            </ul>
        </main>
    );
}
