const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist",
    open: "chrome",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ca]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /background.png$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]&esModule=false",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      header: { title: "Some Title" },
      template: "./src/index.html",
    }),
  ],
};
