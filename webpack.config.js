const path = require('path');

module.exports = {
   entry: {
      app: './src/index.js'
   },
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'src')
   },

   module: {
      rules: [{
         test: /\.js$/, // include .js files
         enforce: "pre", // preload the jshint loader
         exclude: /node_modules/, // exclude any and all files in the node_modules folder
         use: [{
            loader: "jshint-loader",
            options: {
               camelcase: true,
               emitErrors: false,
               failOnHint: false
            }
         }]
      }]
   },
};