import { Product } from './types';
import cardStyles from './product.module.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'app/page.module.css';

const getData = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=25');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
};

export default async function Products() {
  const products = await getData();

  return (
    <main className={styles.mainContent}>
      <h1>Products</h1>
      <ul className={cardStyles.cardList}>
        {products.map((item: Product) => (
          <li className={cardStyles.cardItem} key={item?.id}>
            <Image
              src={item?.image}
              width={300}
              height={340}
              alt='Product image'
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
