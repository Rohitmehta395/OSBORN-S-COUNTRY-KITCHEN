/**
 * Configuration for the scroll-driven image sequence.
 * You can adjust the total frames, image padding width, and path format here.
 */
export const SEQUENCE_CONFIG = {
  // Total number of animation frames
  totalFrames: 215,
  
  // Character padding width (e.g. 3 for frame_001.webp, 5 for frame_00001.webp)
  paddingWidth: 5,
  
  // Directory where image frames are stored relative to the public/ directory
  frameDir: '/frames',
  
  // Original aspect ratio dimensions of the source frames
  imageWidth: 1920,
  imageHeight: 1080,

  // Scaling mode: 'cover' (fills screen), 'height' (fits to screen height), 'contain' (fits entire image)
  scaleMode: 'cover',

  // Image scale multiplier (e.g., 0.95 to shrink the rendering slightly to 95%)
  imageScale: 1.0,
  
  /**
   * Helper to format a frame index into its corresponding webp file path
   * @param {number} index - 1-based index of the frame (1 to totalFrames)
   * @returns {string} Path to the image asset
   */
  getFramePath(index) {
    const paddedIndex = String(index).padStart(this.paddingWidth, '0');
    return `${this.frameDir}/frame_${paddedIndex}.webp`;
  }
};
