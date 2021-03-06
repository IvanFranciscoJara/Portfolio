var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = env => {
  console.log('TIPO', env.TIPO)
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js'
    },
    // devtool: 'source-map',
    devtool: env.TIPO === 'local' ? 'source-map' : 'eval',
    devServer: {
      port: 9000,
      compress: true,
      hot: true,
      stats: 'errors-only',
      open: true
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(gif|svg|jpg|png)$/, loader: 'file-loader' }
      ]
    },
    mode: env.TIPO === 'local' ? 'development' : 'production',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
        GLOBAL_URL: JSON.stringify(env.TIPO === 'local' ? 'http://localhost:3005' : 'https://www.backendivan.com/')
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/imagenes'),
            to: path.resolve(__dirname, 'dist/imagenes')
          },
          {
            from: path.resolve(__dirname, 'src/manifest.json'),
            to: path.resolve(__dirname, 'dist/manifest.json')
          },
          {
            from: path.resolve(__dirname, 'src/robots.txt'),
            to: path.resolve(__dirname, 'dist/robots.txt')
          }
        ]
      })
    ]
  }
}
