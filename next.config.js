/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Note: This feature is required to use NextJS Image with static export
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 