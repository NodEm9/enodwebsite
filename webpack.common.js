const path = require("path");
const Handlebars = require('handlebars');




module.exports = {

   entry: {
            main: "./src/index.js",
            vendor: "./src/vendor.js",
            home: './src/app/home.js',
            contact: './src/contact.js',
            about: './src/app/about.js',
            
          
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
                    test: /\.html$/i,
                    use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
                    options: { 
                         root: '.',
                         minimize: true,
                         esModule: 'true',
                         preprocessor: async (content, loaderContext) => {
                              let result;
                  
                              try {
                                result = await Handlebars.compile(content)({
                                  firstname: 'Value',
                                  lastname: 'OtherValue',
                                });
                              } catch (error) {
                                await loaderContext.emitError(error);
                  
                                return content;
                              }
                  
                              return result;
                            }
               }
          }
      ]
   },
   //To generate JSON file containing webpack records
   recordsPath: path.join(__dirname, 'records.json'),
   name: 'admin-app'
};