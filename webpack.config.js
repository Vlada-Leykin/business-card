import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default (env, argv) => {
    return {
        module: {
            rules: [
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
