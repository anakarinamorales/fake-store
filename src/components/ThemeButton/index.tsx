'use client';
import { changeTheme } from '@/app/actions';

import style from './themeButton.module.css';
import MoonIcon from 'components/Icons/Moon';
import SunIcon from 'components/Icons/Sun';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<string | null>(null); // Start as `null`
    const [themeIcon, setThemeIcon] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const bodyClassList = document.querySelector('body')?.classList;
        const bodyTheme = bodyClassList?.[bodyClassList.length - 1] || 'light';
        setTheme(bodyTheme);
    }, []);

    useEffect(() => {
        if (theme) {
            setThemeIcon(theme === 'dark' ? <SunIcon /> : <MoonIcon />);
        }
    }, [theme]);

    return (
        <button
            className={`animatedButton ${style.themeButton}`}
            onClick={async () => await changeTheme()}
            aria-label="Toggle Theme"
        >
            {themeIcon}
        </button>
    );
};
