// entry --> output
const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  // Configuration for babel
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  // Source map for track error which file
  devtool: "cheap-module-eval-source-map",
  // Configuration for development server
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
};

// loader
