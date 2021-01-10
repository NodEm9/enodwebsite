const path = require("path");
// const webpack = require('webpack');
const loader = require("sass-loader");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const  { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


 
module.exports = merge(common, {
    mode: 'production',
      cache: {
          type: 'filesystem'
      },
    output: {
         
         filename: '[name].[contenthash].bundle.js',
         libraryTarget: 'var',
         library:        'Client'
    },
    module: {
      rules: [
       
        {
            test: /\.scss$/,
            use: [
                  MiniCssExtractPlugin.loader, // Extracts Css in files
                 'css-loader', // Turns css into common.js
                 'sass-loader' // Turns sass into css          
         ]
        },
    ]
  },    
    plugins: [
          new CleanWebpackPlugin({}),
          new MiniCssExtractPlugin({ 
               filename: '[name].[contenthash].css',
               chunkFilename: '[id].[contenthash].css'
              })
       ]

});