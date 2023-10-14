/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: 'http://127.0.0.1:8000/api'
  },
  images: {
    domains: ['assets.adidas.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
