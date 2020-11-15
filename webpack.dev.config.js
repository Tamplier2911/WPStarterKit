const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry
  entry: path.resolve(__dirname, './src/index.js'),

  // output
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '',
  },

  // mode
  mode: 'development',

  // dev server setup
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    port: 3000,
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },

  // plugins
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(__dirname, 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: './public/index.html',
      description: 'Description.',
    }),
  ],
};
