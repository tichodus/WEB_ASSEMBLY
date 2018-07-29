const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const METADATA = {
  DIST: path.resolve(__dirname, "dist"),
  EMCC: "~/Tools/emsdk/emscripten/1.38.10/emcc",
  EMCCFLAGS: process.env.EMCCFLAGS || ['-O3'],
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 9000
};



module.exports = {
  entry: "./src/index.js",
  output: {
    path: METADATA.DIST,
    filename: "bundle.[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "react"]
          }
        }
      },
      {
        test: /\.(c|cpp)$/,
        use: {
          loader: "cpp-wasm-loader",
          options: {
            publicPath: METADATA.DIST,
            emccFlags: [METADATA.EMCCFLAGS]
          }
        }
      }
    ]
  },
  externals: {
    fs: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WASM Calculator',
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body',
    })
  ],
  devServer: {
    host: METADATA.HOST,
    port: METADATA.PORT,

    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "src")
  }
};
