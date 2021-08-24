const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  //  mode:'production'
  
  mode: "development",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          // Disables attributes processing
          //   minimize:true,
          // true para minimmizar todo
          minimize: false,
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
       
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      //   template de donde lo tomas y filename a donde quieres colocarlo
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      // filename: "[name].[fullhash].css",
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" },
         
      ],
    }),
  ],
};
