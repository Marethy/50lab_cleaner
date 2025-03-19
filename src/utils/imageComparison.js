import { useState, useEffect, useCallback } from 'react';

export const useImageComparison = (containerRef) => {
  const [isComparing, setIsComparing] = useState(false);
  const [comparePosition, setComparePosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setIsComparing(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setComparePosition(percentage);
  }, [isDragging, containerRef]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setIsComparing(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setComparePosition(percentage);
  }, [isDragging, containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [
    containerRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove
  ]);

  const getComparisonStyles = useCallback((isAfterImage = false) => {
    if (!isComparing) return {};

    return {
      clipPath: isAfterImage
        ? `inset(0 ${100 - comparePosition}% 0 0)`
        : `inset(0 0 0 ${comparePosition}%)`,
    };
  }, [isComparing, comparePosition]);

  const getSliderStyle = useCallback(() => {
    return {
      left: `${comparePosition}%`,
    };
  }, [comparePosition]);

  return {
    isComparing,
    comparePosition,
    isDragging,
    getComparisonStyles,
    getSliderStyle,
    setIsComparing,
  };
}; 