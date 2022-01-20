
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports =  {
        mode: 'development',
        devtool: 'eval-source-map',
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
          },

        plugins: [
            new webpack.ProvidePlugin({
               "React": "react",
            }),

            new HtmlWebpackPlugin({
                //title: 'Development', 
                template: path.resolve(__dirname, 'public', 'index.html'),
                scriptLoading: 'defer',
            }),
            
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