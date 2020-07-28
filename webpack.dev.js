const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require('zlib');
const zopfli = require('@gfx/zopfli');



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
          amd: {
            jQuery: true
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
             new CompressionPlugin ({
               filename: '[path].gz[query]',
               algorithm: 'gzip',
               test: /\.js$|\.css$|\.html$/,
               threshold: 10240,
               minRatio: 0.8,
               algorithm(input, compressionOptions, callback) {
               return zopfli.gzip(input, compressionOptions, callback);
             }
           }),
           //Multiple compression of assets for different algorithm
           new CompressionPlugin({
             filename: '[path].br[query]',
             algorithm: 'brotliCompress',
             test: /\.(js|css|html|svg)$/,
             compressionOptions: {
               // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
               level: 11,
               numiterations: 15,
             },
             threshold: 10240,
             minRatio: 0.8,
             deleteOriginalAssets: false,
             include: /\/includes/,
             cache: true, 
             cache: 'path/to/cache'
            }),
        ]
       });