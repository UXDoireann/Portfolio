const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const WorkboxPlugin = require("workbox-webpack-plugin");


module.exports = {
    mode:'development',
    devtool:'source-map',
    entry: './src/client/index.js',
    devServer:{
      port:2000
    },
    output: {
      libraryTarget: 'var',
      library: 'Client'
  },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          outputPath: './media/icons', 
                          name: "[name].[ext]"
                      }
                      },
                    ],
                  },
                  {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }  
        ]
},
plugins:[
  new HtmlWebPackPlugin({
    template:"./src/client/views/index.html",
    filename:"./index.html",
  }),
  new HtmlWebPackPlugin({
    template:"./src/client/views/about.html",
    filename:"./about.html",
  }),
  new HtmlWebPackPlugin({
    template:"./src/client/views/projects.html",
    filename:"./projects.html",
  }),
  new HtmlWebPackPlugin({
    template:"./src/client/views/contact.html",
    filename:"./contact.html",
  }),
  new HtmlWebPackPlugin({
    template:"./src/client/views/cv.html",
    filename:"./cv.html",
  }),

  new CleanWebpackPlugin({
    // Simulate the removal of files
    dry: true,
    // Write Logs to Console
    verbose: true,
    // Automatically remove all unused webpack assets on rebuild
    cleanStaleWebpackAssets: true,
    protectWebpackAssets: false
}),

]
}