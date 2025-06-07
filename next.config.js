/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Other config options can go here */
};

module.exports = {
  ...nextConfig,
  webpack(config, { isServer }) {
    // Modify the Webpack config for SVG handling
    config.module.rules.push({
      test: /\.svg$/, // Target SVG files
      use: ['@svgr/webpack'], // Use @svgr/webpack to convert SVG to React components
    });

    // Return the modified config
    return config;
  },
};