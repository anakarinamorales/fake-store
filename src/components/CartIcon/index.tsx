import Link from 'next/link';
import style from './CartIcon.module.css';
import { getCart } from '@/app/actions';

export default async function CartIcon() {
    const cart = await getCart();

    return (
        <Link className={style.container} href="/cart">
            <>
                {!!cart.products.length && <span>{cart.products.length}</span>}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="katman_1"
                    x="0"
                    y="0"
                    // style="enable-background:new 0 0 600 450"
                    version="1.0"
                    viewBox="0 0 600 450"
                >
                    <g id="Group_1575" transform="translate(.85 1.001)">
                        <path
                            id="Path_183"
                            d="M200.4 180.9H151c-7.8 0-14.1 6.3-14.1 14.1v14.1c0 7.8 6.3 14.1 14.1 14.1h42.4"
                            className={style.st0}
                        />
                        <path
                            id="Line_5"
                            d="M359.3 181.6H244.9"
                            className={style.st0}
                        />
                        <path
                            id="Path_184"
                            d="M405.2 223.3h42.4c7.8 0 14.1-6.3 14.1-14.1V195c0-7.8-6.3-14.1-14.1-14.1h-49.4"
                            className={style.st0}
                        />
                        <path
                            id="Path_185"
                            d="M440.5 223.3 416 333.8c-2.2 9.7-10.8 16.6-20.7 16.6h-192c-9.9 0-18.5-6.9-20.7-16.6l-24.5-110.5"
                            className={style.st0}
                        />
                        <path
                            id="Line_6"
                            d="M296.9 244v72.8"
                            className={style.st1}
                        />
                        <path
                            id="Line_7"
                            d="M338.5 244v72.8"
                            className={style.st1}
                        />
                        <path
                            id="Line_8"
                            d="m380.1 244-10.4 72.8"
                            className={style.st1}
                        />
                        <path
                            id="Line_9"
                            d="m255.3 244 10.4 72.8"
                            className={style.st1}
                        />
                        <path
                            id="Line_10"
                            d="m213.7 244 10.4 72.8"
                            className={style.st1}
                        />
                        <path
                            id="Line_11"
                            d="m255.3 98.4-41.6 104"
                            className={style.st1}
                        />
                        <path
                            id="Line_12"
                            d="m338.5 98.4 41.6 104"
                            className={style.st1}
                        />
                    </g>
                </svg>
            </>
        </Link>
    );
}
