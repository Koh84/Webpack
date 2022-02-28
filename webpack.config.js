//entry where do we want webpack to find our first file
//output once you read all the file, put all the output into the output directory
//publicPath is the URL to the output directory relative to the html page
//filename is the file we want the output to be called bundle.js
//devServer what we wanna run when we are wanting to host page locally
//contentBase tells the webserver where to host the content from
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new ESLintPlugin()],
}