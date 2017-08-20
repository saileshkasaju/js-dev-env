import path from 'path';
import webpack from 'webpack';

const devConfig = {
  debug: true,
  devtools: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, '../src/index'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    // Eliminate duplicate package when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}

export default devConfig;
