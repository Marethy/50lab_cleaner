export const lightTheme = {
  colors: {
    primary: {
      light: '#60a5fa',
      DEFAULT: '#3b82f6',
      dark: '#2563eb',
      gradient: 'from-blue-500 to-indigo-600',
      hover: 'from-blue-600 to-indigo-700',
    },
    secondary: {
      light: '#818cf8',
      DEFAULT: '#6366f1',
      dark: '#4f46e5',
      gradient: 'from-indigo-500 to-purple-600',
    },
    accent: {
      light: '#f472b6',
      DEFAULT: '#ec4899',
      dark: '#db2777',
      gradient: 'from-pink-500 to-rose-600',
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
    },
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
    },
    border: 'border-gray-200',
  },
  shadows: {
    sm: 'shadow-sm hover:shadow-md',
    DEFAULT: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl',
    inner: 'shadow-inner',
    glow: 'shadow-[0_0_15px_rgba(59,130,246,0.5)]',
  },
  transitions: {
    DEFAULT: 'transition-all duration-300',
    fast: 'transition-all duration-200',
    slow: 'transition-all duration-500',
  },
  blur: {
    sm: 'backdrop-blur-sm',
    DEFAULT: 'backdrop-blur',
    lg: 'backdrop-blur-lg',
  },
  borderRadius: {
    sm: 'rounded',
    DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full',
  },
  spacing: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    header: 'py-16 sm:py-24',
    section: 'py-12 sm:py-16',
    card: 'p-6',
  },
  typography: {
    heading: {
      h1: 'text-4xl font-bold tracking-tight',
      h2: 'text-3xl font-bold tracking-tight',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-semibold',
    },
    body: {
      DEFAULT: 'text-base',
      lg: 'text-lg',
      sm: 'text-sm',
    },
  },
  animation: {
    hover: {
      scale: 'hover:scale-105',
      lift: 'hover:-translate-y-1',
      glow: 'hover:shadow-glow',
    },
    transition: {
      DEFAULT: 'transition-all duration-300 ease-in-out',
      fast: 'transition-all duration-150 ease-in-out',
      slow: 'transition-all duration-500 ease-in-out',
    },
  },
  glassmorphism: {
    light: 'bg-white/30 backdrop-blur-sm',
    DEFAULT: 'bg-white/50 backdrop-blur',
    dark: 'bg-black/30 backdrop-blur',
  },
  cardVariants: {
    DEFAULT: (isDark) => `
      bg-white dark:bg-gray-800 
      shadow-lg hover:shadow-xl 
      rounded-xl 
      transition-all duration-300
      ${isDark ? 'border border-gray-700' : ''}
    `,
  },
  buttonVariants: {
    primary: (isDark) => `
      bg-gradient-to-r from-blue-500 to-indigo-600
      hover:from-blue-600 hover:to-indigo-700
      text-white font-medium
      rounded-lg px-4 py-2
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      ${isDark ? 'focus:ring-offset-gray-900' : ''}
    `,
    outline: (isDark) => `
      border ${isDark ? 'border-gray-600' : 'border-gray-300'}
      ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
      rounded-lg px-4 py-2
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      ${isDark ? 'focus:ring-offset-gray-900' : ''}
    `,
  },
};

export const darkTheme = {
  colors: {
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
    },
    border: 'border-gray-700',
  },
  typography: lightTheme.typography,
  spacing: lightTheme.spacing,
  cardVariants: lightTheme.cardVariants,
  buttonVariants: lightTheme.buttonVariants,
  glassmorphism: {
    light: 'bg-gray-900/30 backdrop-blur-sm',
    DEFAULT: 'bg-gray-900/50 backdrop-blur',
    dark: 'bg-black/50 backdrop-blur',
  },
};

export const containerVariants = {
  DEFAULT: lightTheme.spacing.container,
  section: `${lightTheme.spacing.container} ${lightTheme.spacing.section}`,
};

export const textVariants = {
  gradient: `bg-clip-text text-transparent bg-gradient-to-r`,
}; 