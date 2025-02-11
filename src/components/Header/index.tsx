import CartIcon from 'components/CartIcon';
import { ThemeToggle } from 'components/ThemeButton';

import style from './Header.module.css';
import Logo from 'components/Logo';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            {/* TO DO: Make it accessible with aria title and hiding the svg logo from screen readers */}
            <Link href="/" className={style.logoLink}>
                <Logo />
            </Link>
            <header className={style.container}>
                <ThemeToggle />
                <CartIcon />
            </header>
        </>
    );
}
