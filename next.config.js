const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [],
  },

  // Enable service workers and offline support
  ...withOffline(),
};

module.exports = nextConfig;
