import { getCart } from '@/app/actions';

export default async function CartPage() {
    const cart = await getCart();

    return (
        <main>
            <h1>Cart</h1>

            <ul>
                <h2>Items</h2>
                {cart.products.map((item) => (
                    <li key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </li>
                ))}
            </ul>
            <hr />
            <p>TOTAL: {cart.total}</p>
        </main>
    );
}
