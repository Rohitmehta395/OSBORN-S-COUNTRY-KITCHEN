"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { SEQUENCE_CONFIG } from './sequenceConfig';

/**
 * Custom hook to manage preloading and drawing the scroll-driven image sequence.
 * Handles performance, responsive resizing, retina sharpness, and error fallbacks.
 */
export default function useImageSequence() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    let active = true;
    const { totalFrames } = SEQUENCE_CONFIG;
    const preloadedImages = [];
    let loadedCount = 0;

    const handleImageLoad = () => {
      if (!active) return;
      loadedCount++;
      const progress = Math.round((loadedCount / totalFrames) * 100);
      setLoadingProgress(progress);

      if (loadedCount === totalFrames) {
        setImagesLoaded(true);
      }
    };

    const handleImageError = (path) => {
      console.warn(`Failed to preload image frame at: ${path}`);
      // Increment loaded count anyway to prevent freezing the UI on missing assets
      handleImageLoad();
    };

    // Preload each frame sequentially
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const path = SEQUENCE_CONFIG.getFramePath(i);
      
      img.src = path;
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(path);
      
      preloadedImages.push(img);
    }

    imagesRef.current = preloadedImages;

    return () => {
      active = false;
      // Detach event listeners to prevent memory leaks on unmount
      preloadedImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  /**
   * Performance-optimized canvas drawer.
   * Renders the specified frame using a right-aligned cover ratio.
   *
   * @param {HTMLCanvasElement} canvas - The canvas to draw on
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context
   * @param {number} index - The 0-based frame index to render
   */
  const drawFrame = useCallback((canvas, ctx, index) => {
    if (!canvas || !ctx) return;

    const img = imagesRef.current[index];

    // Retina support: Adjust canvas resolution to match physical device pixels
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;

    const targetWidth = displayWidth * dpr;
    const targetHeight = displayHeight * dpr;

    // Only update canvas dimensions if they changed (resizing)
    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    // If the image asset doesn't exist, isn't fully loaded, or has failed (broken/404, naturalWidth === 0)
    // Render a premium styled placeholder to avoid runtime InvalidStateError crashes
    if (!img || !img.complete || img.naturalWidth === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#F8F4EE';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid decorations
      ctx.strokeStyle = 'rgba(139, 69, 19, 0.05)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let xOffset = 0; xOffset < canvas.width; xOffset += step) {
        ctx.beginPath();
        ctx.moveTo(xOffset, 0);
        ctx.lineTo(xOffset, canvas.height);
        ctx.stroke();
      }
      for (let yOffset = 0; yOffset < canvas.height; yOffset += step) {
        ctx.beginPath();
        ctx.moveTo(0, yOffset);
        ctx.lineTo(canvas.width, yOffset);
        ctx.stroke();
      }

      ctx.fillStyle = '#8B4513';
      ctx.font = '300 24px Cormorant Garamond, serif';
      ctx.textAlign = 'right';
      ctx.fillText(`[Sequence Frame ${index + 1} Placeholder]`, canvas.width - 40, canvas.height / 2);
      ctx.font = '10px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = '#3A312A';
      ctx.fillText('Please place sequence frames in /public/frames/ directory', canvas.width - 40, canvas.height / 2 + 25);
      return;
    }

    const { imageWidth, imageHeight, scaleMode, imageScale } = SEQUENCE_CONFIG;

    // Calculate base scale according to configuration mode
    let baseScale = 1;
    if (scaleMode === 'cover') {
      baseScale = Math.max(canvas.width / imageWidth, canvas.height / imageHeight);
    } else if (scaleMode === 'contain') {
      baseScale = Math.min(canvas.width / imageWidth, canvas.height / imageHeight);
    } else {
      // Default to fitting the screen height exactly to eliminate vertical zoom/cropping
      baseScale = canvas.height / imageHeight;
    }

    // Apply the custom scale multiplier (e.g. 0.95 to show 95% of image size)
    const scale = baseScale * imageScale;
    const drawWidth = imageWidth * scale;
    const drawHeight = imageHeight * scale;

    // Right-aligned composition:
    // Locks the right side of the image to the right edge of the canvas
    // Centers the image vertically
    const x = canvas.width - drawWidth;
    const y = (canvas.height - drawHeight) / 2;

    // Clear previous drawing buffer and draw current frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  }, []);

  return {
    imagesLoaded,
    loadingProgress,
    images: imagesRef.current,
    drawFrame,
  };
}
