const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './app/public/index.ts',
    devtool: 'source-map',
    mode: 'development',
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    // context: path.resolve(__dirname, 'dist'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/app/public'),
    },
    externals: [nodeExternals()]
};
