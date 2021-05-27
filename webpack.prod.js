const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    mode:'production',
    entry: './src/client/index.js',
    optimization:{
      minimizer:[new OptimizeCSSAssetsPlugin({})]
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
                    test: /\.(png|jpe?g|jpg|gif|pdf)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          outputPath: './media', 
                          name: "[name].[ext]"
                      }
                      },
                      
                    ],
                  }, 
                 
                  {
                    test: /\.scss$/,
                    use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
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
  new HtmlWebPackPlugin({
    template:"./src/client/views/flyux.html",
    filename:"./flyux.html",
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
  new CleanWebpackPlugin({
    // Simulate the removal of files
    dry: true,
    // Write Logs to Console
    verbose: true,
    // Automatically remove all unused webpack assets on rebuild
    cleanStaleWebpackAssets: true,
    protectWebpackAssets: false
}),
new MiniCssExtractPlugin({filename:"[name].css"}),
//new CompressionPlugin()







]
}