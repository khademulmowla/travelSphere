import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference for dark mode
        const savedMode = localStorage.getItem('darkMode') === 'true';
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        setIsDarkMode(savedMode || systemPrefersDark);
    }, []);

    useEffect(() => {
        // Apply dark mode class to the <html> element
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    );
};

export default DarkModeToggle;