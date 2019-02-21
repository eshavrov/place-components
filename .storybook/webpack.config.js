const postCSSLoaderOptions = require('./postCSSLoaderOptions');

module.exports = {
  module: {
    rules: [
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
