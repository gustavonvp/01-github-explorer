
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmpreact-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';



module.exports =  {
        mode: isDevelopment ?  'development' : 'production',
        devtool: isDevelopment ? 'eval-source-map' : 'source-map',
        entry: [
            path.resolve(__dirname, 'src', 'index.jsx'),
            
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        
        },
        resolve: {
            extensions: [
                '.js', '.jsx'
            ],
        },

        devServer: {
            static: './public',
            hot: true,
          },

        plugins: [
            isDevelopment && new ReactRefreshWebpackPlugin(),

            new webpack.ProvidePlugin({
               "React": "react",
            }),

            new HtmlWebpackPlugin({
                 
                template: path.resolve(__dirname, 'public', 'index.html'),
                scriptLoading: 'defer',
            }),
            
         ].filter(Bollean),
      
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                    option: {
                        plugins : [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }

                },
                // {
                //     test: /\.css$/,
                //     exclude: /node_modules/,
                //     use: ['style-loader', 'css-loader'],

                // },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],

                }
            ],
        }
        
}