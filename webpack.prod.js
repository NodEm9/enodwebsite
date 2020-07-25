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
const zopfli = require('@gfx/zopfli');


module.exports = {
    mode: 'production',
    cache: 'false',
      cache: {
          type: 'filesystem'
      },
    output: {
         
         filename: '[name].[contenthash].bundle.js',
         path: path.resolve(__dirname, 'dist'),
         
    },
    optimization: {
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
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
          new CompressionPlugin({
            test: /\.js(\?.*)?$/,
            include: /\/includes/,
            threshold: 8192,
            compressionOptions: {
              numiterations: 15,
            },
            algorithm(input, compressionOptions, callback) {
              return zopfli.gzip(input, compressionOptions, callback);
            }
          })
       ],
    module: {
          rules: [
            {
                test: /\.scss$/i,
                use: [
                      MiniCssExtractPlugin.loader, // Extracts Css in files
                     'css-loader', // Turns css into common.js
                     'sass-loader' // Turns sass into css          
             ] 
            }
        ]
      },

};