const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
          mode: "development",
          cache: 'true',
          cache: {
              type: 'memory'
          },
          output: {
           filename: "[name].bundle.js",
           path: path.resolve(__dirname, "dist")
         //   libraryTarget: 'var',
         //   library: 'Client'
          },
          module: {
             rules: [
                {
                   test: /\.scss$/,
                   use: [
                         'style-loader',// Move css into DOM
                         'css-loader', // Turns css into common.js
                         'sass-loader'// Turns sass into css
                   ]
                 }
             ]
          },
          plugins: [
            new CleanWebpackPlugin({}),
           new MiniCssExtractPlugin({ 
            filename: '[name].css',
            // chunkFilename: '[id].css'
           })
          ] 
       });