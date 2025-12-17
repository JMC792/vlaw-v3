const createNextIntlPlugin = require('next-intl/plugin');
 
// Let next-intl auto-detect i18n/request.ts in the project root
const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      }
    ]
  }
};


module.exports = withNextIntl(nextConfig);
