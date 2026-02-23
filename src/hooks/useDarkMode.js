import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    // 1. Initialize state from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'dark';

        const saved = localStorage.getItem('theme');
        if (saved) return saved;

        // If no preference, check system
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    // 2. Update HTML class whenever theme changes
    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        // Persistent storage
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
};
