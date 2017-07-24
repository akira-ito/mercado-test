const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Mercado Test',
  template: './src/index.html',
  filename: 'index.html',
  hash: true,
  inject: true,
})

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: process.env.ENV=='dev' ? 'http://localhost:8080/' : ''
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?sourceMap", "sass-loader?sourceMap", {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [autoprefixer]
                        }
                    }
                }]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader?name=public/images/[name].[ext]', 'image-webpack-loader']
      }
    ]
  },

  devServer: {
    contentBase: "../",
    historyApiFallback: true,
    inline: true  
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('./public/styles/main.css', {
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
                "> 5%",            // https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0
                "last 2 versions", // http://caniuse.com/
            ]
        })
        ]
      }
    }),
    new FaviconsWebpackPlugin('./src/public/img/logo@2x.png')
  ]
}