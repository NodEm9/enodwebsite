const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");




module.exports = merge(common, {
          mode: "development",
          cache: 'true',
          cache: {
              type: 'memory'
          },
          output: {
           filename: "[name].bundle.js",
           path: path.resolve(__dirname, "dist")        
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
             new MiniCssExtractPlugin({}),
             new HtmlWebpackPlugin({
                template: "./src/template.html"
             }),
             new CompressionPlugin({
               test: /\.js(\?.*)?$/i,
               include: /\/includes/,
               threshold: 8192,
               compressionOptions: {
                 numiterations: 15,
               }
             })
        ]
       });