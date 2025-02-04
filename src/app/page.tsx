import Logo from 'components/Logo';
import styles from './page.module.css';
import Footer from 'components/Footer';
import { ThemeToggle } from 'components/ThemeButton';

export default async function Home() {
    return (
        <>
            <ThemeToggle />
            <main className={styles.mainContent}>
                {/* hide this from screen readers */}
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        display: 'block',
                        margin: 'auto',
                        background: 'var(--color-background)',
                        fontFamily: 'var(--font-raleway-mono), sans-serif',
                        padding: '4px',
                        borderRadius: '4px',
                        border: '2px dashed var(--color-foreground)',
                    }}
                >
                    <Logo />
                </div>
                {/* hide this from normal user, keeping it for screen readers/navigation */}
                <h1>A Store</h1>
                <article>
                    <h2>Who we are?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <a className={styles.cta} href="/products">
                        Check out our products
                    </a>
                </article>

                <article>
                    <h2>Buying green!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    <a className={styles.cta} href="/products">
                        Check out our products
                    </a>
                </article>
            </main>

            <Footer />
        </>
    );
}
