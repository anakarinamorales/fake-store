'use client';
import { changeTheme } from '@/app/actions';

export const ThemeToggle = () => {
    return (
        <button
            className={`cta`}
            onClick={async () => await changeTheme()}
            aria-label="Toggle Theme"
        >
            Change theme
        </button>
    );
};
