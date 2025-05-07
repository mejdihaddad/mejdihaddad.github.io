/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  images: {
    unoptimized: true, // Disable image optimization
  },
  assetPrefix: "/", // CHANGED: Must be "/" instead of "./"
  trailingSlash: true, // Add trailing slashes for better GitHub Pages compatibility
  // If you have any other existing configuration, keep it here
};

export default nextConfig;
