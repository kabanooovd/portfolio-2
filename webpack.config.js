const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = (_, props) => {
  return {
    mode: props.mode, 
    target: "web",
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|ttf|woff2|svg)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      fallback: {
        "fs": false,
        "path": false,
        "crypto": false,
      },
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      props.mode === "production"
        ? new ModuleFederationPlugin({
          name: "portfol",
          filename: "remoteEntry.js",
          shared: {
            react: {
              singleton: true,
              requiredVersion: deps.react,
              eager: true,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
              eager: true,
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: deps["react-router-dom"],
              eager: true,
            },
          },
        })
        : () => {},
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
        publicPath: "/",
      }),
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new ESLintPlugin(),
    ],
  }
};