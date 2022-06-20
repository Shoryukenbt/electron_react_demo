const express = require('express');
const path = require('path');
const settings = require('../../setting.json');
const port = settings.serverPort || 3001;

function initApp() {
    const app = express();
    app.use(express.static(path.resolve(__dirname, '../../dist')));

    app.get('*', (req, resp) => {
        resp.sendFile(path.resolve(__dirname, '../../dist/index.html'));
    });

    return app;
}

exports.runServer = function() {
    return new Promise((resolve, reject) => {
        initApp().listen(port, () => {
            console.log(`Example app listening on port ${port}`)
            resolve();
        })
    });
}

