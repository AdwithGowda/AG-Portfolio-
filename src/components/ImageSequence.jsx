import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent } from 'framer-motion';

// Retrieve all frames in the asset folder dynamically
const imageModules = import.meta.glob('../assets/ezgif-frame-*.png', { eager: true });
const sortedImageUrls = Object.keys(imageModules)
  .sort()
  .map((key) => imageModules[key].default || imageModules[key]);

const ImageSequence = ({ scrollProgress, onProgress, onComplete }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  // Preload and cache all images on mount
  useEffect(() => {
    let loadedCount = 0;
    let isCancelled = false;
    const totalCount = sortedImageUrls.length;
    const loadedImages = new Array(totalCount);

    sortedImageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      
      const handleLoadOrError = () => {
        if (isCancelled) return;
        loadedCount++;
        const pct = Math.round((loadedCount / totalCount) * 100);
        
        if (onProgress) {
          onProgress(pct);
        }
        
        if (loadedCount === totalCount) {
          setLoaded(true);
          if (onComplete) {
            onComplete();
          }
        }
      };

      img.onload = handleLoadOrError;
      img.onerror = handleLoadOrError; // Ensure the loader doesn't get stuck if an image fails
      
      loadedImages[index] = img;
    });

    imagesRef.current = loadedImages;

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Canvas drawing function that behaves like object-cover
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    // Adjust canvas resolution for high-DPI/Retina screens
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Calculate scaling metrics for "object-cover" positioning
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Screen is wider than the image
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      // Screen is taller than the image
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Draw the first frame once loading completes
  useEffect(() => {
    if (loaded) {
      drawFrame(0);
    }
  }, [loaded]);

  // Subscribe to scroll progress updates to render frames
  useMotionValueEvent(scrollProgress, 'change', (latest) => {
    if (!loaded) return;

    const totalFrames = sortedImageUrls.length;
    const rawIndex = latest * (totalFrames - 1);
    const frameIndex = Math.min(Math.max(Math.round(rawIndex), 0), totalFrames - 1);

    requestAnimationFrame(() => {
      drawFrame(frameIndex);
    });
  });

  // Handle viewport resizing to redraw the current frame
  useEffect(() => {
    const handleResize = () => {
      if (!loaded) return;
      
      const latest = scrollProgress.get();
      const totalFrames = sortedImageUrls.length;
      const rawIndex = latest * (totalFrames - 1);
      const frameIndex = Math.min(Math.max(Math.round(rawIndex), 0), totalFrames - 1);
      
      drawFrame(frameIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded, scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ease-out"
      style={{ opacity: loaded ? 1 : 0 }}
    />
  );
};

export default ImageSequence;
