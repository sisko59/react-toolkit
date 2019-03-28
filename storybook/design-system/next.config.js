const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const { compose } = require('recompose');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const customConfig = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/get-started': { page: '/get-started' },
    '/atoms/button': { page: '/components/button' },
    '/style/icons': { page: '/components/icons' },
    '/style/colors': { page: '/components/colors' },
    '/atoms/list': { page: '/components/list' },
    '/atoms/badge': { page: '/components/badge' },
    '/atoms/drawer': { page: '/components/drawer' },
    '/atoms/popover': { page: '/components/popover' },
    '/atoms/slider': { page: '/components/slider' },
    '/atoms/loader': { page: '/components/loader' },
    '/atoms/title': { page: '/components/title' },
    '/molecules/title-bar': { page: '/components/title-bar' },
    '/molecules/alert': { page: '/components/alert' },
    '/molecules/pager': { page: '/components/pager' },
    '/molecules/table': { page: '/components/table' },
    '/molecules/form-text': { page: '/components/form-text' },
    '/molecules/form-select': { page: '/components/form-select' },
    '/molecules/form-radio-switch': {
      page: '/components/form-radio-switch',
    },
    '/molecules/form-textarea': { page: '/components/form-textarea' },
    '/molecules/form-checkbox': { page: '/components/form-checkbox' },
    '/molecules/form-radio': { page: '/components/form-radio' },
    '/molecules/form-file': { page: '/components/form-file' },
    '/molecules/form-pass': { page: '/components/form-pass' },
    '/molecules/form-datepicker': { page: '/components/form-datepicker' },
    '/molecules/tabs': { page: '/components/tabs' },
    '/molecules/steps': { page: '/components/steps' },
    '/molecules/steps-new': { page: '/components/steps-new' },
    '/organisms/panel': { page: '/components/panel' },
    '/organisms/paging': { page: '/components/paging' },
    '/organisms/accordion': { page: '/components/accordion' },
    '/organisms/navigation': { page: '/components/navigation' },
    '/organisms/header': { page: '/components/header' },
    '/organisms/footer': { page: '/components/footer' },
    '/organisms/footer-client': { page: '/components/footer-client' },
    '/organisms/modal': { page: '/components/modal' },
    '/organisms/restitution': { page: '/components/restitution' },
    '/organisms/form-card': { page: '/components/form-card' },
    '/organisms/form': { page: '/components/form' },
    '/organisms/form-filter': { page: '/components/form-filter' },
    '/organisms/form-filter-inline': {
      page: '/components/form-filter-inline',
    },
    '/layouts/form': { page: '/components/layout-form' },
    '/layouts/table': { page: '/components/layout-table' },
  }),
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders } = options;
    
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });

    config.module.rules.push({
      test: /\.pug$/i,
      use: {
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    });

    config.module.rules.push({
      test: /\.(eot|svg|ttf|woff|woff2|jpg|ico|png)$/,
      loader: 'file-loader',
      options: {
        publicPath: `/_next/static/files`,
        outputPath: 'static/files'
      }
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: './static/css/[name].css'
    }));

    return config;
  },
};

const enhance = compose(
  withCss,
  withSass
);

module.exports = enhance(customConfig);
