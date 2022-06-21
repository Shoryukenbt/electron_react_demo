const options = require('./webpack.config');

options.mode = 'development';

options.devServer = {
    historyApiFallback: true,
    open: true,
    proxy: {
        '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true
        }
    },
    client: {
        logging: 'info',
    }
};

module.exports = options;