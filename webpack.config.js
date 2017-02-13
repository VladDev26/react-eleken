var path = require('path');
var webpack = require('webpack');


var production = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});


module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.join(__dirname, "assets"),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react', 'stage-2'] }
      },
      
      { 
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'] 
      },
      { 
        test: /\.scss$/i, 
        use: ['style-loader', 'css-loader', 'sass-loader'] 
      }
    ],
  },
  plugins: [
    production,
    new webpack.optimize.UglifyJsPlugin()
  ]
};

