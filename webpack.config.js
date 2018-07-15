const webpack = require('webpack');
const path = require('path');
const bundlePath = path.resolve(__dirname, 'public/');

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: [ "env", "react", "es2015", "stage-2"] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: [ "*", ".js", ".jsx"] },
  output: {
    path: bundlePath,
    filename: "bundle.js"
  }
}