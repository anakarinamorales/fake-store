import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        Footer Link One →
      </a>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        Footer Link Two →
      </a>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        Footer Link Yay! →
      </a>
    </footer>
  );
}
