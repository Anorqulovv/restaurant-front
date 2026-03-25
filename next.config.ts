/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anorkhulov.uz', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
