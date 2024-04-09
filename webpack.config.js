import HtmlWebpackPlugin from 'html-webpack-plugin';

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
