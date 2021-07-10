const path = require('path');
const webpack = require('webpack');

module.exports = {
    // root of bundle and beginning of dependency graph
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    // default mode is production
    mode: 'development'
};