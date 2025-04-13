/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temel optimizasyonlar
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnfonts.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
  
  // SVG'ler için webpack yapılandırması
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    
    return config;
  }
};

module.exports = nextConfig; 