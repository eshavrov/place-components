const path = require('path');
const postCSSLoaderOptions = require('./postCSSLoaderOptions');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [path.resolve(__dirname, '../assets/icons')],
        options: {
          extract: false,
          runtimeCompat: true,
          esModule: false,
          spriteFilename: 'icons.svg',
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: postCSSLoaderOptions,
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/?!(@place-app)/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
    ],
  },
};
