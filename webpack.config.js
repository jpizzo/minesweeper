const webpack = require('webpack');
const path = require('path');
const bundlePath = path.resolve(__dirname, 'public/');

module.exports = {
  entry: ".src/index.jsx",
  mode: "development",
  module: {
    rule: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: [ "env", "react"] }
      },
      {
        test: /\.css$/,
        use: [ "css-loader", "style-loader" ],
      }
    ]
  },
  resolve: { extensions: [ "*", ".js", ".jsx"] },
  output: {
    path: bundlePath,
    filename: "bundle.js"
  }
}