const { repository } = require('./src/config');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const nextConfig = {
  assetPrefix: isProd ? `/${repository}` : '',
  basePath: isProd ? `/${repository}` : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = withNextra(nextConfig);
