'use strict'

const webpack = require('webpack')
const pkg = require('./package.json')
const env = process.env.NODE_ENV

const config = {
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'ReduxFirebase',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false,
      },
    }),
  );
}

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  }),
  new webpack.BannerPlugin(
    {
      banner: `${pkg.name}${env === 'production' ? '.min' : ''}.js v${pkg.version}`,
      raw: false,
      entryOnly: true
    }
  )
)

module.exports = config
