/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin   =  require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    //publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      //filename: '../index.html'
      hash: true,
    }),
    new CopyPlugin([
      {from : 'assets/favicon.ico'}
    ])
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader?gfm=false"
      },
      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: require.resolve("./loader.js") }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
