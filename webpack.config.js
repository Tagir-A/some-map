var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/script.js",
	module: {
  	loaders: [
    { test: /\.jsx?$/,
		 exclude: /node_modules/,
		 loader: "babel-loader",
		 query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
        }
		}
		
  ]
	},
  output: {
    path: __dirname,
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};