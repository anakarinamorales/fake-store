import { headers } from 'next/headers';
import { Product } from 'app/products/types';
import Image from 'next/image';
import styles from 'app/page.module.css';

const getProduct = async (productId: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
};

export default async function ProductPage() {
  const headerList = headers();
  const pathname = headerList.get('x-current-path');

  const product: Product = await getProduct(
    Number(pathname?.split('/products/')[1])
  );


  return (
    <main className={styles.mainContent}>
      <Image src={product?.image} width={300} height={340} alt='Product image' />
      <h1>{product.title}</h1>
      <p>{product?.description}</p>
      <span>{product.price}</span>
      <span>{product.category}</span>
      <button className={styles.cta}>Add to cart</button>
    </main>
  );
}
