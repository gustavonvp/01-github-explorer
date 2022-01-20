
const path = require('path')
const webpack = require('webpack')


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