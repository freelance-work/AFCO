const electron = require('electron');
const url = require('url');
const path = require('path');
const config = require('./config/config')

const Store = require('electron-store');
const store = new Store();

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

const {
 PUT_PATIENT_IN_STORAGE,
 HANDLE_PUT_PATIENT_IN_STORAGE,
 GET_PATIENT_FROM_STORAGE,
 HANDLE_GET_PATIENT_FROM_STORAGE,
 CLEAR_STORAGE,
 HANDLE_CLEAR_STORAGE,
} = require('./utils/constants');

let mainWindow;

ipcMain.on(PUT_PATIENT_IN_STORAGE, (e, id) => {
  if(id) {
    store.set('patient_id', id);
  }
  mainWindow.send(HANDLE_PUT_PATIENT_IN_STORAGE, {
    success: true,
    message: 'Patient ID stored'
  });
});

ipcMain.on(GET_PATIENT_FROM_STORAGE, () => {
  mainWindow.send(HANDLE_GET_PATIENT_FROM_STORAGE, {
    success: true,
    message: 'Got patient ID from storage',
    id: store.get('patient_id')
  });
});

ipcMain.on(CLEAR_STORAGE, () => {
  store.clear();
  mainWindow.send(HANDLE_CLEAR_STORAGE, {
    success: true,
    message: 'Storage cleared'
  })
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    'minHeight': config.dimensions.height,
    'minWidth': config.dimensions.width
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if(process.env.NODE_ENV !== 'production') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}