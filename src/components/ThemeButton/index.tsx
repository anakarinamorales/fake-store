'use client';
import { changeTheme } from '@/app/actions';

import globalStyles from "@/app/page.module.css";

import styles from "./themeButton.module.css";

export const ThemeToggle = () => {
  return (
    <button
      className={`${globalStyles.cta} ${styles.themeButton}`}
      onClick={async () => await changeTheme()}
      aria-label='Toggle Theme'
    >
      Change theme
    </button>
  );
};
