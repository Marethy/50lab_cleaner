export const THEME_STORAGE_KEY = 'theme-preference';

export const getInitialTheme = () => {
  // Check if theme preference is stored
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme) {
    return storedTheme === 'dark';
  }

  // Check system preference
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return false; // Default to light theme
};

export const setThemeClass = (isDark) => {
  const root = window.document.documentElement;
  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(isDark ? 'dark' : 'light');
};

export const saveThemePreference = (isDark) => {
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
};

export const getThemeColors = (isDark) => ({
  background: isDark ? '#1a1a1a' : '#ffffff',
  text: isDark ? '#ffffff' : '#1a1a1a',
  primary: {
    light: isDark ? '#0ea5e9' : '#0284c7',
    main: isDark ? '#0284c7' : '#0369a1',
    dark: isDark ? '#0369a1' : '#075985',
  },
  secondary: {
    light: isDark ? '#8b5cf6' : '#7c3aed',
    main: isDark ? '#7c3aed' : '#6d28d9',
    dark: isDark ? '#6d28d9' : '#5b21b6',
  },
  surface: isDark ? '#2a2a2a' : '#f5f5f5',
  border: isDark ? '#404040' : '#e5e5e5',
  shadow: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)',
});