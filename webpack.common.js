const path = require("path");
const webpack = require('webpack');
const loader = require("sass-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
     entry: {
              main: "./src/index.js",
              home: './src/app/home.js',
              contact: './src/app/contact.js',
              about: './src/app/about.js',
              project: './src/app/projects',
              vendor: "./src/vendor.js"
     },
     devtool: "source-map",
     module: {
       rules: [
          {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
               loader: 'babel-loader',
               options: {
                  
             }
            }
          },
            {
                 test: /\.(mp4|png|svg|jpg|gif|ogg)$/,
                 use: {
                      loader: 'file-loader',
                      options: {
                         name: '[name].[hash].[ext]'
                         
                      }
                    } 
               },
               {
                    test: /\.html$/,
                    loader: 'html-loader', 
                         options: {
                            minimize: true,
                            attributes: true,                           
                     }
               },
               {
                  test: /\.(mp4|mp3|ogg)$/,
                  use: 'file-loader?name=videos/[name].[ext]',
           },
        ]
     },
     optimization: {
        minimize: true,
         minimizer: [
            new TerserJSPlugin({
         test: /\.js(\?.*)?$/i,
         parallel: true,
      }), 
      new OptimizeCSSAssetsPlugin({ cache: true })
   ],
      runtimeChunk: 'single',
      splitChunks: {
        chunks (chunk) {
          // exclude `my-excluded-chunk`
          return chunk.name !== 'my-excluded-chunk';
        },
        cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
      }
      }
    },
     plugins: [ 
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        React: 'react',
        'react-dom': 'ReactDom'
      }),
       new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: true,
        template: './src/index.html',
        minify: true,
          
      }),
      new HtmlWebpackPlugin({
       filename: 'contact.html',
       template: './src/contact.html',
       inject: true,
       chunks: ['contact'],
       minify: true
     }),
     new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      inject: true,
      chunks: ['about'],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'project.html',
      template: './src/project.html',
      inject: true,
      chunks: ['project'],
      minify: true,
    }),
  ],
     //To generate JSON file containing webpack records
     recordsPath: path.join(__dirname, 'records.json'),
     name: 'admin-app'
};