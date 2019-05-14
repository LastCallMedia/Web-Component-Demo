
const {resolve, join} = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OUTPUT_PATH = resolve('dist'); //resolve('dist');
const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';
const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }
];


module.exports = {
  mode: 'production',
  entry: {
    native: './src/components.native.js',
    litelement: './src/components.litelement.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: OUTPUT_PATH,
  },
  plugins: [
    new CopyWebpackPlugin(polyfills)
  ],
  devServer: {
    contentBase: join('dist'),
  }
}
