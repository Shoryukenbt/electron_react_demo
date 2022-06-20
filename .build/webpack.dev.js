const options = require('./webpack.config');

options.mode = 'development';

options.devServer = {
    historyApiFallback: true,
    open: true
};

module.exports = options;