/**
 * Cloudinary Media Pipeline Configuration
 * Provides centralized media URL generation with f_auto, q_auto, responsive widths,
 * and reliable high-fidelity architectural media fallbacks.
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'raydan-constructions';
const BASE_CLOUDINARY_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Builds an optimized Cloudinary media URL with automatic quality & format.
 * @param {string} publicId - The Cloudinary asset path (e.g., 'RAYDAN_CONSTRUCTIONS/hero/hero-video')
 * @param {object} options - Options such as width, height, crop, quality, format
 * @returns {string} Fully qualified media URL
 */
export function getCloudinaryUrl(publicId, options = {}) {
  if (!publicId) return '';

  // If already an absolute URL (e.g. curated luxury architecture asset), return directly or with query params
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    gravity = 'auto'
  } = options;

  const transforms = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop && (width || height)) transforms.push(`c_${crop}`);
  if (gravity && crop) transforms.push(`g_${gravity}`);

  const transformString = transforms.join(',');
  const cleanPath = publicId.startsWith('/') ? publicId.slice(1) : publicId;

  return `${BASE_CLOUDINARY_URL}/image/upload/${transformString}/${cleanPath}`;
}

/**
 * Builds an optimized Cloudinary video stream URL.
 */
export function getCloudinaryVideoUrl(publicId) {
  if (!publicId) return '';
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }
  const cleanPath = publicId.startsWith('/') ? publicId.slice(1) : publicId;
  return `${BASE_CLOUDINARY_URL}/video/upload/f_auto,q_auto/${cleanPath}`;
}

export default {
  getCloudinaryUrl,
  getCloudinaryVideoUrl,
};
