/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Disable image optimization
  },
  assetPrefix: "./", // Make sure assets load correctly on GitHub Pages
  trailingSlash: true, // Add trailing slashes to URLs for better GitHub Pages compatibility
  // If you have any other existing configuration, keep it here
};

export default nextConfig;
