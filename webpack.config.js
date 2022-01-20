
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
          },

        plugins: [
            new webpack.ProvidePlugin({
               "React": "react",
            }),

            new HtmlWebpackPlugin({
                 
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