const path = require("path");


module.exports = {

   entry: {
            main: "./src/index.js",
            vendor: "./src/vendor.js",
             home: './app/home.js',
             about: './app/about.js',
             contact: './app/contact.js'
   },
   devtool: "inline-source-map",
   module: {
     rules: [
          {
               test: /\.(png|svg|jpg|gif)$/,
               use: {
                    loader: 'file-loader',
                    options: {
                       name: '[name].[hash].[ext]',
                    }
               }
          },
          {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
             }
            }
          }, 
          {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: { minimize: true }
          }
      ]
   }
};