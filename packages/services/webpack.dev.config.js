const path = require('path');
const NpmDtsPlugin = require('npm-dts-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    library: 'services',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './lib'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.es', '.es6', '.mjs']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          failOnError: true
        }
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/typescript'],
          ignore: [
            '**/*.test.ts',
            '**/*.test.tsx',
            '**/*.spec.ts',
            '**/*.spec.ts'
          ],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
            '@babel/plugin-transform-modules-commonjs'
          ]
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new NpmDtsPlugin({
      logLevel: 'warn'
    })
  ]
};
