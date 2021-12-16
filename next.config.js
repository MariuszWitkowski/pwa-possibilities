// @ts-check
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
});

module.exports = nextConfig;
