import { useState, useEffect, useCallback } from 'react';

export const useImagePreload = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const image = new Image();
    
    image.onload = () => {
      setIsLoaded(true);
      setError(null);
    };
    
    image.onerror = (err) => {
      setIsLoaded(false);
      setError(err);
    };
    
    image.src = src;
    
    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};

export const useProgressiveImage = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    
    img.onload = () => {
      setSrc(highQualitySrc);
    };
    
    return () => {
      img.onload = null;
    };
  }, [lowQualitySrc, highQualitySrc]);

  return src;
};

export const useImageComparison = (beforeSrc, afterSrc) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const loadImage = (src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      };

      await Promise.all([
        loadImage(beforeSrc),
        loadImage(afterSrc)
      ]);

      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, [beforeSrc, afterSrc]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return { isLoading, error };
};

export const generateBlurHash = async (imageSrc) => {
  // This is a placeholder for blur hash generation
  // You would need to implement the actual blur hash algorithm
  // or use a library like blurhash-wasm
  console.warn('Blur hash generation not implemented');
  return '';
};

export const optimizeImageUrl = (url, { width, height, quality = 75 } = {}) => {
  if (!url) return url;

  const params = new URLSearchParams();
  
  if (width) params.append('w', width);
  if (height) params.append('h', height);
  if (quality) params.append('q', quality);

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
};

export const getImageDimensions = (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
      });
    };
    
    img.onerror = reject;
    
    img.src = URL.createObjectURL(file);
  });
};

export const compressImage = async (file, { maxWidth = 1920, maxHeight = 1080, quality = 0.8 } = {}) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          resolve(new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          }));
        },
        file.type,
        quality
      );
    };
    
    img.onerror = reject;
  });
};

export const calculateAspectRatio = (width, height) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
}; 