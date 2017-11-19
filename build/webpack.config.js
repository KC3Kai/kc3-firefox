const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    service: ['./src/service/index.js'],
    dmm: ['./src/content/dmm.js'],
    osapi: ['./src/content/osapi.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'release')
  },
  module: {
    rules: [
      { // Babel JS
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        },
        exclude: /(node_modules|bower_components)/
      },
      { // Global Styles
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        include: [ path.resolve(__dirname, "../src/content/assets/scss") ]
      },
      { // Theme Styles
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader/useable' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        include: [ path.resolve(__dirname, "../src/content/themes") ]
      },
      { // Images
        test: /\.(png|jpg)$/,
        use: [
          { loader: 'file-loader', options: { outputPath: 'assets/' } }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./release','./release.zip']),
    new CopyWebpackPlugin([
      { from: './src/manifest.json', to: 'manifest.json' },
    ]),
    new ZipPlugin({
      path: '../',
      filename: 'release.zip',
    }),
    new HtmlWebpackPlugin()
  ]
}
