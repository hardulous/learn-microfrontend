const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Container",  
      remotes: {
        products: "Product@http://localhost:3001/ProductRemoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
