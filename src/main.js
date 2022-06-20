const { app, BrowserWindow } = require('electron');
const setting = require('../setting.json');

const createWindow = () => {
    const { width, height } = setting.window;
    const win = new BrowserWindow({
      width,
      height
    });
  
    win.loadFile('../dist/index.html')
};

app.whenReady().then(() => {
    createWindow()
});