import { SetStateAction, useEffect, useState } from 'react';
const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = (mode: SetStateAction<string>) => {
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    const themeSetter = (mode: SetStateAction<string>) => {
        setMode(mode)
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, themeSetter, mountedComponent]
};

export default useDarkMode;