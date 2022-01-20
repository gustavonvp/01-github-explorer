
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports =  {
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

        plugins: [
            new webpack.ProvidePlugin({
               "React": "react",
            }),

            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                scriptLoading: 'defer',
            })
         ],
      
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',

                }
            ],
        }
        
}