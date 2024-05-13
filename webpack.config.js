import * as path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const __dirname = new URL('.', import.meta.url).pathname;

export default (env, argv) => {
  return {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: "assets/[name][ext]",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(pdf|jpg)$/,
          include: path.resolve(__dirname, "src"),
          type: "asset/resource",
          generator: {
            filename: "assets/[name][ext]",
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader'
            }
          ]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
    ],
  };
}
