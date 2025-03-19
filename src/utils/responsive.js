import { useState, useEffect } from 'react';

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < breakpoints.sm) {
      setBreakpoint('xs');
    } else if (windowSize.width < breakpoints.md) {
      setBreakpoint('sm');
    } else if (windowSize.width < breakpoints.lg) {
      setBreakpoint('md');
    } else if (windowSize.width < breakpoints.xl) {
      setBreakpoint('lg');
    } else if (windowSize.width < breakpoints['2xl']) {
      setBreakpoint('xl');
    } else {
      setBreakpoint('2xl');
    }
  }, [windowSize.width]);

  return breakpoint;
};

export const useResponsiveValue = (values) => {
  const breakpoint = useBreakpoint();
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  
  if (!values) return null;
  
  const currentBreakpointIndex = breakpointOrder.indexOf(breakpoint);
  
  // Find the closest defined breakpoint value
  for (let i = currentBreakpointIndex; i >= 0; i--) {
    const value = values[breakpointOrder[i]];
    if (value !== undefined) return value;
  }
  
  return values.default || null;
};

export const useIsMobile = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'xs' || breakpoint === 'sm';
};

export const useIsTablet = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'md';
};

export const useIsDesktop = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl';
};

export const getResponsiveClasses = (baseClasses, responsiveClasses) => {
  if (!responsiveClasses) return baseClasses;

  const classes = [baseClasses];
  
  Object.entries(responsiveClasses).forEach(([breakpoint, value]) => {
    if (value) {
      classes.push(`${breakpoint}:${value}`);
    }
  });

  return classes.join(' ');
};

export const useElementSize = (ref) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}; 