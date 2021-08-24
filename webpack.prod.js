const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  //  mode:'production'
  optimization: {
    // [...]
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  },
  mode: "production",
  output: {
    clean: true,
    filename: "main.[contenthash].js",
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
        loader: "file-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
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
      filename: "[name].[fullhash].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
