const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const FederatedTypesPlugin =
  require('@module-federation/typescript').FederatedTypesPlugin;

const isDevelopment = process.env.NODE_ENV !== 'production';
const deps = require('./package.json').dependencies;

const federationConfig = {
  name: 'ui',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button',
    './Icons': './src/components/Icons',
    './Text': './src/components/Text',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: deps['react-dom'],
    },
  },
};

const config = {
  mode: isDevelopment ? 'development' : 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'cloud.svg'),
    }),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    liveReload: true,
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@types': path.resolve(__dirname, 'src/@mf-types'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

module.exports = config;
