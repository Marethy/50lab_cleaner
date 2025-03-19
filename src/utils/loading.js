import { useState, useEffect, useCallback } from 'react';
import { useAnimation } from 'framer-motion';

export const useLoadingState = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState(null);
  const controls = useAnimation();

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
    controls.start('loading');
  }, [controls]);

  const stopLoading = useCallback((err = null) => {
    setIsLoading(false);
    setError(err);
    controls.start('complete');
  }, [controls]);

  return {
    isLoading,
    error,
    controls,
    startLoading,
    stopLoading,
  };
};

export const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  loading: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  complete: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export const spinnerVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const progressVariants = {
  initial: {
    width: '0%',
  },
  animate: (progress) => ({
    width: `${progress}%`,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

export const useLoadingProgress = (duration = 3000, steps = 100) => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps) {
        currentStep += 1;
        setProgress((currentStep / steps) * 100);
      } else {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [duration, steps]);

  useEffect(() => {
    controls.start({
      width: `${progress}%`,
      transition: { duration: 0.3, ease: 'easeOut' },
    });
  }, [progress, controls]);

  return { progress, controls };
};

export const useDelayedMount = (delay = 200) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldMount(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return shouldMount;
};

export const useLoadingTimeout = (timeout = 5000) => {
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasTimedOut(true), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return hasTimedOut;
};

export const skeletonVariants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
}; 