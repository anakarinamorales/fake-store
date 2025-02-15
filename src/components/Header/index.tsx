import CartIcon from 'components/Icons/CartIcon';

import style from './Header.module.css';
import Logo from 'components/Logo';
import NextLink from 'next/link';

export default function Header() {
    return (
        <>
            {/* TO DO: Make it accessible with aria title and hiding the svg logo from screen readers */}
            <NextLink href="/" className={style.logoLink}>
                <Logo />
            </NextLink>
            <header className={style.container}>
                <CartIcon />
            </header>
        </>
    );
}
