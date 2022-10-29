const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "vanillaJS app",
      template: path.resolve(__dirname, "src", "index.html"),
      favicon: "./src/logo.svg",
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  performance: {
    hints: false,
  },
  mode: "production",
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = webpackConfig;
