/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This enables static HTML export
  images: {
    unoptimized: true, // 👈 Required if you're using <Image> in static export
  },
};

module.exports = nextConfig;
