import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.2, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else if (!triggerOnce) {
      controls.start('initial');
    }
  }, [controls, inView, triggerOnce]);

  return [ref, controls];
};

export const scrollAnimationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  slideInFromBottom: {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  },
  staggerChildren: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }
};

export const useParallaxScroll = (speed = 0.5) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !inView) return;
      
      const scrollY = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const offsetY = (rect.top + scrollY) * speed;
      
      controls.set({ y: -offsetY });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, inView, speed, controls]);

  return [ref, controls];
};