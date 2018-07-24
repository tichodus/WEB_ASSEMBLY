const path = require('path');

const METADATA = {
  DIST: path.resolve(__dirname, 'dist'),
  EMCC: process.env.EMCCPATH || '/usr/lib/emscripten/emcc',
  EMCCFLAGS: process.env.EMCCFLAGS || '-O3'
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: METADATA.DIST,
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
          }
        }
      },
      {
        test: /\.(c|cpp)$/,
        use: {
          loader: 'cpp-wasm-loader',
          options: {
            publicPath: METADATA.DIST,
            emccPath: METADATA.EMCC,
            emccFlags: [METADATA.EMCCFLAGS]
          }
        }
      }
    ],
  },
  externals: {
    'fs': true
  }
};
