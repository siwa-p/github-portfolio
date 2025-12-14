// Get the base URL based on environment
export const getBaseUrl = () => {
  return import.meta.env.BASE_URL || '/';
};

// Get a full URL with the correct base path
export const getAssetUrl = (path) => {
  const base = getBaseUrl();
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
};
