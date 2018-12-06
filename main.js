const electron = require('electron');
const url = require('url');
const path = require('path');
const config = require('./config/config')

const Store = require('electron-store');
const store = new Store();

const en_strings = require('./strings/en');
const kn_strings = require('./strings/kn');

 const isDev = process.mainModule.filename.indexOf('app.asar') === -1;

const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = electron;

const {
 CLEAR_STORAGE,
 HANDLE_CLEAR_STORAGE,
 HANDLE_LANGUAGE_CHANGE,
 PUT_EMOTION_RECOGNITION_DATA,
 HANDLE_PUT_EMOTION_RECOGNITION_DATA,
} = require('./utils/constants');

let mainWindow;

ipcMain.on(PUT_EMOTION_RECOGNITION_DATA, (e, data) => {
  if(data) {
    store.set('emotion_recognition', data)
  }
  mainWindow.send(HANDLE_PUT_EMOTION_RECOGNITION_DATA, {
    success: true,
    message: 'emotion recognition data stored'
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
        label: 'New Patient',
        click() {
          createNewPatient();
        }
      },
      {
        label: 'Language',
        submenu: [
          {
            label: 'English',
            click() {
              switchLanguage('en');
            }
          },
          {
            label: 'Kannada',
            click() {
              switchLanguage('kn');
            }
          }
        ]
      },
      {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      },
    ]
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        accelerator: "CmdOrCtrl+Z",
        selector: "undo:" 
      },
      { 
        label: "Redo",
        accelerator: "Shift+CmdOrCtrl+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "CmdOrCtrl+X",
        selector: "cut:"
      },
      { 
        label: "Copy",
        accelerator: "CmdOrCtrl+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "CmdOrCtrl+V",
        selector: "paste:"
      },
      { 
        label: "Select All",
        accelerator: "CmdOrCtrl+A",
        selector: "selectAll:"
      }
    ]
  }
];

const createNewPatient = () => {
  store.clear();
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
}

const switchLanguage = (lan) => {
  mainWindow.send(HANDLE_LANGUAGE_CHANGE, {
    language: lan,
    strings: lan=='en' ? en_strings : kn_strings
  });
}

if(isDev) {
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