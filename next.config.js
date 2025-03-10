/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fixes image optimization issues in static builds
  },
};

module.exports = nextConfig;
