import process from 'node:process';
import { app, BrowserWindow } from 'electron';
import path from 'node:path';

const DEV = !!process.env.APP_DEV;


const createWindow = async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: DEV 
        ? path.join(process.cwd(), 'dist-electron/preload/index.js') 
        : path.join(__dirname, '../preload/index.js'),
    },
  });
  if(DEV) {
    await win.loadURL('http://localhost:5173');
  } else {
    await win.loadFile('./dist/index.html');
  }
};

app.whenReady().then(async () => {
  await createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow().catch(() => {});
    }
  });
}). catch(() => {});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
