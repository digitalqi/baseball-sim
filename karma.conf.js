module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            'tests.webpack.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
                ]
            },
            watch: true
        }
    });
};