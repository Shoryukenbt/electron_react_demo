const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');
const { add, del, update, list } = require('./db-operate');
const settings = require('../../setting.json');
const port = settings.serverPort || 3001;

function initApp() {
    const app = express();

    app.use(bodyParser.json());

    app.use(express.static(path.resolve(__dirname, '../../dist')));

    app.post('/api/login', (req, resp) => {
        const data = req.body;
        if (data && data.account === 'admin' && data.psw === 'admin') {
            resp.send(JSON.stringify({status: 'ok'}));
        }else {
            resp.sendStatus(400);
        }
    });
    app.post('/api/user', (req, resp) => {
        const user = req.body;
        update(user);
        resp.send(JSON.stringify({status: 'ok'}));
    });
    app.put('/api/user', (req, resp) => {
        const user = req.body;
        add(user);
        resp.send(JSON.stringify(user));
    });
    app.delete('/api/:id', (req, resp) => {
        del(req.params.id);
        resp.send(JSON.stringify({status: 'ok'}));
    });
    app.get('/api/users', (req, resp) => {
        const users = list();
        resp.send(JSON.stringify(users));
    });

    app.get('/login', (req, resp) => {
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

exports.runServer();

