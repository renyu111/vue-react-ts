const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
              ['@babel/preset-typescript']
            ],
            plugins: ['@emotion/babel-plugin']
          }
        },

        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.webpack.json' })],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/api': '/src/api',
      '@/global': '/src/global',
      '@/utils': '/src/utils'
    }
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'lib')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'demo', to: 'demo' }]
    }),
    new LoadablePlugin()
  ],
  performance: {
    maxAssetSize: 800000,
    maxEntrypointSize: 800000
  },
  externals: {},
  devServer: {
    static: path.join(__dirname, 'lib'),
    compress: true,
    port: 8081
  }
}
