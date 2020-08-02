const path = require("path");
const loader = require("sass-loader");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const  { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const Handlebars = require('handlebars');
const zlib = require('zlib');
const zopfli = require('@gfx/zopfli');


module.exports = {
    mode: 'production',
    cache: 'false',
      cache: {
          type: 'filesystem',
          name: 'AppBuildCache',
          store: 'pack',
          idleTimeout: 10000,
          hashAlgorithm: 'md4',
          cacheDirectory: path.resolve(__dirname, '.temp_cache')
      },
    output: {
         
         filename: '[name].[contenthash].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: 'http://cdn.nodbey.com/[hash]/'

         
    },    
    optimization: {
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
        },
        amd: {
          jQuery: true
        },
        plugins: [
          new MiniCssExtractPlugin({ filename: '[name].[contentHash].css'}),
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
               template: './src/template.html',
               minify: {
                    removeAttributeQuote: true,
                    collapseWhitespace: true,
                    removeComments: true
                 }
             
          }),
          new HtmlWebpackPlugin({
            template: './src/template.contact.html',
            minify: {
                 removeAttributeQuote: true,
                 collapseWhitespace: true,
                 removeComments: true
              }
          
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
       ],
    module: {
          rules: [
            { test: /\.jpg$/, loader: 'file-loader' },
            { test: /\.png$/, loader: 'url-loader' },   
            {
                test: /\.scss$/,
                use: [
                      MiniCssExtractPlugin.loader, // Extracts Css in files
                     'css-loader', // Turns css into common.js
                     'sass-loader' // Turns sass into css          
             ]
            }
        ]
      },

};