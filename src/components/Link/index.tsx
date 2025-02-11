import Link from 'next/link';

import style from './Link.module.css';

export default function AnchorLink({
    children,
    href = '/',
}: {
    children: React.ReactNode;
    href: string;
}) {
    return (
        <Link className={style.link} href={href}>
            {children}
        </Link>
    );
}
