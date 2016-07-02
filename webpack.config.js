var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./app/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/, loader: "ts-loader"
      },
      {
        test: /(pixi|phaser).js/, loader: "script"
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss-loader"]
      }
    ],
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {test: /\.js$/, loader: "source-map-loader"}
    ]
  },
  postcss: function() {
    return [precss, autoprefixer]
  }
};