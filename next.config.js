const { withFaust, getWpHostname } = require('@faustwp/core');
const { createSecureHeaders } = require('next-secure-headers');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        type: 'asset/resource',
        generator: {
            filename: 'static/chunks/[path][name].[hash][ext]'
        },
    });

        return config;
    },
  async headers() {
    return [{ source: '/:path*', headers: createSecureHeaders({
      xssProtection: false
    }) }];
  },
});
