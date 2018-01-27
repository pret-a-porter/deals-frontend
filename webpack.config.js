const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'src')
        ],
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]__[local]--[hash:base64:5]',
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(path.join(__dirname, 'dist')),
    hot: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new HtmlPlugin({
      title: 'Deals',
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
};
