import { headers } from 'next/headers';
import { Product } from '@/app/products/types';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import { getProduct } from '@/api';
import ProductForm from 'components/ProductForm';

export default async function ProductPage() {
    const headerList = headers();
    const pathname = headerList.get('x-current-path');

    const product: Product = await getProduct(
        Number(pathname?.split('/products/')[1])
    );

    const productImage = product.image;

    return (
        <main className={styles.mainContent}>
            <Image
                src={productImage}
                width={300}
                height={340}
                alt="Product image"
            />
            <h1>{product.title}</h1>
            <p>{product?.description}</p>
            <span>{product.price}</span>
            <span>{product.category}</span>
            <ProductForm product={product} />
        </main>
    );
}
