'use client';
import { changeTheme } from '@/app/actions';

import style from './themeButton.module.css';
import MoonIcon from 'components/Icons/Moon';
import SunIcon from 'components/Icons/Sun';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const bodyClassList = document?.querySelector('body')?.classList;
        const bodyTheme = bodyClassList?.[bodyClassList.length - 1];
        return bodyTheme;
    });

    const [themeIcon, setThemeIcon] = useState(() =>
        theme === 'dark' ? <SunIcon /> : <MoonIcon />
    );

    useEffect(() => {
        const bodyClassList = document.querySelector('body')?.classList;
        const bodyTheme = bodyClassList?.[bodyClassList.length - 1];
        if (theme !== bodyTheme) {
            setTheme(bodyTheme);
        }
    }, [theme]);

    useEffect(() => {
        const bodyClassList = document.querySelector('body')?.classList;
        const bodyTheme = bodyClassList?.[bodyClassList.length - 1];
        console.log(theme, bodyTheme);
            setThemeIcon(theme === 'dark' ? <SunIcon /> : <MoonIcon />);
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
