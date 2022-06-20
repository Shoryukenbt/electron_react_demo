const { app, BrowserWindow } = require('electron');
const setting = require('../setting.json');
const { runServer } = require('./server/express');
const createWindow = () => {
    const { width, height } = setting.window;
    const win = new BrowserWindow({
      width,
      height
    });
    // win.loadFile('../dist/index.html');
    win.loadURL('http://localhost:3001/login');
};

Promise.all([runServer(), app.whenReady()]).then(() => {
  createWindow()
})