import { useState, useEffect, useCallback, useRef } from 'react';

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  
  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
  
  return [isHovered, hoverProps];
};

export const useLongPress = (callback = () => {}, ms = 300) => {
  const [isPressed, setIsPressed] = useState(false);
  const timerRef = useRef(null);
  
  const start = useCallback(() => {
    setIsPressed(true);
    timerRef.current = setTimeout(() => {
      callback();
    }, ms);
  }, [callback, ms]);
  
  const stop = useCallback(() => {
    setIsPressed(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  return {
    isPressed,
    longPressProps: {
      onMouseDown: start,
      onMouseUp: stop,
      onMouseLeave: stop,
      onTouchStart: start,
      onTouchEnd: stop,
    },
  };
};

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export const useDoubleClick = (onClick, onDoubleClick, latency = 250) => {
  const [clickCount, setClickCount] = useState(0);
  const timer = useRef();
  
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  
  const handleClick = useCallback(() => {
    setClickCount((prev) => prev + 1);
    
    if (clickCount === 0) {
      timer.current = setTimeout(() => {
        if (clickCount === 1) {
          onClick();
        }
        setClickCount(0);
      }, latency);
    } else if (clickCount === 1) {
      onDoubleClick();
      setClickCount(0);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    }
  }, [clickCount, latency, onClick, onDoubleClick]);
  
  return handleClick;
};

export const useDrag = (onDrag, onDragEnd) => {
  const [isDragging, setIsDragging] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    position.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);
  
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const dx = e.clientX - position.current.x;
    const dy = e.clientY - position.current.y;
    
    onDrag({ dx, dy });
    
    position.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, [isDragging, onDrag]);
  
  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    onDragEnd?.();
  }, [isDragging, onDragEnd]);
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);
  
  return {
    isDragging,
    dragProps: {
      onMouseDown: handleMouseDown,
    },
  };
};

export const useSwipe = (onSwipe, threshold = 50) => {
  const touchStart = useRef({ x: 0, y: 0 });
  const [isSwiping, setIsSwiping] = useState(false);
  
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
    setIsSwiping(true);
  }, []);
  
  const handleTouchMove = useCallback((e) => {
    if (!isSwiping) return;
    
    const touch = e.touches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    
    if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) {
      const direction = Math.abs(dx) > Math.abs(dy)
        ? dx > 0 ? 'right' : 'left'
        : dy > 0 ? 'down' : 'up';
      
      onSwipe(direction, { dx, dy });
      setIsSwiping(false);
    }
  }, [isSwiping, onSwipe, threshold]);
  
  const handleTouchEnd = useCallback(() => {
    setIsSwiping(false);
  }, []);
  
  return {
    isSwiping,
    swipeProps: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
}; 