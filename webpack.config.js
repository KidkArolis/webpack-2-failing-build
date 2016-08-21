module.exports = {
  context: __dirname,
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'postcss'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')()
    ]
  }
}
