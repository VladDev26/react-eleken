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
    path: 'assets',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-2'] }
      },
      
      { test: /\.css$/i, loader: 'style-loader!css-loader' },
      { test: /\.scss$/i, loader: 'style-loader!css-loader!sass-loader' },

      // IMAGES
      { 
        test: /.*\.(gif|png|jpe?g|svg)$/i, 
        loaders: [
          "file?name=img/[name].[ext]",
          // "image-webpack?optimizationLevel=7&progressive=true"
        ]
      },

    ],
  },
  plugins: [
    // production,
    // new webpack.optimize.UglifyJsPlugin()
  ]
};





